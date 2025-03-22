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
import { defineAsyncComponent } from 'vue';
import HeroSection from '../components/home/HeroSection.vue';

// Lazy load components that are further down the page
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
