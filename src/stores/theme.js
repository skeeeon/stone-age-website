// src/stores/theme.js
import { reactive, computed } from 'vue';

/**
 * Theme store for managing application theme
 * Uses reactive state to manage theme preferences
 */

// Create a reactive state object
const state = reactive({
  theme: 'auto', // Can be 'light', 'dark', or 'auto'
  isInitialized: false
});

/**
 * Creates and returns the theme store
 * @returns {Object} Theme store with state and methods
 */
export const useThemeStore = () => {
  // Computed property to get the current theme
  const currentTheme = computed(() => state.theme);

  /**
   * Initialize the theme based on saved preferences
   * Sets up listeners for system preference changes
   */
  const initTheme = () => {
    // Skip if already initialized
    if (state.isInitialized) return;

    // Get saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Validate theme value
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
    // Validate theme value
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
   * Cycles through themes in order: light -> dark -> auto -> light
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
   * This emits an event that will be caught by useTheme composable
   */
  const applyTheme = () => {
    // Dispatch event for theme changes
    window.dispatchEvent(new CustomEvent('theme-changed', { 
      detail: { theme: state.theme } 
    }));
  };

  // Return public API
  return {
    theme: currentTheme,
    initTheme,
    setTheme,
    toggleTheme
  };
};
