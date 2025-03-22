import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';

// Import styles
import 'primevue/resources/themes/lara-light-blue/theme.css';
import 'primeicons/primeicons.css';
import './assets/css/tailwind.css';

// Import theme store
import { useThemeStore } from './stores/themeStore';

const app = createApp(App);

// Use PrimeVue
app.use(PrimeVue, {
  ripple: true,
  inputStyle: 'filled'
});

// Initialize the theme
const themeStore = useThemeStore();

// Initialize theme before mounting the app to prevent flash
themeStore.initTheme();

app.mount('#app');
