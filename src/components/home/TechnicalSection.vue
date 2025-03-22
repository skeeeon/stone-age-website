<template>
  <section id="technology" class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
    <div class="container">
      <h2 class="section-title text-center">Technical Foundation</h2>
      <p class="section-subtitle text-center">
        Built on modern technologies with an architecture designed for scalability, 
        security, and performance.
      </p>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-12 md:mt-16">
        <div>
          <h3 class="text-2xl font-semibold mb-6">Core Architecture</h3>
          <div class="space-y-6">
            <div v-for="(feature, index) in coreFeatures" :key="index" class="flex">
              <div class="mr-4 mt-1 flex-shrink-0">
                <div class="rounded-full w-10 h-10 flex items-center justify-center text-white font-bold"
                     :style="{ backgroundColor: 'var(--color-secondary)' }">
                  {{ index + 1 }}
                </div>
              </div>
              <div>
                <h4 class="text-xl font-medium mb-2">{{ feature.title }}</h4>
                <p :style="{ color: 'var(--color-text-light)' }">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="rounded-lg shadow-md overflow-hidden" :style="{ backgroundColor: 'var(--color-surface-alt)' }">
          <div class="p-5 border-b" :style="{ borderColor: 'var(--color-border)' }">
            <h3 class="text-2xl font-semibold">Messaging Architecture</h3>
          </div>
          <div class="font-mono text-xs sm:text-sm p-4 rounded-b overflow-auto" 
               style="background-color: #131631; color: #f8f8f2; max-height: 400px;">
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
          <div class="p-4 text-sm border-t" :style="{ borderColor: 'var(--color-border)' }">
            <p class="mt-2" :style="{ color: 'var(--color-text-light)' }">
              Standardized topic structure: <code class="px-2 py-1 rounded text-sm" style="background-color: rgba(0,0,0,0.1);">org_id/edge_code/thing_type/thing_code/message_type</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TechnicalSection',
  data() {
    return {
      coreFeatures: [
        {
          title: 'NATS Messaging Foundation',
          description: 'Core messaging system with native MQTT support, standardized topic structure, and well-defined JSON message schema.'
        },
        {
          title: 'FreeBSD Infrastructure',
          description: 'Secure base operating system with ZFS filesystem for data integrity, snapshots, and resilience.'
        },
        {
          title: 'Optimized Data Management',
          description: 'PocketBase for configuration storage and current state, TimescaleDB for time-series historical data.'
        },
        {
          title: 'Edge Intelligence',
          description: 'Local processing for low latency, offline operation capabilities, and efficient synchronization.'
        }
      ]
    }
  }
}
</script>
