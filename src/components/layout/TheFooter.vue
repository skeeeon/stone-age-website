<template>
  <footer class="py-12 sm:py-16" style="background-color: #1a1a1a; color: white;">
    <div class="container">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
        <div>
          <h3 class="text-xl font-bold mb-4">Stone-Age.io</h3>
          <p class="text-gray-300">
            An open source IoT platform for enterprise operations, built on proven components like NATS, Pocketbase, and TimescaleDB.
          </p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Product</h4>
          <ul class="space-y-3">
            <li v-for="(link, index) in productLinks" :key="`product-${index}`">
              <a :href="link.href" 
                 class="text-gray-300 hover:text-white transition-colors block py-1">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Resources</h4>
          <ul class="space-y-3">
            <li v-for="(link, index) in resourceLinks" :key="`resource-${index}`">
              <a :href="link.href" 
                 class="text-gray-300 hover:text-white transition-colors block py-1">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact</h4>
          <ul class="space-y-3">
            <li v-for="(link, index) in contactLinks" :key="`contact-${index}`">
              <a :href="link.href" 
                 class="text-gray-300 hover:text-white transition-colors block py-1">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} Stone-Age.io. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Updated link data - changed "Technology" to "Architecture"
const productLinks = [
  { text: 'Features', href: '#features' },
  { text: 'Benefits', href: '#benefits' },
  { text: 'Architecture', href: '#architecture' }
];

const resourceLinks = [
  { text: 'GitHub', href: '#github' },
  { text: 'Documentation', href: '#' },
  { text: 'Blog', href: '#' }
];

const contactLinks = [
  { text: 'Contact Us', href: '#' },
  { text: 'Support', href: '#' },
  { text: 'Twitter', href: '#' }
];
</script>
