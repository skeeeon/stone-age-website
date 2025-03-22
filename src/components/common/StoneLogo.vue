<template>
  <div class="logo-container" :class="size">
    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" version="1.0" viewBox="0 0 256 256" class="logo-image">
      <path :style="{ fill: isDark ? '#FFFFFF' : '#1F4B8E' }" d="M 128,0 C 57.343,0 0,57.343 0,128 C 0,198.657 57.343,256 128,256 C 198.657,256 256,198.657 256,128 C 256,57.343 198.657,0 128,0 z M 128,28 C 181.423,28 224.757,71.334 224.757,124.757 C 224.757,139.486 221.04,153.32 214.356,165.42 C 198.756,148.231 178.567,138.124 162.876,124.331 C 155.723,124.214 128.543,124.043 113.254,124.043 C 113.254,147.334 113.254,172.064 113.254,190.513 C 100.456,179.347 94.543,156.243 94.543,156.243 C 83.432,147.065 31.243,124.757 31.243,124.757 C 31.243,71.334 74.577,28 128,28 z" />
    </svg>
    <span v-if="showText" class="logo-text" :class="{'sr-only': textHidden}">Stone-Age.io</span>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useThemeStore } from '@/stores/themeStore';

// Props definition
const props = defineProps({
  size: {
    type: String,
    default: 'md'
  },
  showText: {
    type: Boolean,
    default: true
  },
  textHidden: {
    type: Boolean,
    default: false
  }
});

// Use the theme store
const themeStore = useThemeStore();
const isDark = computed(() => themeStore.isDark.value);
</script>

<style scoped>
.logo-container {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.logo-image {
  height: 32px;
  width: auto;
  transition: all 0.3s ease;
}

.logo-text {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
  color: var(--color-primary);
  transition: color 0.3s ease;
}

/* Apply dark mode styles */
:deep(.dark) .logo-text {
  color: white;
}

/* Size variants */
.logo-container.sm .logo-image {
  height: 24px;
}

.logo-container.sm .logo-text {
  font-size: 1rem;
}

.logo-container.lg .logo-image {
  height: 40px;
}

.logo-container.lg .logo-text {
  font-size: 1.5rem;
}

/* Accessibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
