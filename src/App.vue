<template>
  <div class="min-h-screen">
    <TheHeader />
    <main>
      <HomeView />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import HomeView from './views/HomeView.vue';
import TheFooter from './components/layout/TheFooter.vue';
import { useThemeStore } from './stores/themeStore';

export default {
  name: 'App',
  components: {
    TheHeader,
    HomeView,
    TheFooter
  },
  setup() {
    // Access the theme store to ensure it's initialized
    const themeStore = useThemeStore();
    
    return {
      isDark: themeStore.isDark
    };
  }
}
</script>

<style>
.container {
  @apply px-4 sm:px-6 mx-auto;
  max-width: 1280px;
}
</style>
