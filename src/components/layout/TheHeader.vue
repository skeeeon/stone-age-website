<template>
  <header class="sticky top-0 z-30 shadow-sm" :style="{ backgroundColor: 'var(--color-surface)' }">
    <div class="container py-4 md:py-5 flex items-center justify-between">
      <div class="flex items-center">
        <a href="#" class="flex items-center transition-colors">
          <StoneLogo />
        </a>
      </div>
      <TheNavbar />
    </div>
  </header>
</template>

<script setup>
import TheNavbar from './TheNavbar.vue';
import StoneLogo from '../common/StoneLogo.vue';
</script>
