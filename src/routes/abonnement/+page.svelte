<script>
  import herobg from "$lib/img/hero-bg.png";
  import herooverlay from "$lib/img/hero-overlay.png";
  import herobottomround from "$lib/img/hero-bottom-round.png";
  
  // Images for subscription cards
  import plumbing from "$lib/img/plumbing.png";
  import electrical from "$lib/img/electrical.avif";
  import locksmith from "$lib/img/locksmith.png";
  
  // For FAQ section
  let activeQuestion = null;
  
  const toggleQuestion = (index) => {
    activeQuestion = activeQuestion === index ? null : index;
  };
  
  // FAQ questions and answers
  const faqs = [
    {
      question: "Hoe snel kunnen jullie ter plaatse zijn na mijn oproep?",
      answer: "Wij streven ernaar om binnen 30-60 minuten na uw oproep ter plaatse te zijn, afhankelijk van uw locatie en de verkeerssituatie. Als abonnee krijgt u voorrang bij spoedgevallen."
    },
    {
      question: "Zijn er extra kosten bij een spoedoproep buiten kantooruren?",
      answer: "Voor abonnees zijn er geen extra kosten voor oproepen buiten kantooruren. Alle tarieven blijven hetzelfde, ongeacht het tijdstip waarop u ons belt."
    },
    {
      question: "Wat gebeurt er als ik al mijn inbegrepen bezoeken heb gebruikt?",
      answer: "Als u al uw inbegrepen bezoeken heeft gebruikt, kunt u nog steeds gebruik maken van onze diensten tegen een speciaal gereduceerd tarief voor abonnees."
    },
    {
      question: "Kan ik mijn abonnement opzeggen of wijzigen?",
      answer: "Ja, u kunt uw abonnement op elk moment wijzigen of opzeggen met een opzegtermijn van één maand. Bij een jaarabonnement ontvangt u een restitutie voor de niet-gebruikte maanden minus een administratieve vergoeding."
    },
    {
      question: "Zijn materiaalkosten inbegrepen in mijn abonnement?",
      answer: "De voorrijkosten en arbeidskosten voor de inbegrepen bezoeken zijn gedekt door uw abonnement. Materiaalkosten zoals nieuwe onderdelen of vervangingen worden apart in rekening gebracht, maar abonnees ontvangen wel 10% korting op alle materialen."
    },
    {
      question: "Geldt mijn abonnement voor al mijn eigendommen?",
      answer: "Uw abonnement is gekoppeld aan één woonadres. Als u meerdere panden heeft, kunt u een aanvullend abonnement afsluiten voor elk extra pand met 15% korting op het tweede en volgende abonnement."
    }
  ];

  // Animation on scroll functionality
  let animatedElements;
  
  function handleScroll() {
    if (!animatedElements) {
      animatedElements = document.querySelectorAll('.fade-in-element');
    }
    
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  }
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>Premium Abonnementen - SpoedSpecialist | Zorgeloze Zekerheid</title>
  <meta
    name="title"
    content="Premium Abonnementen - SpoedSpecialist | Zorgeloze Zekerheid"
  />
  <meta
    name="description"
    content="Ontdek onze premium abonnementen en verzeker uzelf van snelle hulp bij calamiteiten. Exclusieve voordelen en prioriteitsservice voor loodgieter, elektricien en slotenmaker diensten."
  />
  <meta
    name="keywords"
    content="premium abonnement, servicecontract loodgieter, onderhoudscontract elektricien, slotenmaker abonnement, spoedhulp verzekering, calamiteiten abonnement"
  />
</svelte:head>

<svelte:window on:scroll={handleScroll}/>

