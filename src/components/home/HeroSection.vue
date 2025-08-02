<template>
  <section 
    class="py-16 sm:py-20 md:py-28 lg:py-32 relative overflow-hidden bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: 'url(/images/stone-field.jpg)' }"
  >
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-60"></div>
    
    <div class="container relative z-10">
      <div class="max-w-3xl">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white">
          Open Source IoT Platform for Enterprise Operations
        </h1>
        <p class="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-100">
          A secure, scalable platform built on proven open source components like NATS, Pocketbase, and TimescaleDB, 
          designed for diverse IoT applications across industries.
        </p>
        <div class="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
          <button 
            @click="scrollToSection('cta')" 
            class="btn w-full sm:w-auto" 
            style="background-color: white; color: var(--color-primary);"
            aria-label="Get Started with Stone-Age.io"
          >
            Get Started
          </button>
          <a 
            href="https://github.com" 
            class="btn btn-outlined w-full sm:w-auto" 
            style="border-color: white; color: white;"
            aria-label="View Stone-Age.io on GitHub"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i class="pi pi-github mr-2"></i>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * Hero section component for the landing page
 * Displays the main headline, description, and primary call-to-action buttons
 */

/**
 * Scrolls to the specified section with smooth scrolling
 * @param {string} sectionId - The ID of the section to scroll to
 */
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    // Add a small delay to ensure any UI updates finish first
    setTimeout(() => {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }, 100);
  }
};
</script>
