<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <main class="flex-grow">
      <HomeView />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
/**
 * Root application component
 * Defines the main layout structure of the application
 */
import TheHeader from './components/layout/TheHeader.vue';
import HomeView from './views/HomeView.vue';
import TheFooter from './components/layout/TheFooter.vue';
import { useTheme } from './composables/useTheme';

// Initialize the theme system
const { isDarkMode } = useTheme();
</script>

<style>
/* Global container style */
.container {
  @apply px-4 sm:px-6 mx-auto;
  max-width: 1280px;
}

/* Add smooth scrolling to the entire page */
html {
  scroll-behavior: smooth;
}

/* Improve focus styles for accessibility */
:focus-visible {
  @apply outline-none ring-2 ring-primary-600 ring-offset-2;
  @apply dark:ring-primary-400 dark:ring-offset-gray-800;
}
</style>
