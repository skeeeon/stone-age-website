<template>
  <div 
    class="pricing-card" 
    :class="{ 'pricing-card-popular': isPopular }"
  >
    <!-- Popular badge (conditional rendering) -->
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
      <!-- Price with v-html for formatting -->
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
/**
 * Pricing Card Component
 * Displays a pricing plan with features and call-to-action
 */

defineProps({
  /**
   * Name of the pricing plan
   */
  name: {
    type: String,
    required: true
  },
  
  /**
   * Subtitle or short description of the plan
   */
  subtitle: {
    type: String,
    default: ''
  },
  
  /**
   * Price display (can include HTML for formatting)
   */
  price: {
    type: String,
    required: true
  },
  
  /**
   * Array of features included in the plan
   */
  features: {
    type: Array,
    default: () => []
  },
  
  /**
   * Text for the call-to-action button
   */
  ctaText: {
    type: String,
    default: 'Get Started'
  },
  
  /**
   * Link for the call-to-action button
   */
  ctaLink: {
    type: String,
    default: '#'
  },
  
  /**
   * CSS classes for the call-to-action button
   */
  ctaClass: {
    type: String,
    default: ''
  },
  
  /**
   * Background color for the card header
   */
  headerBgColor: {
    type: String,
    default: '#1f2937' // Default dark gray
  },
  
  /**
   * CSS classes for the subtitle text
   */
  subtitleClass: {
    type: String,
    default: 'text-gray-300'
  },
  
  /**
   * Whether this is the featured/popular plan
   */
  isPopular: {
    type: Boolean,
    default: false
  }
});
</script>