<!-- Hero Section - Modern & Dynamic -->
<section class="relative overflow-hidden">
  <div class="h-[80vh] md:h-[90vh] w-full relative">
    <!-- Base background with gradient overlay -->
    <div class="absolute inset-0 w-full h-full">
      <img
        src={herobg}
        alt="Background"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <!-- Modern gradient overlay with brand color -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 opacity-85"></div>
      
      <!-- Decorative elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-300 blur-3xl"></div>
        <div class="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-300 blur-3xl"></div>
      </div>
    </div>
    
    <!-- Content container -->
    <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
      <div class="max-w-4xl mx-auto z-10 fade-in-element">
        <!-- Badge above headline -->
        <div class="inline-flex items-center bg-blue-900 bg-opacity-50 backdrop-blur-sm px-4 py-2 rounded-full text-blue-100 mb-8 border border-blue-400 border-opacity-30">
          <span class="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
          <span class="text-sm font-medium tracking-wider uppercase">24/7 Prioriteitsservice</span>
        </div>
        
        <!-- Main headline with gradient text -->
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
          Premium Zekerheid, Altijd Binnen Handbereik
        </h1>
        
        <!-- Subheadline -->
        <p class="text-xl md:text-2xl text-blue-100 font-light max-w-3xl mx-auto mb-12">
          Word lid van SpoedSpecialist en ervaar de gemoedsrust van onbeperkte prioriteitsservice bij calamiteiten.
        </p>
        
        <!-- CTA buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#abonnementen"
            class="group relative overflow-hidden bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span class="relative z-10">Bekijk Abonnementen</span>
            <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-300 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
          </a>
          <a
            href="tel:+31612345678"
            class="group relative flex items-center justify-center gap-3 bg-transparent hover:bg-white hover:bg-opacity-10 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 border border-white border-opacity-30 backdrop-blur-sm"
          >
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Bel Direct: +31 6 1234 5678
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom curve -->
    <div class="absolute -bottom-1 left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" class="w-full">
        <path fill="#ffffff" fill-opacity="1" d="M0,96L80,80C160,64,320,32,480,32C640,32,800,64,960,69.3C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
      </svg>
    </div>
    
    <!-- Floating elements -->
    <div class="absolute top-1/3 left-1/6 w-12 h-12 rounded-full border border-blue-300 border-opacity-30 animate-float-slow hidden md:block"></div>
    <div class="absolute bottom-1/4 right-1/6 w-20 h-20 rounded-full border-2 border-yellow-300 border-opacity-20 animate-float-medium hidden md:block"></div>
    <div class="absolute top-1/2 right-1/4 w-8 h-8 rounded-full border border-white border-opacity-20 animate-float-fast hidden md:block"></div>
  </div>
</section>

<!-- Benefits Section - Sleek & Modern -->
<section class="py-20 bg-white relative overflow-hidden fade-in-element">
  <!-- Background decoration -->
  <div class="absolute inset-0 z-0 opacity-5">
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
    <div class="absolute -top-40 -right-40 w-80 h-80 rounded-full border border-blue-200"></div>
    <div class="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border border-blue-200"></div>
  </div>

  <div class="container mx-auto px-4 relative z-10">
    <div class="text-center mb-16">
      <div class="inline-block mb-3">
        <span class="inline-block h-1 w-12 bg-blue-600 rounded-full mr-1"></span>
        <span class="inline-block h-1 w-3 bg-yellow-400 rounded-full"></span>
      </div>
      <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">
        Waarom Kiezen voor een Abonnement?
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto text-xl">
        Ontdek de voordelen van een exclusief serviceabonnement bij SpoedSpecialist.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Benefit 1 -->
      <div class="relative group bg-white rounded-3xl p-10 transition-all duration-500 hover:shadow-xl overflow-hidden">
        <!-- Hover background effect -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <!-- Icon -->
        <div class="relative z-10 mb-8">
          <div class="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-100 group-hover:bg-blue-600 transition-colors duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
              <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
              <path d="M18 8a6 6 0 0 0-9.33-5"></path>
              <path d="m1 1 22 22"></path>
            </svg>
          </div>
        </div>
        
        <!-- Content -->
        <div class="relative z-10">
          <h3 class="text-2xl font-bold mb-4 text-blue-900">Directe Prioriteit</h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Als abonnee krijgt u altijd voorrang bij spoedsituaties. Onze professionals staan 24/7 voor u klaar en garanderen snelle responstijden.
          </p>
          <div class="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
        </div>
      </div>
      
      <!-- Benefit 2 -->
      <div class="relative group bg-white rounded-3xl p-10 transition-all duration-500 hover:shadow-xl overflow-hidden">
        <!-- Hover background effect -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <!-- Icon -->
        <div class="relative z-10 mb-8">
          <div class="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-100 group-hover:bg-blue-600 transition-colors duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-7h-2c0-1-1.5-1-1.5-1Z"></path>
              <path d="M2 9v1c0 1.1.9 2 2 2h1"></path>
              <path d="M16 11h0"></path>
            </svg>
          </div>
        </div>
        
        <!-- Content -->
        <div class="relative z-10">
          <h3 class="text-2xl font-bold mb-4 text-blue-900">Voorspelbare Kosten</h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Geen verrassingen meer bij spoedgevallen. Onze transparante prijsstructuur biedt financiële zekerheid met vaste lage maandelijkse kosten.
          </p>
          <div class="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
        </div>
      </div>
      
      <!-- Benefit 3 -->
      <div class="relative group bg-white rounded-3xl p-10 transition-all duration-500 hover:shadow-xl overflow-hidden">
        <!-- Hover background effect -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <!-- Icon -->
        <div class="relative z-10 mb-8">
          <div class="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-100 group-hover:bg-blue-600 transition-colors duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
        </div>
        
        <!-- Content -->
        <div class="relative z-10">
          <h3 class="text-2xl font-bold mb-4 text-blue-900">Premium Service</h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Geniet van exclusieve voordelen zoals korting op materialen, gratis inspecties en toegang tot onze VIP-klantenservice met persoonlijke aandacht.
          </p>
          <div class="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Subscription Plans Section - Premium & Distinctive -->
