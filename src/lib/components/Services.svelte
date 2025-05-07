<!-- src/lib/components/Services.svelte -->
<script>
  import plumbing from "$lib/img/plumbing.png";
  import electrical from "$lib/img/electrical.avif";
  import locksmith from "$lib/img/locksmith.png";
  import emergency from "$lib/img/cropped-nooddienst.avif";
</script>

<div class="bg-white py-12">
  <div class="flex flex-col items-center">
    <h2 class="text-4xl font-bold text-center">Spoed? Wij zijn er!</h2>
    <p class="mt-7 text-center">
      Razendsnelle oplossingen voor al uw spoedklussen, dag en nacht, altijd <br
      />
      betrouwbaar en professioneel
    </p>
  </div>
  <div class="container mx-auto px-4 py-8">
    <!-- Grid container: 2 columns on desktop (md+), 1 column on mobile -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Card 1: Loodgieter -->
      <div
        class="border border-gray-200 rounded-2xl overflow-hidden flex flex-col md:flex-row md:min-h-45 group cursor-pointer hover:shadow-lg transition-shadow duration-300"
      >
        <div class="w-full md:w-1/2 overflow-hidden">
          <img
            src={plumbing}
            alt="Loodgieter"
            class="w-full h-48 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div
          class="w-full md:w-1/2 p-6 md:py-9 md:ml-10 md:mr-4 flex flex-col justify-between"
        >
          <div>
            <h3 class="text-2xl font-bold text-gray-800 mt-2 mb-4 md:mb-8">
              Tegelen
            </h3>
            <p class="text-gray-600 font-light">
              Onze loodgieters zijn 24/7 beschikbaar voor alle
              loodgietersklussen, van lekkende kranen tot verstopte afvoeren en
              complete badkamerrenovaties.
            </p>
          </div>
          <div class="mt-6">
            <a
              href="#"
              class="text-black font-medium hover:text-blue-600 transition-colors duration-300 inline-flex items-center group"
            >
              <span
                class="group-hover:text-blue-600 transition-colors duration-300"
                >Lees meer</span
              >
              <span class="ml-1 w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="transition-colors duration-300"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      <!-- Card 2: Elektricien -->
      <div
        class="border rounded-2xl border-gray-200 overflow-hidden flex flex-col md:flex-row md:min-h-45 group cursor-pointer hover:shadow-lg transition-shadow duration-300"
      >
        <div class="w-full md:w-1/2 overflow-hidden">
          <img
            src={electrical}
            alt="Elektricien"
            class="w-full h-48 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div
          class="w-full md:w-1/2 p-6 md:py-9 md:ml-10 md:mr-4 flex flex-col justify-between"
        >
          <div>
            <h3 class="text-2xl font-bold text-gray-800 mt-2 mb-4 md:mb-8">
              Afbouw
            </h3>
            <p class="text-gray-600 font-light">
              Onze gekwalificeerde elektriciens kunnen u helpen met alle
              elektrische problemen, van kapotte stopcontacten tot volledige
              elektrische installaties.
            </p>
          </div>
          <div class="mt-6">
            <a
              href="#"
              class="text-black font-medium hover:text-blue-600 transition-colors duration-300 inline-flex items-center group"
            >
              <span
                class="group-hover:text-blue-600 transition-colors duration-300"
                >Lees meer</span
              >
              <span class="ml-1 w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="transition-colors duration-300"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      <!-- Card 3: Slotenmaker -->
      <div
        class="border rounded-2xl border-gray-200 overflow-hidden flex flex-col md:flex-row md:min-h-45 group cursor-pointer hover:shadow-lg transition-shadow duration-300"
      >
        <div class="w-full md:w-1/2 overflow-hidden">
          <img
            src={locksmith}
            alt="Slotenmaker"
            class="w-full h-48 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div
          class="w-full md:w-1/2 p-6 md:py-9 md:ml-10 md:mr-4 flex flex-col justify-between"
        >
          <div>
            <h3 class="text-2xl font-bold text-gray-800 mt-2 mb-4 md:mb-8">
              Stucen
            </h3>
            <p class="text-gray-600 font-light">
              Buitengesloten of uw sloten vervangen? Onze slotenmakers zijn
              experts in het snel en veilig openen van deuren en het installeren
              van nieuwe sloten.
            </p>
          </div>
          <div class="mt-6">
            <a
              href="#"
              class="text-black font-medium hover:text-blue-600 transition-colors duration-300 inline-flex items-center group"
            >
              <span
                class="group-hover:text-blue-600 transition-colors duration-300"
                >Lees meer</span
              >
              <span class="ml-1 w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="transition-colors duration-300"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      <!-- Card 4: Nooddienst -->
      <div
        class="border rounded-2xl border-gray-200 overflow-hidden flex flex-col md:flex-row md:min-h-45 group cursor-pointer hover:shadow-lg transition-shadow duration-300"
      >
        <div class="w-full md:w-1/2 overflow-hidden">
          <img
            src={emergency}
            alt="Nooddienst"
            class="w-full h-48 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div
          class="w-full md:w-1/2 p-6 md:py-9 md:ml-10 md:mr-4 flex flex-col justify-between"
        >
          <div>
            <h3 class="text-2xl font-bold text-gray-800 mt-2 mb-4 md:mb-8">
              Nooddienst
            </h3>
            <p class="text-gray-600 font-light">
              Voor alle spoedgevallen bieden wij een 24/7 nooddienst. Onze
              professionals staan altijd klaar om u te helpen wanneer u ons het
              meest nodig heeft.
            </p>
          </div>
          <div class="mt-6">
            <a
              href="#"
              class="text-black font-medium hover:text-blue-600 transition-colors duration-300 inline-flex items-center group"
            >
              <span
                class="group-hover:text-blue-600 transition-colors duration-300"
                >Lees meer</span
              >
              <span class="ml-1 w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="transition-colors duration-300"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

