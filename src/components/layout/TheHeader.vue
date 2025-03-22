<template>
  <header class="sticky top-0 z-30 shadow-sm" :style="{ backgroundColor: 'var(--color-surface)' }">
    <div class="container py-4 md:py-5 flex items-center justify-between">
      <div class="flex items-center">
        <a href="#" class="font-bold text-2xl transition-colors" style="color: var(--color-primary)">Stone-Age.io</a>
      </div>
      <TheNavbar />
    </div>
  </header>
</template>

<script>
import TheNavbar from './TheNavbar.vue';

export default {
  name: 'TheHeader',
  components: {
    TheNavbar
  }
}
</script>