<section id="abonnementen" class="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden fade-in-element">
  <!-- Decorative elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 w-full h-20 bg-white rounded-b-[50%]"></div>
    <div class="absolute left-0 top-40 w-20 h-20 rounded-full border border-blue-200 opacity-50"></div>
    <div class="absolute right-10 bottom-40 w-40 h-40 rounded-full border-2 border-blue-100 opacity-30"></div>
  </div>

  <div class="container mx-auto px-4 relative z-10">
    <div class="text-center mb-16">
      <div class="inline-block mb-3">
        <span class="inline-block h-1 w-3 bg-yellow-400 rounded-full mr-1"></span>
        <span class="inline-block h-1 w-12 bg-blue-600 rounded-full"></span>
      </div>
      <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">
        Premium Abonnementen
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto text-xl">
        Kies het serviceniveau dat perfect bij uw behoeften past.
      </p>
    </div>
    
    <!-- Modern Pricing Table -->
    <div class="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
      <!-- Essentials Plan -->
      <div class="flex-1 bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl group relative">
        <!-- Top accent -->
        <div class="h-1.5 w-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
        
        <!-- Header -->
        <div class="p-8 border-b border-gray-100">
          <h3 class="text-2xl font-bold text-blue-900 mb-2">Essentials</h3>
          <p class="text-gray-500 mb-6">Basis bescherming voor uw gemoedsrust</p>
          
          <!-- Price -->
          <div class="flex items-end mb-1">
            <span class="text-5xl font-extrabold text-blue-900">€9,95</span>
            <span class="text-gray-500 ml-2 pb-1.5">/maand</span>
          </div>
          <p class="text-blue-600 font-medium">of €99 per jaar (17% korting)</p>
        </div>
        
        <!-- Features -->
        <div class="p-8">
          <ul class="space-y-5">
            <li class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="ml-3 text-gray-600">2 spoedbezoeken per jaar</span>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="ml-3 text-gray-600">Voorrang bij noodgevallen</span>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="ml-3 text-gray-600">5% korting op materialen</span>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="ml-3 text-gray-600">24/7 telefonische ondersteuning</span>
            </li>
          </ul>
        </div>
        
        <!-- CTA -->
        <div class="p-8 pt-0">
          <a href="/contact" class="block w-full py-4 px-6 text-center rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold transition-all duration-300">
            Kies Essentials
          </a>
        </div>
        
        <!-- Decorative image -->
        <div class="px-8 pb-8">
          <div class="relative h-48 rounded-xl overflow-hidden opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <img src={plumbing} alt="Loodgieter" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-60"></div>
          </div>
        </div>
      </div>
      
      <!-- Premium Plan (Highlighted) -->
      <div class="flex-1 bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl group relative transform scale-105 lg:scale-110 z-10 border-2 border-blue-500 shadow-xl">
        <!-- Top accent -->
        <div class="h-1.5 w-full bg-gradient-to-r from-blue-500 to-blue-700"></div>
        
        <!-- Badge -->
        <div class="absolute top-6 right-6">
          <div class="bg-yellow-400 text-blue-900 font-bold text-xs uppercase tracking-wide px-3 py-1 rounded-full">
            Aanbevolen
          </div>
        </div>
        
        <!-- Header -->
        <div class="p-8 border-b border-gray-100">
          <h3 class="text-2xl font-bold text-blue-900 mb-2">Premium</h3>
          <p class="text-gray-500 mb-6">Complete bescherming voor uw woning</p>
          
          <!-- Price -->
          <div class="flex items-end mb-1">
            <span class="text-5xl font-extrabold text-blue-900">€19,95</span>
            <span class="text-gray-500 ml-2 pb-1.5">/maand</span>
          </div>
          <p class="text-blue-600 font-medium">of €199 per jaar (17% korting)</p>
        </div>
        
        <!-- Features -->
        <div class="p-8">
          <ul class="space-y-5">
            <li class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="ml-3 text-gray-600">5 spoedbezoeken per jaar</span>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="ml-3 text-gray-600">Hoogste prioriteit bij noodgevallen</span>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="ml-3 text-gray-600">10% korting op materialen</span>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="ml-3 text-gray-600">24/7 telefonische ondersteuning</span>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="ml-3 text-gray-600">Jaarlijkse veiligheidsinspectie</span>
            </li>
          </ul>
        </div>
        
        <!-- CTA -->
        <div class="p-8 pt-0">
          <a href="/contact" class="block w-full py-4 px-6 text-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all duration-300 shadow-lg hover:shadow-xl">
            Kies Premium
          </a>
        </div>
        
        <!-- Decorative image -->
        <div class="px-8 pb-8">
          <div class="relative h-48 rounded-xl overflow-hidden">
            <img src={electrical} alt="Elektricien" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-50"></div>
          </div>
        </div>
      </div>
      
      <!-- Business Plan -->
      <div class="flex-1 bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl group relative">
        <!-- Top accent -->
        <div class="h-1.5 w-full bg-gradient-to-r from-blue-600 to-blue-800"></div>
        
        <!-- Header -->
        <div class="p-8 border-b border-gray-100">
          <h3 class="text-2xl font-bold text-blue-900 mb-2">Business</h3>
          <p class="text-gray-500 mb-6">Maximale bescherming voor uw bedrijf</p>
          
          <!-- Price -->
          <div class="flex items-end mb-1">
            <span class="text-5xl font-extrabold text-blue-900">€29,95</span>
            <span class="text-gray-500 ml-2 pb-1.5">/maand</span>
          </div>
          <p class="text-blue-600 font-medium">of €299 per jaar (17% korting)</p>
        </div>
        
        <!-- Features -->
        <div class="p-8">
          <ul class="space-y-5">
            <li class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="ml-3 text-gray-600">10 spoedbezoeken per jaar</span>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="ml-3 text-gray-600">Hoogste prioriteit bij noodgevallen</span>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="ml-3 text-gray-600">15% korting op materialen</span>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="ml-3 text-gray-600">24/7 telefonische ondersteuning</span>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="ml-3 text-gray-600">Halfjaarlijkse veiligheidsinspectie</span>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="ml-3 text-gray-600">Toegewezen persoonlijke monteur</span>
            </li>
          </ul>
        </div>
        
        <!-- CTA -->
        <div class="p-8 pt-0">
          <a href="/contact" class="block w-full py-4 px-6 text-center rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold transition-all duration-300">
            Kies Business
          </a>
        </div>
        
        <!-- Decorative image -->
        <div class="px-8 pb-8">
          <div class="relative h-48 rounded-xl overflow-hidden opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <img src={locksmith} alt="Slotenmaker" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Additional info -->
    <div class="text-center mt-16">
      <p class="text-gray-600 mb-6">Twijfelt u welk abonnement het beste bij uw situatie past?</p>
      <a href="tel:+31612345678" class="inline-flex items-center gap-3 px-8 py-4 bg-blue-50 hover:bg-blue-100 text-blue-800 rounded-full font-bold transition-all duration-300 shadow-sm hover:shadow-md">
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        Persoonlijk Advies: +31 6 1234 5678
      </a>
    </div>
  </div>
