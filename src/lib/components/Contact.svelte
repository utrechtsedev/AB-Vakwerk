<!-- src/lib/components/Contact.svelte -->
<script>
  import { enhance } from "$app/forms";
  import { fade } from "svelte/transition";
  
  let formStatus = '';
  let formMessage = '';
  let showFormMessage = false;
  
  function handleSubmit() {
    formStatus = 'loading';
    return async ({ result }) => {
      if (result.type === 'success') {
        formStatus = 'success';
        formMessage = 'Uw bericht is verzonden! We nemen zo snel mogelijk contact met u op.';
        showFormMessage = true;
        // Reset form
        document.getElementById('contactForm').reset();
      } else {
        formStatus = 'error';
        formMessage = 'Er is iets misgegaan. Probeer het opnieuw of neem telefonisch contact met ons op.';
        showFormMessage = true;
      }
      
      // Hide message after 5 seconds
      setTimeout(() => {
        showFormMessage = false;
      }, 5000);
    };
  }
</script>

<div id="contact" class="py-16 bg-gray-100">
  <div class="container mx-auto px-4">
    <div class="flex flex-col items-center mb-12">
      <h2 class="text-4xl font-bold text-black mb-3">Neem contact op</h2>
      <p class="text-center text-gray-600 max-w-xl">
        Heeft u een vraag of wilt u een afspraak maken? Neem contact met ons op via onderstaand formulier of bel ons direct.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Left side - Contact Info -->
      <div class="bg-white p-8 rounded-2xl shadow-md">
        <h3 class="text-2xl font-semibold mb-6">Contactgegevens</h3>
        
        <div class="space-y-6">
          <div class="flex items-start">
            <div class="bg-blue-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-blue-600">
                <path 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 5h18M9 3v18"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-medium">Adres</h4>
              <p class="text-gray-600">Voorbeeldstraat 123</p>
              <p class="text-gray-600">1234 AB Utrecht</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="bg-blue-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-blue-600">
                <path 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-medium">Telefoon</h4>
              <p class="text-gray-600">
                <a href="tel:+31612345678" class="hover:text-blue-600 transition duration-300">
                  +31 6 1234 5678
                </a>
              </p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="bg-blue-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-blue-600">
                <path 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0l9 6l9-6"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-medium">E-mail</h4>
              <p class="text-gray-600">
                <a href="mailto:contact@ab-vakwerk.nl" class="hover:text-blue-600 transition duration-300">
                  contact@ab-vakwerk.nl
                </a>
              </p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="bg-blue-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-blue-600">
                <path 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-medium">Openingstijden</h4>
              <p class="text-gray-600">Maandag - Vrijdag: 8:00 - 18:00</p>
              <p class="text-gray-600">Zaterdag: 9:00 - 15:00</p>
              <p class="text-gray-600">Zondag: Gesloten</p>
              <p class="text-gray-600 mt-2 font-medium">24/7 beschikbaar voor spoedsituaties</p>
            </div>
          </div>
        </div>
        
        <div class="mt-8">
          <h4 class="text-lg font-medium mb-4">Volg ons</h4>
          <div class="flex space-x-4">
            <a href="#" class="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a href="#" class="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Right side - Contact Form -->
      <div class="bg-white p-8 rounded-2xl shadow-md">
        <h3 class="text-2xl font-semibold mb-6">Stuur ons een bericht</h3>
        
        {#if showFormMessage}
          <div 
            class="mb-6 p-4 rounded-lg {formStatus === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}"
            transition:fade
          >
            {formMessage}
          </div>
        {/if}
        
        <form 
          id="contactForm"
          method="POST" 
          action="/api/contact" 
          use:enhance={handleSubmit}
          class="space-y-4"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="name" class="block text-gray-700 mb-2">Naam</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label for="email" class="block text-gray-700 mb-2">E-mail</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>
          
          <div>
            <label for="phone" class="block text-gray-700 mb-2">Telefoonnummer</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          
          <div>
            <label for="subject" class="block text-gray-700 mb-2">Onderwerp</label>
            <select 
              id="subject" 
              name="subject" 
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="" disabled selected>Selecteer een onderwerp</option>
              <option value="offerte">Offerte aanvragen</option>
              <option value="spoed">Spoedsituatie</option>
              <option value="informatie">Informatie</option>
              <option value="klacht">Klacht</option>
              <option value="anders">Anders</option>
            </select>
          </div>
          
          <div>
            <label for="message" class="block text-gray-700 mb-2">Bericht</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
          </div>
          
          <div class="flex items-start">
            <input 
              type="checkbox" 
              id="privacy" 
              name="privacy" 
              required
              class="mt-1 mr-2"
            />
            <label for="privacy" class="text-gray-700">
              Ik ga akkoord met de verwerking van mijn gegevens zoals beschreven in het <a href="/privacy" class="text-blue-600 hover:underline">privacybeleid</a>.
            </label>
          </div>
          
          <button 
            type="submit" 
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full md:w-auto disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={formStatus === 'loading'}
          >
            {#if formStatus === 'loading'}
              <span class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Verzenden...
              </span>
            {:else}
              Verstuur bericht
            {/if}
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
