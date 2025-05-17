import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';

// Import styles
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './assets/css/tailwind.css';

// Import theme store
import { useThemeStore } from './stores/theme';

/**
 * Initialize Vue app with Stone-Age.io configuration
 */
const initApp = () => {
  // Create app instance
  const app = createApp(App);
  
  // Configure PrimeVue
  app.use(PrimeVue, {
    ripple: true,  // Enable ripple effect
    inputStyle: 'filled'  // Use filled input style
  });
  
  // Initialize theme before mounting to prevent flash
  const themeStore = useThemeStore();
  themeStore.initTheme();
  
  // Mount app
  app.mount('#app');
  
  return app;
};

// Initialize the app
const app = initApp();

// Export app instance for potential testing or extension
export { app };
