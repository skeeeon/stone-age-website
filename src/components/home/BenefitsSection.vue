<template>
	<section id="benefits" class="section dark-section" style="background-color: #121212; color: white;">
    <div class="container">
      <h2 class="section-title text-center text-white">Why Choose Stone-Age.io?</h2>
      <p class="section-subtitle text-center text-gray-300">
        Our open source approach combined with enterprise-grade reliability delivers unique advantages for businesses of all sizes.
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
// Define data directly in the setup scope
const iconBgColors = [
  '#4361ee', // Blue for code
  '#3a86ff', // Blue for shield
  '#4895ef', // Blue for server
  '#4cc9f0'  // Blue for dollar
];

const benefits = [
  {
    icon: 'pi pi-code',
    title: 'Open Source Transparency',
    description: 'Our open source model provides full visibility and flexibility:',
    points: [
      'Core platform under MIT or BSD license',
      'Full transparency of code base',
      'Community contribution model',
      'No vendor lock-in'
    ]
  },
  {
    icon: 'pi pi-shield',
    title: 'Enterprise-Grade Security',
    description: 'Built with security at its core:',
    points: [
      'TLS for all connections',
      'OAuth2 integration with identity providers',
      'Topic-level access control',
      'Role-based permissions'
    ]
  },
  {
    icon: 'pi pi-server',
    title: 'Lightweight Go Architecture',
    description: 'Designed for reliability and performance:',
    points: [
      'Efficient Go microservices for minimal resource usage',
      'Container-optimized deployment for any environment',
      'Immutable infrastructure deployment',
      'Edge processing with offline operation'
    ]
  },
  {
    icon: 'pi pi-dollar',
    title: 'Cost-Effective Solution',
    description: 'Lower total cost of ownership:',
    points: [
      'Free self-hosted option available',
      'Tiered subscription model to fit your needs',
      'Flexible deployment options',
      'Pay only for what you need'
    ]
  }
];
</script>

<style scoped>
.dark-card {
  background-color: #1a1d36;
  border: none;
}

.dark-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
}

.dark-card-header {
  background-color: #131631;
  border-bottom: 1px solid rgba(75, 85, 99, 0.4);
}

.dark-card-body {
  color: #e5e7eb;
}
</style>
