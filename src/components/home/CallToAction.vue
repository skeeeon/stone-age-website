<template>
  <section id="cta" class="py-16 md:py-24" style="background-color: var(--color-primary);">
    <div class="container text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
      <p class="text-lg sm:text-xl mb-10 max-w-2xl mx-auto text-white">
        Join us in building the future of physical access control and building automation with an open source approach.
      </p>
      
      <div class="flex flex-col sm:flex-row justify-center gap-4 mb-16">
        <a v-for="(button, index) in actionButtons" :key="`action-btn-${index}`"
           :href="button.href" 
           class="inline-flex items-center justify-center px-5 py-3 rounded-md font-medium"
           :class="button.classes">
          <i :class="`pi ${button.icon} mr-2`"></i>
          {{ button.text }}
        </a>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div v-for="(plan, index) in pricingPlans" :key="`pricing-${index}`"
             class="rounded-lg overflow-hidden shadow-lg"
             :class="{ 'relative transform md:scale-105 md:z-10': plan.isPopular }">
          <!-- Header -->
          <div class="p-4 text-center" :class="plan.headerClass">
            <h3 class="text-2xl font-bold text-white">{{ plan.name }}</h3>
            <p :class="plan.subtitleClass">{{ plan.subtitle }}</p>
          </div>
          
          <!-- Content -->
          <div class="bg-gray-800 p-6 text-white">
            <div class="text-3xl font-bold mb-6" v-html="plan.price"></div>
            
            <div class="text-left space-y-4 mb-8">
              <div v-for="(feature, featureIndex) in plan.features" :key="`plan-${index}-feature-${featureIndex}`" 
                   class="flex items-start">
                <i class="pi pi-check text-green-400 mr-2 mt-1"></i>
                <span>{{ feature }}</span>
              </div>
            </div>
            
            <a :href="plan.ctaLink" class="block w-full py-3 rounded-md font-medium text-center"
               :class="plan.ctaClass">
              {{ plan.ctaText }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Action buttons at the top
const actionButtons = [
  {
    text: 'View Documentation',
    icon: 'pi-file',
    href: '#',
    classes: 'bg-white text-blue-800'
  },
  {
    text: 'GitHub Repository',
    icon: 'pi-github',
    href: 'https://github.com',
    classes: 'bg-white text-blue-800'
  },
  {
    text: 'Contact Sales',
    icon: 'pi-envelope',
    href: '#',
    classes: 'bg-transparent border border-white text-white'
  }
];

// Pricing plans
const pricingPlans = [
  {
    name: 'Starter',
    subtitle: 'For small businesses',
    headerClass: 'bg-gray-900',
    subtitleClass: 'text-gray-300',
    price: '$299<span class="text-lg font-normal">/month</span>',
    features: [
      'Up to 50 devices',
      '1 site',
      '30 days retention'
    ],
    ctaText: 'Get Started',
    ctaLink: 'https://github.com',
    ctaClass: 'border border-gray-600 bg-gray-800 hover:bg-gray-700 text-white',
    isPopular: false
  },
  {
    name: 'Business',
    subtitle: 'For growing organizations',
    headerClass: 'bg-blue-500',
    subtitleClass: 'text-white opacity-90',
    price: '$999<span class="text-lg font-normal">/month</span>',
    features: [
      'Up to 500 devices',
      '5 sites',
      '90 days retention'
    ],
    ctaText: 'Get Started',
    ctaLink: 'https://github.com',
    ctaClass: 'bg-white hover:bg-gray-100 text-blue-600',
    isPopular: true
  },
  {
    name: 'Enterprise',
    subtitle: 'For large organizations',
    headerClass: 'bg-gray-900',
    subtitleClass: 'text-gray-300',
    price: 'Custom',
    features: [
      'Custom device count',
      'Unlimited sites',
      'Custom retention'
    ],
    ctaText: 'Contact Us',
    ctaLink: '#',
    ctaClass: 'border border-gray-600 bg-gray-800 hover:bg-gray-700 text-white',
    isPopular: false
  }
];
</script>
