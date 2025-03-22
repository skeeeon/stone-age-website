<template>
  <!-- Desktop Navigation -->
  <nav class="hidden md:flex items-center space-x-6">
    <a href="#features" 
       @click.prevent="scrollToSection('features')"
       class="text-base hover:text-primary font-medium py-2 px-3 rounded-md transition-colors">
      Features
    </a>
    <a href="#benefits" 
       @click.prevent="scrollToSection('benefits')"
       class="text-base hover:text-primary font-medium py-2 px-3 rounded-md transition-colors">
      Benefits
    </a>
    <a href="#technology" 
       @click.prevent="scrollToSection('technology')"
       class="text-base hover:text-primary font-medium py-2 px-3 rounded-md transition-colors">
      Technology
    </a>
    <ThemeToggle class="mr-2" />
    <button @click="scrollToSection('cta')" class="btn btn-primary">Get Started</button>
  </nav>
  
  <!-- Mobile Navigation -->
  <div class="flex items-center space-x-3 md:hidden">
    <ThemeToggle />
    <button 
      class="p-2 rounded-full h-10 w-10 flex items-center justify-center"
      aria-label="Menu"
      @click="toggleMobileMenu"
    >
      <i class="pi pi-bars text-base"></i>
    </button>
    
    <!-- Mobile Menu Overlay -->
    <div 
      v-if="showMobileMenu" 
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      @click="closeMobileMenu"
    ></div>
    
    <!-- Mobile Menu Panel -->
    <transition name="mobile-menu">
      <div v-if="showMobileMenu" 
           class="fixed top-0 right-0 h-full w-64 sm:w-80 shadow-lg z-50 p-4 overflow-y-auto"
           :style="{ backgroundColor: 'var(--color-surface)' }">
        <div class="flex justify-between items-center mb-8 pb-4" 
             :style="{ borderBottomColor: 'var(--color-border)' }">
          <StoneLogo size="sm" />
          <button 
            class="p-2 rounded-full h-10 w-10 flex items-center justify-center"
            aria-label="Close menu"
            @click="closeMobileMenu" 
          >
            <i class="pi pi-times text-base"></i>
          </button>
        </div>
        
        <div class="flex flex-col space-y-2">
          <a href="#features" 
             @click.prevent="scrollToSectionAndCloseMenu('features')" 
             class="mobile-nav-item hover:bg-surface-alt">
            Features
          </a>
          <a href="#benefits" 
             @click.prevent="scrollToSectionAndCloseMenu('benefits')" 
             class="mobile-nav-item hover:bg-surface-alt">
            Benefits
          </a>
          <a href="#technology" 
             @click.prevent="scrollToSectionAndCloseMenu('technology')" 
             class="mobile-nav-item hover:bg-surface-alt">
            Technology
          </a>
          
          <div class="pt-4 mt-2">
            <button @click="scrollToSectionAndCloseMenu('cta')" class="btn btn-primary w-full justify-center">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ThemeToggle from '../common/ThemeToggle.vue';
import StoneLogo from '../common/StoneLogo.vue';

export default {
  name: 'TheNavbar',
  components: {
    ThemeToggle,
    StoneLogo
  },
  data() {
    return {
      showMobileMenu: false,
      originalOverflow: null
    }
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
      
      // Store original overflow setting before changing it
      if (this.showMobileMenu) {
        this.originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      } else {
        this.restoreBodyScroll();
      }
    },
    closeMobileMenu() {
      this.showMobileMenu = false;
      this.restoreBodyScroll();
    },
    restoreBodyScroll() {
      // Reset to original overflow or empty string if originalOverflow was null
      document.body.style.overflow = this.originalOverflow || '';
    },
    scrollToSection(sectionId) {
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
    },
    scrollToSectionAndCloseMenu(sectionId) {
      this.closeMobileMenu();
      this.scrollToSection(sectionId);
    }
  },
  beforeUnmount() {
    // Make sure we restore scrolling when component is destroyed
    this.restoreBodyScroll();
  }
}
</script>
