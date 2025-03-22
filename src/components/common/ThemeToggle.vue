<template>
  <button 
    @click="toggleTheme" 
    class="relative inline-flex items-center justify-center h-10 w-10 rounded-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors"
    :style="{ 
      backgroundColor: isDark ? 'var(--color-surface-alt)' : 'rgba(31, 75, 142, 0.1)', 
      color: isDark ? '#FFD700' : 'var(--color-primary)' 
    }"
    aria-label="Toggle dark mode"
  >
    <!-- Icon transition -->
    <transition name="theme-toggle" mode="out-in">
      <i v-if="isDark" class="pi pi-moon text-xl"></i>
      <i v-else class="pi pi-sun text-xl"></i>
    </transition>
  </button>
</template>

<script>
import { computed } from 'vue';
import { useThemeStore } from '@/stores/themeStore';

export default {
  name: 'ThemeToggle',
  setup() {
    const themeStore = useThemeStore();
    
    return {
      isDark: themeStore.isDark,
      toggleTheme: themeStore.toggleTheme
    };
  }
}
</script>
