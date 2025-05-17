// src/stores/theme.js
import { reactive, computed } from 'vue';

// Create a reactive state object
const state = reactive({
  theme: 'auto', // Can be 'light', 'dark', or 'auto'
  isInitialized: false
});

/**
 * Theme store for managing application theme
 * Supports light, dark, and auto (system preference) modes
 */
export const useThemeStore = () => {
  // Computed property to get the current theme
  const currentTheme = computed(() => state.theme);

  /**
   * Initialize the theme based on saved preferences
   * Sets up listeners for system preference changes
   */
  const initTheme = () => {
    if (state.isInitialized) return;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || savedTheme === 'light' || savedTheme === 'auto') {
      state.theme = savedTheme;
    } else {
      // Default to auto if no preference is saved
      state.theme = 'auto';
    }

    // Apply theme to document
    applyTheme();
    
    // Emit theme initialized event
    window.dispatchEvent(new CustomEvent('theme-changed', { 
      detail: { theme: state.theme } 
    }));

    state.isInitialized = true;
  };

  /**
   * Set the theme to light, dark, or auto
   * @param {string} theme - The theme to set ('light', 'dark', or 'auto')
   */
  const setTheme = (theme) => {
    if (theme !== 'light' && theme !== 'dark' && theme !== 'auto') {
      console.warn(`Invalid theme: ${theme}. Must be 'light', 'dark', or 'auto'.`);
      return;
    }

    state.theme = theme;
    saveTheme();
    applyTheme();
    
    // Emit theme changed event
    window.dispatchEvent(new CustomEvent('theme-changed', { 
      detail: { theme: state.theme } 
    }));
  };

  /**
   * Toggle between light, dark, and auto themes
   */
  const toggleTheme = () => {
    if (state.theme === 'light') {
      setTheme('dark');
    } else if (state.theme === 'dark') {
      setTheme('auto');
    } else {
      setTheme('light');
    }
  };

  /**
   * Save theme preference to localStorage
   */
  const saveTheme = () => {
    localStorage.setItem('theme', state.theme);
  };

  /**
   * Apply the theme to the document
   * This is handled by the useTheme composable
   * but we trigger an event to ensure theme is applied
   */
  const applyTheme = () => {
    // The actual application of theme is managed by useTheme composable
    // We just need to make sure the event is dispatched
    window.dispatchEvent(new CustomEvent('theme-changed', { 
      detail: { theme: state.theme } 
    }));
  };

  return {
    theme: currentTheme,
    initTheme,
    setTheme,
    toggleTheme
  };
};
