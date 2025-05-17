<template>
  <div 
    class="pricing-card" 
    :class="{ 'pricing-card-popular': isPopular }"
  >
    <!-- Popular badge (optional) -->
    <div v-if="isPopular" class="pricing-badge">
      Popular
    </div>
    
    <!-- Card header -->
    <div class="pricing-card-header" :style="{ backgroundColor: headerBgColor }">
      <h3 class="text-xl font-bold text-white">{{ name }}</h3>
      <p class="text-sm mt-1" :class="subtitleClass">{{ subtitle }}</p>
    </div>
    
    <!-- Card content -->
    <div class="pricing-card-body">
      <!-- Price -->
      <div class="pricing-price" v-html="price"></div>
      
      <!-- Features list -->
      <div class="pricing-features">
        <div v-for="(feature, index) in features" :key="`feature-${index}`" class="pricing-feature">
          <i class="pi pi-check pricing-feature-icon"></i>
          <span>{{ feature }}</span>
        </div>
      </div>
      
      <!-- CTA button -->
      <a :href="ctaLink" 
         class="pricing-cta"
         :class="ctaClass">
        {{ ctaText }}
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  price: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    default: () => []
  },
  ctaText: {
    type: String,
    default: 'Get Started'
  },
  ctaLink: {
    type: String,
    default: '#'
  },
  ctaClass: {
    type: String,
    default: ''
  },
  headerBgColor: {
    type: String,
    default: '#1f2937' // Default dark gray
  },
  subtitleClass: {
    type: String,
    default: 'text-gray-300'
  },
  isPopular: {
    type: Boolean,
    default: false
  }
});
</script>
