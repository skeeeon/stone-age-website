<template>
  <section id="cta" class="py-16 md:py-24 dark-section" :style="{ backgroundColor: 'var(--color-primary)' }">
    <div class="container text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
      <p class="text-lg sm:text-xl mb-10 max-w-2xl mx-auto text-white">
        Join us in building the future of physical access control and building automation with an open source approach.
      </p>
      
      <!-- Action buttons -->
      <div class="flex flex-col sm:flex-row justify-center gap-4 mb-16">
        <a v-for="(button, index) in actionButtons" :key="`action-btn-${index}`"
           :href="button.href" 
           class="inline-flex items-center justify-center px-5 py-3 rounded-md font-medium transition-all"
           :class="button.classes">
          <i :class="`pi ${button.icon} mr-2`"></i>
          {{ button.text }}
        </a>
      </div>
      
      <!-- Pricing cards grid -->
      <div class="pricing-container">
        <PricingCard
          v-for="(plan, index) in pricingPlans"
          :key="`plan-${index}`"
          :name="plan.name"
          :subtitle="plan.subtitle"
          :price="plan.price"
          :features="plan.features"
          :cta-text="plan.ctaText"
          :cta-link="plan.ctaLink"
          :cta-class="plan.ctaClass"
          :header-bg-color="plan.headerBgColor"
          :subtitle-class="plan.subtitleClass"
          :is-popular="plan.isPopular"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import PricingCard from '../pricing/PricingCard.vue';

// Action buttons at the top
const actionButtons = [
  {
    text: 'View Documentation',
    icon: 'pi-file',
    href: '#',
    classes: 'bg-white text-blue-800 hover:bg-gray-100'
  },
  {
    text: 'GitHub Repository',
    icon: 'pi-github',
    href: 'https://github.com',
    classes: 'bg-white text-blue-800 hover:bg-gray-100'
  },
  {
    text: 'Contact Sales',
    icon: 'pi-envelope',
    href: '#',
    classes: 'bg-transparent border border-white text-white hover:bg-white/10'
  }
];

// Pricing plans with consistent properties
const pricingPlans = [
  {
    name: 'Community',
    subtitle: 'Self-hosted',
    headerBgColor: '#1f2937', // Dark gray
    subtitleClass: 'text-gray-300',
    price: 'Free',
    features: [
      'Unlimited devices',
      'Self-hosted deployment',
      'Community support',
      'Core features only'
    ],
    ctaText: 'Download',
    ctaLink: 'https://github.com',
    ctaClass: 'border border-gray-600 bg-gray-800 hover:bg-gray-700 text-white',
    isPopular: false
  },
  {
    name: 'Starter',
    subtitle: 'For small businesses',
    headerBgColor: '#1f2937', // Dark gray
    subtitleClass: 'text-gray-300',
    price: '$199<span class="text-lg font-normal">/month</span>',
    features: [
      'Up to 2 edge installations',
      'Email and Phone support',
      '30 days data retention',
      'Standard SLA'
    ],
    ctaText: 'Get Started',
    ctaLink: '#',
    ctaClass: 'border border-gray-600 bg-gray-800 hover:bg-gray-700 text-white',
    isPopular: false
  },
  {
    name: 'Business',
    subtitle: 'For growing organizations',
    headerBgColor: '#3b82f6', // Blue
    subtitleClass: 'text-white opacity-90',
    price: '$499<span class="text-lg font-normal">/month</span>',
    features: [
      'Up to 10 edge installations',
      'Priority support',
      '90 days data retention',
      'Enhanced SLA'
    ],
    ctaText: 'Get Started',
    ctaLink: '#',
    ctaClass: 'bg-white hover:bg-gray-100 text-blue-600',
    isPopular: true
  },
  {
    name: 'Enterprise',
    subtitle: 'For large organizations',
    headerBgColor: '#1f2937', // Dark gray
    subtitleClass: 'text-gray-300',
    price: 'Custom',
    features: [
      'Unlimited edge installations',
      '24/7 dedicated support',
      'Custom data retention',
      'Custom SLA'
    ],
    ctaText: 'Contact Us',
    ctaLink: '#',
    ctaClass: 'border border-gray-600 bg-gray-800 hover:bg-gray-700 text-white',
    isPopular: false
  }
];
</script>
