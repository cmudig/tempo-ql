import { writable, get } from 'svelte/store';

export function createHttpBackendConnection(apiBase = '/api') {
  // Reactive stores (Svelte writables)
  const values = writable<Record<string, any>>({});
  const queryForResults = writable('');
  const savePath = writable('');
  const fileContents = writable<Record<string, any>>({});
  const listNames = writable<{ attributes: string[]; events: string[]; intervals: string[] }>({
    attributes: [],
    events: [],
    intervals: [],
  });
  const subqueries = writable<Record<string, any>>({});
  const queryError = writable('');
  const scopes = writable<string[]>([]);
  const scopeConcepts = writable<Record<string, any>>({});
  const isLoading = writable(false);
  const loadingMessage = writable('');
  const llmResponse = writable('');
  const llmLoading = writable(false);
  const llmError = writable('');
  const llmAvailable = writable(true);
  const apiStatus = writable('Checking API connection...');
  const extractedQuery = writable('');
  const llmExplanation = writable('');
  const hasExtractedQuery = writable(false);
  const textInput = writable('');
  const queryHistory = writable<any[]>([]);
  const aiHistory = writable<any[]>([]);

  // Helper to push to bounded history arrays
  function pushHistory(store: typeof queryHistory, item: any, key: string, maxLen = 10) {
    store.update((current) => {
      const filtered = current.filter((entry) => entry[key] !== item[key]);
      filtered.unshift(item);
      return filtered.slice(0, maxLen);
    });
  }

  async function fetchJson(path: string, options: RequestInit = {}) {
    console.log(`🔍 Fetching JSON from ${apiBase}${path}`)
    const res = await fetch(`${apiBase}${path}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });

    // Read raw text first so we can handle both JSON and non-JSON responses
    const raw = await res.text();
    console.log(raw)
    let data: any = null;

    if (raw) {
      try {
        data = JSON.parse(raw);
      } catch {
        // Not valid JSON; leave data as null and use raw text for error messages
        data = null;
      }
    }

    if (!res.ok) {
      const msg =
        (data && (data.detail ?? data.error)) ||
        raw ||
        'Request failed';
      throw new Error(msg);
    }

    // If body was empty, return an empty object
    return data ?? {};
  }

  async function initDatasetInfo() {
    try {
      const info = await fetchJson('/dataset/info', { method: 'GET' });
      listNames.set({
        attributes: info.list_names ?? [],
        events: [],
        intervals: [],
      });
      scopes.set(info.scopes ?? []);
      // you can also store ids_length if needed
    } catch (e: any) {
      console.error('Failed to load dataset info', e);
      apiStatus.set(`Error loading dataset info: ${e.message ?? e}`);
    }
  }

  // Call once on connection creation
  initDatasetInfo();

  async function runQuery(variableName: string | null, input: string) {
    textInput.set(input);
    queryForResults.set(input);
    queryError.set('');
    llmExplanation.set('');

    isLoading.set(true);
    loadingMessage.set('Running query...');
    try {
      const body = {
        query: input,
        var_name: variableName,
        file_contents: get(fileContents),
      };
      
      const resp = await fetchJson('/query', {
        method: 'POST',
        body: JSON.stringify(body),
      });

      values.set(resp.values ?? {});
      subqueries.set(resp.subqueries ?? {});
      // resp.data can be very large; store if needed
      llmError.set('');

      // Update query history
      pushHistory(queryHistory, {
        query: input,
        timestamp: new Date().toISOString(),
      }, 'query');
    } catch (e: any) {
      console.error('Query failed', e);
      queryError.set(e.message ?? 'Query failed');
      values.set({});
      subqueries.set({});
    } finally {
      isLoading.set(false);
      loadingMessage.set('');
    }
  }

  async function handleLLMQuestion(question: string) {
    if (!question.trim()) {
      llmError.set('No question provided');
      return;
    }
    llmLoading.set(true);
    isLoading.set(true);
    loadingMessage.set('Generating...');
    llmError.set('');
    llmResponse.set('');
    extractedQuery.set('');

    try {
      const body = {
        question,
        current_query_text: get(textInput),
      };
      const resp = await fetchJson('/ai/ask', {
        method: 'POST',
        body: JSON.stringify(body),
      });
      llmResponse.set(resp.explanation ?? '');
      extractedQuery.set(resp.extracted_query ?? '');
      hasExtractedQuery.set(!!resp.has_query);
      llmAvailable.set(true);

      pushHistory(aiHistory, {
        question,
        answer: resp.explanation ?? '',
        query: resp.extracted_query ?? '',
        timestamp: new Date().toISOString(),
      }, 'question');
    } catch (e: any) {
      console.error('AI ask failed', e);
      llmError.set(e.message ?? 'AI request failed');
    } finally {
      llmLoading.set(false);
      isLoading.set(false);
      loadingMessage.set('');
    }
  }

  async function handleLLMExplanation() {
    const currentQuery = get(queryForResults);
    const currentError = get(queryError);
    if (!currentQuery) {
      llmError.set('No query to explain');
      return;
    }
    llmLoading.set(true);
    isLoading.set(true);
    loadingMessage.set('Explaining query...');
    llmError.set('');

    try {
      const body = {
        query_for_results: currentQuery,
        query_error: currentError,
      };
      const resp = await fetchJson('/ai/explain', {
        method: 'POST',
        body: JSON.stringify(body),
      });
      llmExplanation.set(resp.explanation ?? '');
    } catch (e: any) {
      console.error('AI explain failed', e);
      llmError.set(e.message ?? 'AI explanation failed');
    } finally {
      llmLoading.set(false);
      isLoading.set(false);
      loadingMessage.set('');
    }
  }

  async function handleScopeAnalysis(scopeName: string, forceRefresh = false) {
    if (!scopeName) return;
    isLoading.set(true);
    loadingMessage.set(`Analyzing scope: ${scopeName}...`);
    try {
      const body = { scope_name: scopeName, force_refresh: forceRefresh };
      const resp = await fetchJson('/scope', {
        method: 'POST',
        body: JSON.stringify(body),
      });
      scopeConcepts.set(resp);
    } catch (e: any) {
      console.error('Scope analysis failed', e);
      // Optionally surface into a dedicated error store
    } finally {
      isLoading.set(false);
      loadingMessage.set('');
    }
  }

  function handleQueryExtraction() {
    const currentExtracted = get(extractedQuery);
    const currentInput = get(textInput);
    if (currentExtracted && currentExtracted !== currentInput) {
      textInput.set(currentExtracted);
    }
  }

  return {
    // Reactive stores
    values,
    queryForResults,
    savePath,
    fileContents,
    listNames,
    subqueries,
    queryError,
    scopes,
    scopeConcepts,
    isLoading,
    loadingMessage,
    llmResponse,
    llmLoading,
    llmError,
    llmAvailable,
    apiStatus,
    extractedQuery,
    llmExplanation,
    hasExtractedQuery,
    textInput,
    queryHistory,
    aiHistory,

    // Actions
    runQuery,
    handleLLMQuestion,
    handleLLMExplanation,
    handleQueryExtraction,
    handleScopeAnalysis,
  };
}