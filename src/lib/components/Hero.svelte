<!-- src/lib/components/Hero.svelte -->
<script>
  import herobottomround from "$lib/img/hero-bottom-round.png";
  import tiling from "$lib/img/tiling.png";
  import herooverlay from "$lib/img/hero-overlay.png";
  import heropersons from "$lib/img/hero-persons.png";
  import herotopright from "$lib/img/hero-top-right.png";
</script>

<div class="px-4 md:px-8">
  <div
    class="h-[50vh] md:h-[80vh] w-full rounded-3xl relative overflow-hidden"
  >
    <div class="absolute inset-0 w-full h-full">
      <img
        src={tiling}
        alt="Background"
        class="absolute inset-0 w-full h-full object-cover"
      />
  <div class="absolute inset-0 bg-black opacity-30"></div>
        </div>
    <img
      src={herotopright}
      alt="Top Right"
      class="absolute top-0 right-0 w-auto h-auto opacity-80"
    />
    <div class="absolute -bottom-5 w-full">
      <img src={herobottomround} alt="Bottom Round" class="w-full" />
    </div>
    <div class="absolute inset-0 flex flex-col justify-start md:justify-center">
      <div class="mx-6 mt-8 md:ml-16 md:mt-0 max-w-lg z-10">
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-4">
          A&B Vakwerk - Tegels en meer.
        </h1>
        <p class="text-lg md:text-xl text-gray-100 mb-6 md:mb-8">
           Meer dan tegels: Ook ervaren in stukadoorswerk, sloopwerk en complete afbouw.        </p>
        <a
          href="tel:0219830438"
          class="bg-yellow-300 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 md:py-4.5 md:px-8 transition duration-300 mb-4 rounded-xl inline-flex items-center gap-2"
        >
          <svg
            class="hidden lg:flex"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
            /></svg
          >
          Bel Direct: +31 6 1234 5678
        </a>
        <p class="text-sm text-gray-200 max-w-md">
          24/7 beschikbaar, neem op elk moment contact met ons op.
        </p>
      </div>
    </div>
  </div>
</div>

