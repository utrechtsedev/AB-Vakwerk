<!-- src/lib/components/Reviews.svelte -->
<script>

  // Import customer images
  import customerImage1 from "$lib/img/customer01.avif";
  import customerImage2 from "$lib/img/customer01.avif";
  import customerImage3 from "$lib/img/customer01.avif";
  import customerImage4 from "$lib/img/customer01.avif";
  import customerLarge from "$lib/img/customer01.avif";
</script>

<div id="ervaringen" class="py-12 bg-gray-100">
  <div class="flex flex-col items-center">
    <h3 class="text-center font-bold text-4xl">
      Wat onze klanten van ons vinden
    </h3>
    <p class="text-center mt-7">
      Ontdek wat onze klanten zeggen over onze snelle, <br />betrouwbare en
      professionele spoedhulp!
    </p>
  </div>
  <div class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <!-- First row: 1 large customer photo + 1 review card -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
        <!-- Large customer photo (40% width - 2 columns out of 5) -->
        <div class="md:col-span-2">
          <div class="h-full w-full rounded-2xl overflow-hidden">
            <img
              src={customerLarge}
              alt="Tevreden klant"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- First review card (60% width - 3 columns out of 5) -->
        <div class="md:col-span-3">
          <div
            class="bg-white p-8 rounded-2xl h-full flex flex-col justify-between"
          >
            <!-- Stars from DaisyUI - made non-interactive -->
            <div class="rating pointer-events-none">
              <input
                type="radio"
                name="rating-1"
                class="mask mask-star-2 bg-orange-400"
                checked
                disabled
              />
              <input
                type="radio"
                name="rating-1"
                class="mask mask-star-2 bg-orange-400"
                checked
                disabled
              />
              <input
                type="radio"
                name="rating-1"
                class="mask mask-star-2 bg-orange-400"
                checked
                disabled
              />
              <input
                type="radio"
                name="rating-1"
                class="mask mask-star-2 bg-orange-400"
                checked
                disabled
              />
              <input
                type="radio"
                name="rating-1"
                class="mask mask-star-2 bg-orange-400"
                checked
                disabled
              />
            </div>

            <!-- Review text -->
            <p class="text-gray-600 my-6 font-light">
              "Ik heb al verschillende keren gebruik gemaakt van deze
              loodgietersdienst en ze stellen me nooit teleur. Snelle
              reactietijd, vakkundige service en eerlijke prijzen. Zeker een
              aanrader voor iedereen met loodgietersproblemen!"
            </p>

            <!-- Customer info with round photo -->
            <div class="flex justify-between items-center">
              <div>
                <h4 class="font-bold text-gray-800">Martijn de Vries</h4>
                <p class="text-gray-500 text-sm">Vaste Klant</p>
              </div>
              <div class="w-16 h-16">
                <img
                  src={customerImage1}
                  alt="Martijn de Vries"
                  class="w-full h-full rounded-full object-cover border-2 border-gray-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Second row: 3 equally sized review cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Review Card 2 -->
        <div
          class="bg-white p-8 rounded-2xl h-full flex flex-col justify-between"
        >
          <!-- Stars from DaisyUI - made non-interactive -->
          <div class="rating pointer-events-none">
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              checked
              disabled
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              checked
              disabled
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              checked
              disabled
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              checked
              disabled
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              checked
              disabled
            />
          </div>

          <!-- Review text -->
          <p class="text-gray-600 my-6 font-light">
            "Geweldige service! Ze kwamen binnen een uur nadat ik belde en
            losten mijn verstopte afvoer snel op. Zeer professioneel en
            behulpzaam."
          </p>

          <!-- Customer info with round photo -->
          <div class="flex justify-between items-center">
            <div>
              <h4 class="font-bold text-gray-800">Lisa Jansen</h4>
              <p class="text-gray-500 text-sm">Vaste Klant</p>
            </div>
            <div class="w-16 h-16">
              <img
                src={customerImage2}
                alt="Lisa Jansen"
                class="w-full h-full rounded-full object-cover border-2 border-gray-100"
              />
            </div>
          </div>
        </div>

        <!-- Review Card 3 -->
        <div
          class="bg-white p-8 rounded-2xl h-full flex flex-col justify-between"
        >
          <!-- Stars from DaisyUI - made non-interactive -->
          <div class="rating pointer-events-none">
            <input
              type="radio"
              name="rating-3"
              class="mask mask-star-2 bg-orange-400"
              checked
              disabled
            />
            <input
              type="radio"
              name="rating-3"
              class="mask mask-star-2 bg-orange-400"
              checked
              disabled
            />
            <input
              type="radio"
              name="rating-3"
              class="mask mask-star-2 bg-orange-400"
              checked
              disabled
            />
            <input
              type="radio"
              name="rating-3"
              class="mask mask-star-2 bg-orange-400"
              checked
              disabled
            />
            <input
              type="radio"
              name="rating-3"
              class="mask mask-star-2 bg-orange-400"
              checked
              disabled
            />
          </div>

          <!-- Review text -->
          <p class="text-gray-600 my-6 font-light">
            "Toen onze boiler midden in de winter uitviel, waren we wanhopig.
            Deze loodgieters kwamen dezelfde dag nog langs en installeerden een
            nieuwe. Fantastische service tijdens een stressvolle situatie!"
          </p>

          <!-- Customer info with round photo -->
          <div class="flex justify-between items-center">
            <div>
              <h4 class="font-bold text-gray-800">Thomas Bakker</h4>
              <p class="text-gray-500 text-sm">Vaste Klant</p>
            </div>
            <div class="w-16 h-16">
              <img
                src={customerImage3}
                alt="Thomas Bakker"
                class="w-full h-full rounded-full object-cover border-2 border-gray-100"
              />
            </div>
          </div>
        </div>

        <!-- Review Card 4 -->
        <div
          class="bg-white p-8 rounded-2xl h-full flex flex-col justify-between"
        >
          <!-- Stars from DaisyUI - made non-interactive -->
          <div class="rating pointer-events-none">
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-orange-400"
              checked
              disabled
            />
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-orange-400"
              checked
              disabled
            />
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-orange-400"
              checked
              disabled
            />
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-orange-400"
              checked
              disabled
            />
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-orange-400"
              checked
              disabled
            />
          </div>

          <!-- Review text -->
          <p class="text-gray-600 my-6 font-light">
            "Zeer tevreden met de renovatie van onze badkamer. Het team was
            punctueel, netjes en het resultaat overtrof onze verwachtingen.
            Zeker aan te bevelen!"
          </p>

          <!-- Customer info with round photo -->
          <div class="flex justify-between items-center">
            <div>
              <h4 class="font-bold text-gray-800">Emma Visser</h4>
              <p class="text-gray-500 text-sm">Vaste Klant</p>
            </div>
            <div class="w-16 h-16">
              <img
                src={customerImage4}
                alt="Emma Visser"
                class="w-full h-full rounded-full object-cover border-2 border-gray-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

