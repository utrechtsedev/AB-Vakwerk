<!-- src/routes/+layout.svelte -->
<script>
  import "../app.css";
  import "@fontsource-variable/montserrat";
  import Footer from "$lib/components/Footer.svelte";
  import { onMount } from 'svelte';
  
  onMount(() => {
    // Handle smooth scrolling for links with hash (#)
    document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the hash from the href
        const hash = this.getAttribute('href').split('#')[1];
        const targetElement = document.getElementById(hash);
        
        if (targetElement) {
          // Smooth scroll to the element
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL hash without jumping
          history.pushState(null, null, `/#${hash}`);
        }
      });
    });
  });
</script>
<div class="navbar bg-base-100 px-4 md:px-8 py-5">
  <div class="navbar-start">
    <a href="/" class="flex items-center">
      <img src="/logo.png" class="w-16" alt="" />
<!--
      <p class="font-bold text-xl md:text-2xl">Vakwerk</p>
-->
    </a>
  </div>
  <div class="navbar-end">
    <!-- Desktop menu items - hidden on mobile -->
    <ul class="menu menu-horizontal px-1 hidden lg:flex">
      <li><a class="text-lg" href="/">Home</a></li>
      <li><a class="text-lg" href="/#over-ons">Over ons</a></li>
      <li><a class="text-lg" href="/#ervaringen">Ervaringen</a></li>
      <li><a class="text-lg" href="/blog">Blog</a></li>
      <li><a class="text-lg" href="/contact">Contact</a></li>
    </ul>
    <!-- Mobile hamburger menu - visible only on mobile -->
    <div class="dropdown dropdown-end lg:hidden">
      <div tabindex="0" role="button" class="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <ul
        tabindex="-1"
        class="menu dropdown-content bg-base-100 border-gray-300 rounded-box z-[1] mt-3 w-72 p-4 shadow-lg"
      >
        <li><a href="/" class="text-lg py-2">Home</a></li>
        <li><a href="/#over-ons" class="text-lg py-2">Over ons</a></li>
        <li><a href="/#ervaringen" class="text-lg py-2">Ervaringen</a></li>
        <li><a href="/blog" class="text-lg py-2">Blog</a></li>
        <li><a href="/contact" class="text-lg py-2">Contact</a></li>
        <li>
          <a
            href="tel:+31612345678"
            class="flex items-center gap-2 text-lg py-2"
          >
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
<slot />
<Footer />
