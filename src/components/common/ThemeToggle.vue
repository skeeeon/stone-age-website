<template>
  <div class="flex items-center space-x-1">
    <button 
      @click="toggleMode" 
      class="relative inline-flex items-center justify-center h-10 w-10 rounded-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors"
      :style="{ 
        backgroundColor: isDarkMode ? 'var(--color-surface-tertiary)' : 'rgba(var(--color-primary-rgb), 0.1)', 
        color: isDarkMode ? '#FFD700' : 'var(--color-primary)' 
      }"
      :aria-label="`Toggle theme, currently ${themeLabel} mode`"
    >
      <!-- Icon transition -->
      <transition name="theme-toggle" mode="out-in">
        <i v-if="isDarkMode" class="pi pi-moon text-xl" aria-hidden="true"></i>
        <i v-else-if="currentTheme === 'light'" class="pi pi-sun text-xl" aria-hidden="true"></i>
        <i v-else class="pi pi-desktop text-xl" aria-hidden="true"></i>
      </transition>
    </button>
    
    <!-- Theme label (optional, hidden on mobile) -->
    <span class="text-sm hidden md:inline" aria-hidden="true">{{ themeLabel }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useTheme } from '@/composables/useTheme';

/**
 * Theme toggle component
 * Provides a button to cycle between light, dark, and auto theme modes
 */

// Use the theme composable
const { currentTheme, isDarkMode, toggleTheme } = useTheme();

/**
 * Toggle between light, dark, and system themes
 */
const toggleMode = () => {
  toggleTheme();
};

/**
 * Computed property for the theme label text
 * @returns {string} Current theme label
 */
const themeLabel = computed(() => {
  if (currentTheme.value === 'light') return 'Light';
  if (currentTheme.value === 'dark') return 'Dark';
  return 'Auto';
});
</script>

<style scoped>
/* Theme toggle animation */
.theme-toggle-enter-active,
.theme-toggle-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}

.theme-toggle-enter-from,
.theme-toggle-leave-to {
  opacity: 0;
  transform: scale(0.8) rotate(30deg);
}
</style>
