<template>
  <section id="technology" class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
    <div class="container">
      <h2 class="section-title text-center">Technical Foundation</h2>
      <p class="section-subtitle text-center">
        Built on modern technologies with an architecture designed for scalability, 
        security, and performance.
      </p>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 md:mt-16">
        <!-- Core Architecture Card -->
        <div class="tech-card">
          <div class="tech-card-header">
            <h3 class="text-xl font-semibold">Core Architecture</h3>
          </div>
          <div class="tech-card-body">
            <div class="space-y-6">
              <div v-for="(feature, index) in coreFeatures" :key="`core-feature-${index}`" class="feature-item">
                <div class="feature-icon">
                  <span>{{ index + 1 }}</span>
                </div>
                <div class="feature-content">
                  <h4 class="feature-title">{{ feature.title }}</h4>
                  <p class="feature-description">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Messaging Architecture Card -->
        <div class="tech-card">
          <div class="tech-card-header">
            <h3 class="text-xl font-semibold">Messaging Architecture</h3>
          </div>
          <div class="tech-card-body p-0">
            <div class="code-block">
              <pre>{
  "id": "018e7507-c547-7f43-9485-71c71b3b0445",
  "ts": "2024-02-21T15:23:45.123456Z",
  "thing_id": "018e7507-c547-7f43-9485-71c71b3b0446",
  "edge_id": "018e7507-c547-7f43-9485-71c71b3b0447",
  "type": "access.entry.granted",
  "version": 1,
  "context": {
    "thing_code": "rdr-main-001",
    "thing_type": "reader",
    "edge": {
      "code": "bld-na-001",
      "type": "office-building"
    }
  },
  "payload": {
    "credential_type": "card",
    "credential_id": "0123456789",
    "user_id": "018e7507-c547-7f43-9485-71c71b3b0448",
    "direction": "in"
  }
}</pre>
            </div>
            <div class="p-4 text-sm border-t" :style="{ borderColor: 'var(--color-border-primary)' }">
              <p class="mt-2 feature-description">
                Standardized topic structure: <code class="topic-structure">org_id/edge_code/thing_type/thing_code/message_type</code>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Additional Features -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div v-for="(feature, index) in additionalFeatures" :key="`add-feature-${index}`" class="tech-feature-card">
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
// Core architecture features
const coreFeatures = [
  {
    title: 'NATS Messaging Foundation',
    description: 'Core messaging system with native MQTT support, standardized topic structure, and well-defined JSON message schema.'
  },
  {
    title: 'Lightweight Go Microservices',
    description: 'Efficient, performant Go-based services that consume minimal resources and scale horizontally across environments.'
  },
  {
    title: 'Optimized Data Management',
    description: 'PocketBase for configuration storage and current state, TimescaleDB for time-series historical data.'
  },
  {
    title: 'Edge Intelligence',
    description: 'Containerized Go services at the edge for low latency, offline operation capabilities, and efficient synchronization.'
  }
];

// Additional technical features
const additionalFeatures = [
  {
    icon: 'pi pi-shield',
    title: 'Security First',
    description: 'End-to-end encryption, secure credential management, and comprehensive authorization controls.'
  },
  {
    icon: 'pi pi-sync',
    title: 'Seamless Integration',
    description: 'Open APIs, webhooks, and extensible plugins for integration with existing enterprise systems.'
  },
  {
    icon: 'pi pi-chart-bar',
    title: 'Advanced Analytics',
    description: 'Real-time dashboards, historical reporting, and anomaly detection with machine learning capabilities.'
  }
];
</script>