</section>

<!-- Modern FAQ Section -->
<section class="py-20 bg-white relative overflow-hidden fade-in-element">
  <!-- Decorative elements -->
  <div class="absolute inset-0 opacity-5">
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
    <div class="absolute -bottom-40 -right-40 w-80 h-80 rounded-full border border-blue-200"></div>
    <div class="absolute top-40 -left-20 w-60 h-60 rounded-full border border-blue-200"></div>
  </div>

  <div class="container mx-auto px-4 relative z-10">
    <div class="text-center mb-16">
      <div class="inline-block mb-3">
        <span class="inline-block h-1 w-12 bg-blue-600 rounded-full mr-1"></span>
        <span class="inline-block h-1 w-3 bg-yellow-400 rounded-full"></span>
      </div>
      <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">
        Veelgestelde Vragen
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto text-xl">
        Antwoorden op de meest gestelde vragen over onze abonnementen.
      </p>
    </div>
    
    <div class="max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-soft">
      <div class="space-y-6">
        {#each faqs as faq, index}
          <div class="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
            <button 
              class="w-full flex justify-between items-center focus:outline-none group"
              on:click={() => toggleQuestion(index)}
            >
              <span class="text-xl font-medium text-blue-900 text-left group-hover:text-blue-600 transition-colors duration-300">
                {faq.question}
              </span>
              <div class={`flex-shrink-0 ml-4 p-1 rounded-full border border-gray-200 transition-all duration-300 ${activeQuestion === index ? 'bg-blue-600 border-blue-600' : ''}`}>
                <svg 
                  class={`w-5 h-5 transition-all duration-300 ${activeQuestion === index ? 'transform rotate-180 text-white' : 'text-blue-600'}`}
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            
            {#if activeQuestion === index}
              <div class="mt-4 text-gray-600 leading-relaxed pl-0 md:pl-8 animate-fadeIn">
                {faq.answer}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Modern Call-to-Action -->
<section class="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden fade-in-element">
  <!-- Decorative elements -->
  <div class="absolute inset-0">
    <div class="absolute top-0 left-0 opacity-10">
      <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="text-white">
        <path fill="currentColor" d="M37.5,-65.1C45.9,-56.6,48.2,-41.2,53.8,-27.9C59.4,-14.7,68.3,-3.7,69.7,8.1C71.1,19.9,65.1,32.6,55.7,42.6C46.2,52.6,33.3,60,19.3,66.7C5.3,73.3,-9.7,79.2,-21.9,75.1C-34.2,70.9,-43.7,56.8,-50.6,43.3C-57.5,29.8,-61.8,16.8,-65.9,1.6C-70.1,-13.6,-74.2,-30.2,-67.5,-40.3C-60.9,-50.4,-43.5,-54.1,-29.2,-59.6C-14.9,-65.1,-3.7,-72.5,7.3,-71.4C18.3,-70.3,29.1,-73.7,37.5,-65.1Z" transform="translate(100 100)" />
      </svg>
    </div>
    <div class="absolute bottom-0 right-0 opacity-10">
      <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="text-white">
        <path fill="currentColor" d="M37.9,-64.1C47.2,-53.8,51.8,-39.6,57.9,-26.5C64,-13.4,71.6,-1.3,70.4,9.9C69.1,21.1,59,31.3,48.5,39.9C38,48.4,27.1,55.3,14.8,60.5C2.6,65.7,-11.1,69.2,-22.2,65.8C-33.3,62.3,-41.9,51.9,-48.6,40.8C-55.4,29.7,-60.3,17.8,-63.1,4.7C-65.9,-8.5,-66.7,-22.9,-60.7,-33.8C-54.8,-44.7,-42.1,-52.1,-30,-60.1C-17.8,-68.1,-5.9,-76.7,4.9,-77.8C15.7,-78.9,28.6,-74.4,37.9,-64.1Z" transform="translate(100 100)" />
      </svg>
    </div>
  </div>

  <div class="container mx-auto px-4 relative z-10">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
        Geniet van Zorgeloze Zekerheid
      </h2>
      <p class="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
        Word vandaag nog abonnee en ervaar de gemoedsrust van onze premium service. Altijd een specialist tot uw beschikking, wanneer u die het meest nodig heeft.
      </p>
      <div class="flex flex-col sm:flex-row gap-5 justify-center">
        <a href="#abonnementen" class="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full font-bold transition duration-300 shadow-lg hover:shadow-xl">
          Bekijk Abonnementen
        </a>
        <a href="tel:+31612345678" class="bg-transparent hover:bg-white hover:bg-opacity-10 text-white border border-white border-opacity-50 px-8 py-4 rounded-full font-bold transition duration-300 inline-flex items-center justify-center gap-2">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          Bel Direct
        </a>
      </div>
      
      <!-- Trust indicators -->
      <div class="mt-16">
        <div class="flex flex-wrap justify-center gap-8 md:gap-16">
          <div class="text-center">
            <div class="text-white text-4xl font-bold mb-2">24/7</div>
            <div class="text-blue-100">Beschikbaarheid</div>
          </div>
          <div class="text-center">
            <div class="text-white text-4xl font-bold mb-2">100%</div>
            <div class="text-blue-100">Tevredenheid</div>
          </div>
          <div class="text-center">
            <div class="text-white text-4xl font-bold mb-2">&lt; 60 min</div>
            <div class="text-blue-100">Responstijd</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Modern animations */
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes float-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }
  
  @keyframes float-medium {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes float-fast {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-float-slow {
    animation: float-slow 6s ease-in-out infinite;
  }
  
  .animate-float-medium {
    animation: float-medium 4s ease-in-out infinite;
  }
  
  .animate-float-fast {
    animation: float-fast 3s ease-in-out infinite;
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }
  
  /* Shadow utilities */
  .shadow-soft {
    box-shadow: 0 10px 50px -12px rgba(0, 0, 0, 0.1);
  }
  
  /* Fade in animation on scroll */
  .fade-in-element {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .fade-in-element.active {
    opacity: 1;
    transform: translateY(0);
  }
</style>
