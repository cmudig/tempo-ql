import { writable } from 'svelte/store';

export type Theme = 'light' | 'dark';

function createThemeStore() {
  // Check for saved theme in localStorage or default to 'dark'
  const savedTheme =
    typeof window !== 'undefined'
      ? (localStorage.getItem('theme') as Theme)
      : 'dark';
  const initialTheme = savedTheme || 'dark';

  const { subscribe, set, update } = writable<Theme>(initialTheme);

  // Apply theme to document element
  if (typeof window !== 'undefined') {
    const html = document.documentElement;
    if (initialTheme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  return {
    subscribe,
    toggle: () =>
      update((theme) => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        if (typeof window !== 'undefined') {
          localStorage.setItem('theme', newTheme);
          const html = document.documentElement;
          if (newTheme === 'dark') {
            html.classList.add('dark');
          } else {
            html.classList.remove('dark');
          }
        }
        return newTheme;
      }),
    set: (theme: Theme) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', theme);
        const html = document.documentElement;
        if (theme === 'dark') {
          html.classList.add('dark');
        } else {
          html.classList.remove('dark');
        }
      }
      set(theme);
    },
  };
}

export const theme = createThemeStore();
