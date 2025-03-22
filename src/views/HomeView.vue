<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <BenefitsSection />
    <TechnicalSection />
    <CallToAction />
  </div>
</template>

<script>
import HeroSection from '../components/home/HeroSection.vue';
import FeaturesSection from '../components/home/FeaturesSection.vue';
import BenefitsSection from '../components/home/BenefitsSection.vue';
import TechnicalSection from '../components/home/TechnicalSection.vue';
import CallToAction from '../components/home/CallToAction.vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    FeaturesSection,
    BenefitsSection,
    TechnicalSection,
    CallToAction
  }
}
</script>
