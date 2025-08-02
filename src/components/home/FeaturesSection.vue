<template>
	<section id="features" class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
    <div class="container">
      <h2 class="section-title text-center">Comprehensive IoT Platform Capabilities</h2>
      <p class="section-subtitle text-center">
        From device management to analytics, Stone-Age.io provides everything needed for enterprise IoT deployments across diverse industries and use cases.
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
 * Displays a grid of key platform capabilities with real-world examples
 */

// Define features with platform capabilities 
const features = [
  {
    icon: 'pi pi-database',
    title: 'Device Registry & Lifecycle Management',
    description: 'Centralized device registration, bootstrapping, and configuration management through Pocketbase integration with automated firmware distribution and credential provisioning.'
  },
  {
    icon: 'pi pi-share-alt',
    title: 'Real-time Messaging & Communication',
    description: 'NATS-based publish/subscribe messaging with topic-based permissions and guaranteed delivery for mission-critical operations and instant response times.'
  },
  {
    icon: 'pi pi-server',
    title: 'Edge Computing & Offline Resilience',
    description: 'Local processing capabilities with NATS leaf nodes providing low latency communication and continued operation during network outages with local caching.'
  },
  {
    icon: 'pi pi-chart-line',
    title: 'Time-Series Data & Analytics',
    description: 'Automated message-to-database bridging with TimescaleDB for optimized time-series storage, querying, and configurable data retention policies.'
  },
  {
    icon: 'pi pi-chart-bar',
    title: 'Visualization & Alerting',
    description: 'Built-in Grafana integration providing pre-configured dashboards, real-time monitoring, and intelligent alerting capabilities for operational insights.'
  },
  {
    icon: 'pi pi-shield',
    title: 'Decentralized Authentication',
    description: 'NATS operator/resolver architecture for scalable, secure device authentication with JWT-based permissions and centralized credential management.'
  }
];
</script>
