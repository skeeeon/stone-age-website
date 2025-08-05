<template>
	<section id="benefits" class="section dark-section" style="background-color: #121212; color: white;">
    <div class="container">
      <h2 class="section-title text-center text-white">Why Choose Stone-Age.io?</h2>
      <p class="section-subtitle text-center text-gray-300">
        Our open source approach combined with proven enterprise components provides exceptional advantages for all IoT applications across industries.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">
        <div v-for="(benefit, index) in benefits" :key="`benefit-${index}`" 
             class="tech-card dark-card">
          <div class="tech-card-header dark-card-header">
            <div class="flex items-center">
              <div class="rounded-full p-2 mr-3 flex items-center justify-center w-10 h-10"
                 :style="{ backgroundColor: iconBgColors[0] }">
                <i :class="benefit.icon" class="text-white"></i>
              </div>
              <h3 class="text-xl font-semibold text-white">{{ benefit.title }}</h3>
            </div>
          </div>
          <div class="tech-card-body dark-card-body">
            <p class="text-gray-300 mb-4">{{ benefit.description }}</p>
            <ul class="space-y-3">
              <li v-for="(point, pointIndex) in benefit.points" :key="`point-${index}-${pointIndex}`" 
                  class="flex items-start py-1">
                <i class="pi pi-check mr-2 mt-1 flex-shrink-0" style="color: #4CAF50;"></i>
                <span class="text-white">{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * Benefits section component
 * Highlights the key advantages of using Stone-Age.io platform
 */

// Background colors for icons - blue gradient
const iconBgColors = [
  '#4361ee', // Blue for code
  '#3a86ff', // Blue for shield
  '#4895ef', // Blue for server
  '#4cc9f0'  // Blue for dollar
];

// Benefits data with platform-focused messaging
const benefits = [
  {
    icon: 'pi pi-code',
    title: 'Open Source Transparency',
    description: 'Built entirely on proven open source components with full transparency:',
    points: [
      'Core platform components under permissive licenses',
      'Complete visibility into all system operations',
      'Community-driven development and contributions',
      'No vendor lock-in with extensible, standards-based architecture'
    ]
  },
  {
    icon: 'pi pi-shield',
    title: 'Enterprise-Grade Security',
    description: 'Built with security at its core using proven components:',
    points: [
      'TLS encryption for all NATS communications',
      'Decentralized authentication via NATS operator/resolver',
      'JWT-based device credentials with topic-level permissions',
      'Secure device bootstrapping and credential management'
    ]
  },
  {
    icon: 'pi pi-server',
    title: 'Flexible Deployment',
    description: 'Choose the environment that works for your infrastructure:',
    points: [
      'FreeBSD preferred for optimal stability and performance',
      'Full support for Linux distributions and container environments',
      'Edge-based deployment with NATS leaf nodes for multi-site installations',
      'Resilient to connectivity issues with comprehensive offline operation'
    ]
  },
  {
    icon: 'pi pi-dollar',
    title: 'Commercial Support',
    description: 'Production-ready platform with professional backing:',
    points: [
      'Free self-hosted community edition with full features',
      'Tiered commercial support plans for enterprise deployments',
      'Professional implementation and integration services',
      'Training and certification programs for development teams'
    ]
  }
];
</script>

<style scoped>
.dark-card {
  @apply bg-gray-900 border-none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.dark-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
}

.dark-card-header {
  @apply bg-gray-800 border-b border-gray-700;
}

.dark-card-body {
  @apply text-gray-200;
}
</style>
