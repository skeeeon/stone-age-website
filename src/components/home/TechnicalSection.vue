<template>
  <section id="architecture" class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
    <div class="container">
      <h2 class="section-title text-center">Platform Architecture</h2>
      <p class="section-subtitle text-center">
        Built on proven open source components, our architecture provides enterprise-grade reliability,
        scalability, and security for diverse IoT applications.
      </p>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 md:mt-16">
        <!-- Core Components Card -->
        <div class="tech-card">
          <div class="tech-card-header">
            <h3 class="text-xl font-semibold">Core Components</h3>
          </div>
          <div class="tech-card-body">
            <div class="space-y-6">
              <div v-for="(component, index) in coreComponents" :key="`component-${index}`" class="feature-item">
                <div class="feature-icon">
                  <i :class="component.icon" class="text-white"></i>
                </div>
                <div class="feature-content">
                  <h4 class="feature-title">{{ component.title }}</h4>
                  <p class="feature-description">{{ component.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Architecture Flow Card -->
        <div class="tech-card">
          <div class="tech-card-header">
            <h3 class="text-xl font-semibold">Data Flow Architecture</h3>
          </div>
          <div class="tech-card-body">
            <div class="h-full flex flex-col justify-between p-4 rounded-lg font-mono text-sm leading-relaxed" 
                 style="background-color: #131631; color: #f8f8f2;">
              <div class="space-y-4">
                <div>
                  <div class="text-blue-300 font-semibold">Device Registration</div>
                  <div class="text-gray-400 text-xs ml-4">↓ (Pocketbase)</div>
                </div>
                <div>
                  <div class="text-green-300 font-semibold">Bootstrap & Credentials</div>
                  <div class="text-gray-400 text-xs ml-4">↓ (.creds files, firmware, config)</div>
                </div>
                <div>
                  <div class="text-yellow-300 font-semibold">NATS Cluster Communication</div>
                  <div class="text-gray-400 text-xs ml-4">↓ (pub/sub messaging)</div>
                </div>
                <div>
                  <div class="text-purple-300 font-semibold">Edge Processing</div>
                  <div class="text-gray-400 text-xs ml-4">↓ (leaf nodes, local rule processing)</div>
                </div>
                <div>
                  <div class="text-red-300 font-semibold">Data Persistence</div>
                  <div class="text-gray-400 text-xs ml-4">↓ (TimescaleDB bridge)</div>
                </div>
                <div>
                  <div class="text-orange-300 font-semibold">Visualization & Alerting</div>
                  <div class="text-gray-400 text-xs ml-4">↓ (Grafana dashboards)</div>
                </div>
              </div>
              
              <div class="space-y-3 mt-6 pt-4 border-t border-gray-600">
                <div>
                  <div class="text-cyan-300 font-semibold">Authentication Flow:</div>
                  <div class="text-gray-300 text-xs">NATS Operator → Account JWT → Device nKey</div>
                </div>
                <div>
                  <div class="text-pink-300 font-semibold">Edge Resilience:</div>
                  <div class="text-gray-300 text-xs">Leaf Node Cache → Local Rule Processing → Sync</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Additional Platform Features -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div v-for="(feature, index) in platformFeatures" :key="`platform-feature-${index}`" class="tech-feature-card">
          <div class="tech-feature-icon">
            <i :class="feature.icon"></i>
          </div>
          <h4 class="tech-feature-title">{{ feature.title }}</h4>
          <p class="tech-feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * Technical section component
 * Highlights the platform architecture and core component integration
 */

// Core platform components
const coreComponents = [
  {
    icon: 'pi pi-database',
    title: 'Pocketbase Registry',
    description: 'Central registry for devices, locations, NATS configuration, and credential management. Provides REST API for device bootstrapping and firmware distribution.'
  },
  {
    icon: 'pi pi-share-alt',
    title: 'NATS Messaging Cluster',
    description: 'Operator/resolver architecture for decentralized authentication with leaf nodes providing edge deployment and local caching capabilities.'
  },
  {
    icon: 'pi pi-chart-line',
    title: 'TimescaleDB Integration',
    description: 'Dedicated microservice bridges NATS messages to TimescaleDB for optimized time-series storage with configurable retention policies.'
  },
  {
    icon: 'pi pi-chart-bar',
    title: 'Grafana Visualization',
    description: 'Pre-configured dashboards and alerting system with direct TimescaleDB integration for real-time and historical data analysis.'
  }
];

// Additional platform features
const platformFeatures = [
  {
    icon: 'pi pi-shield',
    title: 'Enterprise Security',
    description: 'TLS encryption, JWT-based authentication, topic-level permissions, and secure credential storage across all components.'
  },
  {
    icon: 'pi pi-sync',
    title: 'Flexible Deployment',
    description: 'Deploy on FreeBSD, Linux, or containers with support for hybrid cloud, on-premises, and edge configurations.'
  },
  {
    icon: 'pi pi-code',
    title: 'Open Source Foundation',
    description: 'Built entirely on proven open source components with commercial support options and transparent development model.'
  }
];
</script>
