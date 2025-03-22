<template>
  <section id="cta" class="py-16 md:py-24" style="background-color: var(--color-primary);">
    <div class="container text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
      <p class="text-lg sm:text-xl mb-10 max-w-2xl mx-auto text-white">
        Join us in building the future of physical access control and building automation with an open source approach.
      </p>
      
      <div class="flex flex-col sm:flex-row justify-center gap-4 mb-16">
        <a href="#" class="inline-flex items-center justify-center px-5 py-3 bg-white text-blue-800 rounded-md font-medium">
          <i class="pi pi-file mr-2"></i>
          View Documentation
        </a>
        <a href="https://github.com" class="inline-flex items-center justify-center px-5 py-3 bg-white text-blue-800 rounded-md font-medium">
          <i class="pi pi-github mr-2"></i>
          GitHub Repository
        </a>
        <a href="#" class="inline-flex items-center justify-center px-5 py-3 bg-transparent border border-white text-white rounded-md font-medium">
          <i class="pi pi-envelope mr-2"></i>
          Contact Sales
        </a>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <!-- Starter Plan -->
        <div class="rounded-lg overflow-hidden shadow-lg">
          <!-- Header -->
          <div class="bg-gray-900 p-4 text-center">
            <h3 class="text-2xl font-bold text-white">Starter</h3>
            <p class="text-gray-300">For small businesses</p>
          </div>
          
          <!-- Content -->
          <div class="bg-gray-800 p-6 text-white">
            <div class="text-3xl font-bold mb-6">$299<span class="text-lg font-normal">/month</span></div>
            
            <div class="text-left space-y-4 mb-8">
              <div class="flex items-start">
                <i class="pi pi-check text-green-400 mr-2 mt-1"></i>
                <span>Up to 50 devices</span>
              </div>
              <div class="flex items-start">
                <i class="pi pi-check text-green-400 mr-2 mt-1"></i>
                <span>1 site</span>
              </div>
              <div class="flex items-start">
                <i class="pi pi-check text-green-400 mr-2 mt-1"></i>
                <span>30 days retention</span>
              </div>
            </div>
            
            <a href="https://github.com" class="block w-full py-3 border border-gray-600 bg-gray-800 hover:bg-gray-700 text-white rounded-md font-medium text-center">
              Get Started
            </a>
          </div>
        </div>
        
        <!-- Business Plan (Popular) -->
        <div class="rounded-lg overflow-hidden shadow-lg relative">
          <!-- Popular Badge -->
          <div class="absolute w-full" style="top: -12px; z-index: 10;">
          </div>
          
          <!-- Header -->
          <div class="bg-blue-500 p-4 text-center">
            <h3 class="text-2xl font-bold text-white">Business</h3>
            <p class="text-white opacity-90">For growing organizations</p>
          </div>
          
          <!-- Content -->
          <div class="bg-gray-800 p-6 text-white">
            <div class="text-3xl font-bold mb-6">$999<span class="text-lg font-normal">/month</span></div>
            
            <div class="text-left space-y-4 mb-8">
              <div class="flex items-start">
                <i class="pi pi-check text-green-400 mr-2 mt-1"></i>
                <span>Up to 500 devices</span>
              </div>
              <div class="flex items-start">
                <i class="pi pi-check text-green-400 mr-2 mt-1"></i>
                <span>5 sites</span>
              </div>
              <div class="flex items-start">
                <i class="pi pi-check text-green-400 mr-2 mt-1"></i>
                <span>90 days retention</span>
              </div>
            </div>
            
            <a href="https://github.com" class="block w-full py-3 bg-white hover:bg-gray-100 text-blue-600 rounded-md font-medium text-center">
              Get Started
            </a>
          </div>
        </div>
        
        <!-- Enterprise Plan -->
        <div class="rounded-lg overflow-hidden shadow-lg">
          <!-- Header -->
          <div class="bg-gray-900 p-4 text-center">
            <h3 class="text-2xl font-bold text-white">Enterprise</h3>
            <p class="text-gray-300">For large organizations</p>
          </div>
          
          <!-- Content -->
          <div class="bg-gray-800 p-6 text-white">
            <div class="text-3xl font-bold mb-6">Custom</div>
            
            <div class="text-left space-y-4 mb-8">
              <div class="flex items-start">
                <i class="pi pi-check text-green-400 mr-2 mt-1"></i>
                <span>Custom device count</span>
              </div>
              <div class="flex items-start">
                <i class="pi pi-check text-green-400 mr-2 mt-1"></i>
                <span>Unlimited sites</span>
              </div>
              <div class="flex items-start">
                <i class="pi pi-check text-green-400 mr-2 mt-1"></i>
                <span>Custom retention</span>
              </div>
            </div>
            
            <a href="#" class="block w-full py-3 border border-gray-600 bg-gray-800 hover:bg-gray-700 text-white rounded-md font-medium text-center">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CallToAction'
}
</script>
