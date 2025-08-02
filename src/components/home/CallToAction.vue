<template>
  <section id="cta" class="py-16 md:py-24 dark-section" :style="{ backgroundColor: 'var(--color-primary)' }">
    <div class="container text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">Deploy Stone-Age.io for Your Enterprise</h2>
      <p class="text-lg sm:text-xl mb-10 max-w-2xl mx-auto text-white">
        Whether you're building access control systems, industrial monitoring, or custom IoT applications, start with our proven platform built on enterprise-grade open source components.
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
      
      <!-- Additional pricing information -->
      <div class="mt-12 text-center">
        <div class="bg-white/10 rounded-lg p-6 max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
            <div>
              <h4 class="text-lg font-semibold mb-2">Annual Savings</h4>
              <p class="text-sm opacity-90">Save 10% when you pay annually. All plans include managed NATS cluster, TimescaleDB storage, and Grafana visualization.</p>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-2">Free Trial Available</h4>
              <p class="text-sm opacity-90">Qualified organizations can apply for free trials and proof-of-concept deployments. Contact our sales team to learn more.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PricingCard from '../pricing/PricingCard.vue';

/**
 * CallToAction component with pricing plans and CTA buttons
 * Displays pricing options and calls-to-action for different user segments
 */

// Action buttons at the top - focused on open source and enterprise
const actionButtons = [
  {
    text: 'Read Documentation',
    icon: 'pi-file',
    href: 'https://docs.stone-age.io',
    classes: 'bg-white text-blue-800 hover:bg-gray-100'
  },
  {
    text: 'GitHub Repository',
    icon: 'pi-github',
    href: 'https://github.com/stone-age-io',
    classes: 'bg-white text-blue-800 hover:bg-gray-100'
  },
  {
    text: 'Contact Sales',
    icon: 'pi-envelope',
    href: 'mailto:info@stone-age.io',
    classes: 'bg-transparent border border-white text-white hover:bg-white/10'
  }
];

// Pricing plans - unified color scheme with popular plan highlighted
const pricingPlans = [
  {
    name: 'Community',
    subtitle: 'Self-hosted',
    headerBgColor: '#1f2937', // Dark gray for all standard plans
    subtitleClass: 'text-gray-300',
    price: 'Free',
    features: [
      'Unlimited devices',
      'Self-hosted deployment',
      'Community support only',
      'Core platform features'
    ],
    ctaText: 'Download',
    ctaLink: 'https://github.com',
    ctaClass: 'border border-gray-500 bg-gray-700 hover:bg-gray-600 text-white',
    isPopular: false
  },
  {
    name: 'Starter',
    subtitle: 'For small businesses',
    headerBgColor: '#1f2937', // Same as others
    subtitleClass: 'text-gray-300',
    price: '$299<span class="text-lg font-normal">/month</span>',
    features: [
      'Up to 2 edge installations',
      'Includes 1 edge node hardware',
      'Email support & basic SLA',
      '30 days data retention'
    ],
    ctaText: 'Get Started',
    ctaLink: '#',
    ctaClass: 'border border-gray-500 bg-gray-700 hover:bg-gray-600 text-white',
    isPopular: false
  },
  {
    name: 'Business',
    subtitle: 'For growing organizations',
    headerBgColor: '#f59e0b', // Amber for popular plan only
    subtitleClass: 'text-amber-100',
    price: '$799<span class="text-lg font-normal">/month</span>',
    features: [
      'Up to 10 edge installations',
      'Includes 2 edge node hardware',
      'Phone & email support',
      '90 days data retention'
    ],
    ctaText: 'Get Started',
    ctaLink: '#',
    ctaClass: 'bg-white hover:bg-gray-100 text-amber-700',
    isPopular: true
  },
  {
    name: 'Enterprise',
    subtitle: 'For large organizations',
    headerBgColor: '#1f2937', // Same as others
    subtitleClass: 'text-gray-300',
    price: '$1,999<span class="text-lg font-normal">/month</span>',
    features: [
      'Up to 25 edge installations',
      'Includes 3 edge node hardware',
      'Dedicated support engineer',
      '1 year data retention'
    ],
    ctaText: 'Contact Sales',
    ctaLink: '#',
    ctaClass: 'border border-gray-500 bg-gray-700 hover:bg-gray-600 text-white',
    isPopular: false
  },
  {
    name: 'Enterprise+',
    subtitle: 'Custom solutions',
    headerBgColor: '#1f2937', // Same as others
    subtitleClass: 'text-gray-300',
    price: 'Custom',
    features: [
      'Unlimited edge installations',
      'Custom hardware packages',
      'White-label options available',
      'Custom data retention & SLA'
    ],
    ctaText: 'Contact Sales',
    ctaLink: '#',
    ctaClass: 'border border-gray-500 bg-gray-700 hover:bg-gray-600 text-white',
    isPopular: false
  }
];
</script>
