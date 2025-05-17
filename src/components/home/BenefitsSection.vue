<template>
	<section id="benefits" class="section dark-section" style="background-color: #121212; color: white;">
    <div class="container">
      <h2 class="section-title text-center text-white">Why Choose Stone-Age.io?</h2>
      <p class="section-subtitle text-center text-gray-300">
        Our open source approach combined with flexible deployment options provides exceptional advantages for all IoT applications.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">
        <div v-for="(benefit, index) in benefits" :key="`benefit-${index}`" 
             class="tech-card dark-card">
          <div class="tech-card-header dark-card-header">
            <div class="flex items-center">
              <div class="rounded-full p-2 mr-3 flex items-center justify-center w-10 h-10"
                 :style="{ backgroundColor: iconBgColors[index] }">
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

// Benefits data with clear, concise points
const benefits = [
  {
    icon: 'pi pi-code',
    title: 'Open Source Transparency',
    description: 'Our open source model provides full visibility and flexibility:',
    points: [
      'Core platform under MIT or BSD license',
      'Complete code transparency',
      'Community contribution model',
      'No vendor lock-in with extensible architecture'
    ]
  },
  {
    icon: 'pi pi-shield',
    title: 'Enterprise-Grade Security',
    description: 'Built with security at its core:',
    points: [
      'TLS for all connections',
      'OAuth2 integration with enterprise identity providers',
      'Topic-level access control and permission management',
      'Secure credential storage and data protection'
    ]
  },
  {
    icon: 'pi pi-server',
    title: 'Flexible Deployment',
    description: 'Choose the environment that works for you:',
    points: [
      'FreeBSD preferred for best stability and performance',
      'Full support for Linux and container environments',
      'Edge-based deployment for multi-site installations',
      'Resilient to connectivity issues with offline operation'
    ]
  },
  {
    icon: 'pi pi-dollar',
    title: 'Commercial Support',
    description: 'Production-ready with professional backing:',
    points: [
      'Free self-hosted community edition',
      'Tiered commercial support plans',
      'Professional implementation services',
      'Training and certification programs'
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
