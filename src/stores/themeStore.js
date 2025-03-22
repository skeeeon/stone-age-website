import { reactive, computed } from 'vue';

// Create a reactive state object
const state = reactive({
  isDark: false,
  isInitialized: false
});

// Create the theme store
export const useThemeStore = () => {
  // Computed property to get the current theme
  const currentTheme = computed(() => state.isDark ? 'dark' : 'light');

  // Method to initialize the theme based on system preferences and saved settings
  const initTheme = () => {
    if (state.isInitialized) return;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      state.isDark = true;
    } else if (savedTheme === 'light') {
      state.isDark = false;
    } else {
      // If no saved preference, use system preference
      state.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Apply theme to document
    applyTheme();
    
    // Setup listener for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (localStorage.getItem('theme')) return; // Don't override user preference
      state.isDark = e.matches;
      applyTheme();
    });

    state.isInitialized = true;
  };

  // Method to toggle the theme
  const toggleTheme = () => {
    state.isDark = !state.isDark;
    saveTheme();
    applyTheme();
  };

  // Method to set a specific theme
  const setTheme = (theme) => {
    state.isDark = theme === 'dark';
    saveTheme();
    applyTheme();
  };

  // Save theme preference to localStorage
  const saveTheme = () => {
    localStorage.setItem('theme', state.isDark ? 'dark' : 'light');
  };

  // Apply the theme to the document
  const applyTheme = () => {
    if (state.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return {
    isDark: computed(() => state.isDark),
    currentTheme,
    initTheme,
    toggleTheme,
    setTheme
  };
};
