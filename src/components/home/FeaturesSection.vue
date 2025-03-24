<template>
	<section id="features" class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
    <div class="container">
      <h2 class="section-title text-center">Enterprise IoT Made Simple</h2>
      <p class="section-subtitle text-center">
        Stone-Age.io provides a comprehensive platform that addresses critical enterprise IoT needs
        while remaining accessible to mid-market organizations.
      </p>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
        <div 
          v-for="(feature, index) in features" 
          :key="`feature-${index}`" 
          class="feature-card"
        >
          <i :class="feature.icon" class="feature-icon"></i>
          <h3 class="text-xl font-semibold mb-3">{{ feature.title }}</h3>
          <p :style="{ color: 'var(--color-text-light)' }">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Define features directly in the setup scope
const features = [
  {
    icon: 'pi pi-shield',
    title: 'Physical Access Control',
    description: 'Manage building access with credential assignments, access rules, and event logging. Includes emergency lockdown capabilities.'
  },
  {
    icon: 'pi pi-cog',
    title: 'Building Automation',
    description: 'Integrate with HVAC, lighting systems and more. Create automation rules for resource optimization.'
  },
  {
    icon: 'pi pi-chart-line',
    title: 'Environmental Monitoring',
    description: 'Track temperature, humidity, occupancy, and air quality metrics with support for custom sensors.'
  },
  {
    icon: 'pi pi-server',
    title: 'Edge-Based Deployment',
    description: 'Distributed processing at installation sites with local persistence for offline operation.'
  },
  {
    icon: 'pi pi-chart-bar',
    title: 'Analytics & Reporting',
    description: 'Real-time dashboards, historical trend analysis, custom reports, and anomaly detection.'
  },
  {
    icon: 'pi pi-link',
    title: 'Integration Capabilities',
    description: 'Connect with HR systems, visitor management, SIEM, and building management systems via APIs and webhooks.'
  }
];
</script>
