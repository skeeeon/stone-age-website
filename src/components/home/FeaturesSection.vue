<template>
	<section id="features" class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
    <div class="container">
      <h2 class="section-title text-center">Enterprise IoT Made Simple</h2>
      <p class="section-subtitle text-center">
        Stone-Age.io provides a comprehensive platform for diverse IoT applications,
        suitable for organizations of all sizes with flexible deployment options.
      </p>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
        <div 
          v-for="(feature, index) in features" 
          :key="`feature-${index}`" 
          class="tech-feature-card"
        >
          <div class="tech-feature-icon">
            <i :class="feature.icon"></i>
          </div>
          <h3 class="tech-feature-title">{{ feature.title }}</h3>
          <p class="tech-feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * Features section component
 * Displays a grid of key platform features with icons
 */

// Define features directly in the setup scope
const features = [
  {
    icon: 'pi pi-shield',
    title: 'Physical Access Control',
    description: 'Manage building access with credential assignments, access rules, and comprehensive event logging. Includes emergency lockdown capabilities.'
  },
  {
    icon: 'pi pi-cog',
    title: 'Building Automation',
    description: 'Integrate with HVAC, lighting systems and more. Create automation rules for resource optimization and scheduling.'
  },
  {
    icon: 'pi pi-chart-line',
    title: 'Environmental Monitoring',
    description: 'Track temperature, humidity, occupancy, and air quality metrics with support for custom sensors and real-time alerts.'
  },
  {
    icon: 'pi pi-sitemap',
    title: 'Industrial IoT Applications',
    description: 'Monitor production lines, track assets, and automate workflows in manufacturing environments with secure device management.'
  },
  {
    icon: 'pi pi-chart-bar',
    title: 'Analytics & Reporting',
    description: 'Real-time dashboards, historical trend analysis, custom reports, and anomaly detection with compliance documentation.'
  },
  {
    icon: 'pi pi-link',
    title: 'Integration Capabilities',
    description: 'Connect with enterprise systems via RESTful APIs, webhooks, and event streams. Adapters for popular platforms included.'
  }
];
</script>
