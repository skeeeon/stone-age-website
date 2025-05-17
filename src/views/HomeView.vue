<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <BenefitsSection />
    <TechnicalSection />
    <CallToAction />
  </div>
</template>

<script setup>
/**
 * Home page view component
 * This is the main landing page with all sections
 * Uses lazy loading for components further down the page for better performance
 */
import { defineAsyncComponent } from 'vue';

// Eagerly load the hero section for immediate display
import HeroSection from '../components/home/HeroSection.vue';

// Lazy load components that are further down the page
// This improves initial page load performance
const FeaturesSection = defineAsyncComponent(() => 
  import('../components/home/FeaturesSection.vue')
);

const BenefitsSection = defineAsyncComponent(() => 
  import('../components/home/BenefitsSection.vue')
);

const TechnicalSection = defineAsyncComponent(() => 
  import('../components/home/TechnicalSection.vue')
);

const CallToAction = defineAsyncComponent(() => 
  import('../components/home/CallToAction.vue')
);
</script>
