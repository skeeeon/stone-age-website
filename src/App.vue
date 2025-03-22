<template>
  <div class="min-h-screen">
    <TheHeader />
    <main>
      <HomeView />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from './components/layout/TheHeader.vue';
import HomeView from './views/HomeView.vue';
import TheFooter from './components/layout/TheFooter.vue';
import { useThemeStore } from './stores/themeStore';

// Access the theme store to ensure it's initialized
const themeStore = useThemeStore();
const isDark = themeStore.isDark;
</script>

<style>
.container {
  @apply px-4 sm:px-6 mx-auto;
  max-width: 1280px;
}
</style>
