const constantExpressions = [
  'now',
  'value',
  'mintime',
  'maxtime',
  'indexvalue',
];

export function getAutocompleteOptions(
  dataFields: string[],
  searchQuery: string,
  fullPrefix: string
): { value: string; type: string }[] {
  console.log('🔍 getAutocompleteOptions - Input:', { dataFields, searchQuery, fullPrefix });
  
  if (dataFields.length == 0) {
    console.log('🔍 getAutocompleteOptions - No data fields available');
    return [];
  }
  if (searchQuery.length == 0) {
    console.log('🔍 getAutocompleteOptions - No search query');
    return [];
  }

  let result = fullPrefix.match(/\{([^}]*?)(?:,\s*([^},]*))?$/i);
  console.log('🔍 getAutocompleteOptions - Data field regex result:', result);
  
  if (!!result) {
    // If there's a comma, use the part after it, otherwise use the part after {
    const dataFieldSearchQuery = result[2] || result[1] || '';
    console.log('🔍 getAutocompleteOptions - Processing data field, searchQuery:', dataFieldSearchQuery);
    if (dataFieldSearchQuery.length == 0) return [];
    
    const searchLower = dataFieldSearchQuery.toLowerCase();
    
    // More efficient matching for large datasets
    const exactMatches = dataFields
      .filter((v) => v.toLowerCase().startsWith(searchLower))
      .sort((a, b) => {
        // Sort by length first, then alphabetically
        if (a.length !== b.length) return a.length - b.length;
        return a.localeCompare(b);
      })
      .slice(0, 10); // Limit to top 10 exact matches
    
    const partialMatches = dataFields
      .filter((v) => {
        const vLower = v.toLowerCase();
        return vLower.includes(searchLower) && !vLower.startsWith(searchLower);
      })
      .sort((a, b) => {
        // Sort by how early the match occurs, then by length
        const aIndex = a.toLowerCase().indexOf(searchLower);
        const bIndex = b.toLowerCase().indexOf(searchLower);
        if (aIndex !== bIndex) return aIndex - bIndex;
        if (a.length !== b.length) return a.length - b.length;
        return a.localeCompare(b);
      })
      .slice(0, 5); // Limit to top 5 partial matches
    
    const allMatches = [...exactMatches, ...partialMatches].map((v) => ({ value: v, type: 'data_item' }));
    console.log('🔍 getAutocompleteOptions - Data field matches:', allMatches);
    return allMatches;
  }

  // constant expressions
  result = fullPrefix.match(/#([^\s]*)/);
  console.log('🔍 getAutocompleteOptions - Constant regex result:', result);
  
  if (!!result) {
    console.log('🔍 getAutocompleteOptions - Processing constants');
    // Extract the part after # as the search query
    const constantSearchQuery = result[1] || '';
    console.log('🔍 getAutocompleteOptions - Constant search query:', constantSearchQuery);
    
    const searchLower = constantSearchQuery.toLowerCase();
    
    const exactMatches = constantExpressions
      .filter((v) => v.toLowerCase().startsWith(searchLower))
      .sort((a, b) => a.length - b.length);
    
    const partialMatches = constantExpressions
      .filter((v) => {
        const vLower = v.toLowerCase();
        return vLower.includes(searchLower) && !vLower.startsWith(searchLower);
      })
      .sort((a, b) => a.length - b.length);
    
    const allMatches = [...exactMatches, ...partialMatches].map((v) => ({ value: v, type: 'constant' }));
    console.log('🔍 getAutocompleteOptions - Constant matches:', allMatches);
    return allMatches;
  }
  
  console.log('🔍 getAutocompleteOptions - No matches found');
  return [];
}

export function performAutocomplete(
  item: { value: string; type: string },
  trigger: string,
  fullPrefix: string,
  fullSuffix: string,
  replaceRegion: string
): string {
  console.log('🔍 performAutocomplete - Input:', { item, trigger, fullPrefix, fullSuffix, replaceRegion });
  
  if (item.type == 'data_item') {
    let result = replaceRegion.match(/\{([^}]*?,\s*)([^},]*)$/i);
    console.log('🔍 performAutocomplete - Data item regex result:', result);
    
    if (!!result) {
      const replacement = `{${result[1]}${item.value}`;
      console.log('🔍 performAutocomplete - Data item replacement (with existing):', replacement);
      return replacement;
    }
    const replacement = `{${item.value}`;
    console.log('🔍 performAutocomplete - Data item replacement (new):', replacement);
    return replacement;
  }
  
  let closingSpace = fullSuffix.match(/^\s/) ? '' : ' ';
  const replacement = `#${item.value}${closingSpace}`;
  console.log('🔍 performAutocomplete - Constant replacement:', replacement);
  return replacement;
} 