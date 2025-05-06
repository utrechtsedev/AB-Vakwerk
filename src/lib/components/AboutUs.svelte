<!-- src/lib/components/AboutUs.svelte -->
<script>
  import aboutus from "$lib/img/aboutus.avif";
</script>

<div id="over-ons"
  class="px-4 py-12 md:px-25 md:py-28 flex flex-col md:flex-row bg-gray-100 gap-8 md:gap-22 items-center md:items-start"
>
  <div class="w-full md:w-1/2 relative">
    <img
      src={aboutus}
      alt="About Us"
      class="w-full h-64 md:h-full object-cover rounded-2xl md:rounded-4xl shadow-md"
    />
    <div class="absolute inset-0 flex items-center justify-center">
      <div
        class="relative w-28 h-28 md:w-38 md:h-38 border-4 md:border-5 rounded-full"
      >
        <div class="absolute inset-0 bg-white rounded-full shadow-lg"></div>
        <svg
          class="absolute inset-0 w-full h-full spinning-disc"
          viewBox="0 0 300 300"
        >
          <path
            id="textCirclePath"
            d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
            fill="none"
            stroke="none"
          />
          <text
            fill="#333333"
            font-size="30"
            font-weight="bold"
            letter-spacing="1"
          >
            <textPath href="#textCirclePath" startOffset="0%">
              KWALITEIT ★ RESULTAAT ★ SNEL ★ VEILIG ★
            </textPath>
          </text>
        </svg>
        <div class="absolute inset-0 flex items-center justify-center">
          <img
            class="w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center text-white font-bold"
            src="/round_logo.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div
    class="w-full md:w-1/2 space-y-4 md:space-y-6 flex flex-col justify-start pt-4 md:pt-12"
  >
    <h2 class="text-3xl md:text-5xl font-semibold text-black mt-0">
      Bouwen op Vertrouwen
      <br />en Duurzaamheid
    </h2>
    <p class="text-black font-light mt-3 md:mt-5">
      We zijn trots op het leveren van eersteklas onderhoudsdiensten met
      toewijding.
    </p>
    <div class="inline-flex mt-6 md:mt-12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        class="text-blue-600 mr-2"
        ><path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m8.032 12l1.984 1.984l4.96-4.96m4.55 5.272l.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.98 1.98 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.98 1.98 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.98 1.98 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a2 2 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
        /></svg
      >
      <h3 class="text-xl md:text-2xl">Ervaren vakmensen</h3>
    </div>
    <p class="ml-8 md:ml-10 font-light">
      Ons team heeft tientallen jaren gecombineerde ervaring in de
      loodgietersbranche. We staan achter onze werktevredenheidsgarantie.
    </p>
    <div class="inline-flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        class="text-blue-600 mr-2"
        ><path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m8.032 12l1.984 1.984l4.96-4.96m4.55 5.272l.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.98 1.98 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.98 1.98 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.98 1.98 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a2 2 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
        /></svg
      >
      <h3 class="text-xl md:text-2xl">Tevredenheidsgarantie</h3>
    </div>
    <p class="ml-8 md:ml-10 font-light">
      We zijn pas tevreden als jij dat bent. We staan achter ons werk en
      garanderen elke keer topkwaliteit service.
    </p>
    <div class="pt-4"></div>
  </div>
</div>

<style>
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .spinning-disc {
    animation: spin 15s linear infinite;
  }
</style>

