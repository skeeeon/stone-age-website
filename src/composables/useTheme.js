// src/composables/useTheme.js
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import { useThemeStore } from '../stores/theme'

/**
 * Composable for theme management
 * Provides reactive state and methods for theme management
 * 
 * @returns {Object} Theme utilities and state
 */
export function useTheme() {
  const themeStore = useThemeStore()
  
  // Track system preference with ref for reactivity
  const systemPrefersDark = ref(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
  
  /**
   * Computed property to determine if dark mode is active
   * Returns true if theme is 'dark' or if theme is 'auto' and system prefers dark
   */
  const isDarkMode = computed(() => {
    return themeStore.theme.value === 'dark' || 
      (themeStore.theme.value === 'auto' && systemPrefersDark.value)
  })
  
  // Setup event listeners for system preference changes
  onMounted(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    // Handler for system preference changes
    const updateSystemPreference = (e) => {
      systemPrefersDark.value = e.matches
      
      // Dispatch event for cross-component communication
      window.dispatchEvent(new CustomEvent('system-theme-changed', {
        detail: { isDark: e.matches }
      }))
    }
    
    // Register event listener with compatibility for older browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateSystemPreference)
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(updateSystemPreference)
    }
    
    // Listen for theme change events from the store
    const handleThemeEvent = () => {
      // This will trigger reactivity when theme changes
    }
    
    window.addEventListener('theme-changed', handleThemeEvent)
    
    // Clean up listeners on component unmount
    onUnmounted(() => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', updateSystemPreference)
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(updateSystemPreference)
      }
      
      window.removeEventListener('theme-changed', handleThemeEvent)
    })
  })
  
  // Apply theme class to document root element when isDarkMode changes
  watch(isDarkMode, (newIsDark) => {
    document.documentElement.classList.toggle('dark', newIsDark)
  }, { immediate: true })
  
  // Return theme utilities and state
  return {
    // Current theme state
    currentTheme: themeStore.theme,
    isDarkMode,
    systemPrefersDark,
    
    // Theme change methods
    setLightTheme: () => themeStore.setTheme('light'),
    setDarkTheme: () => themeStore.setTheme('dark'),
    setSystemTheme: () => themeStore.setTheme('auto'),
    toggleTheme: themeStore.toggleTheme
  }
}
