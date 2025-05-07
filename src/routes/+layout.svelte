<script>
  import "../app.css";
  import "@fontsource-variable/montserrat"; // Ensure this font is correctly set up in your project
  import Footer from "$lib/components/Footer.svelte";
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation'; // Import SvelteKit's afterNavigate

  // Reusable function to smoothly scroll to an element by its ID (hash)
  const smoothScrollToHash = (hashValueWithSymbol) => {
    if (hashValueWithSymbol && hashValueWithSymbol.startsWith('#')) {
      const elementId = hashValueWithSymbol.substring(1); // Remove the '#'
      const targetElement = document.getElementById(elementId);

      if (targetElement) {
        // Use a short timeout to ensure the element is rendered,
        // especially after page navigations or on initial load.
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Scrolls to the top of the target element
          });
        }, 100); // 100ms delay, can be adjusted if needed
      }
    }
  };

  onMount(() => {
    // 1. Handle initial page load: if URL has a hash, scroll to it.
    smoothScrollToHash(window.location.hash);

    // 2. Setup a global click listener for all anchor links.
    // This is often more robust in SPAs than querying and attaching to individual links,
    // especially if content changes dynamically.
    const handleDocumentClick = (event) => {
      // Find the closest anchor tag clicked, if any
      const anchorElement = event.target.closest('a');

      if (anchorElement && anchorElement.href) {
        // Create URL objects to easily parse pathnames and hashes
        // anchorElement.href will be the absolute URL
        const linkUrl = new URL(anchorElement.href);
        const currentUrl = new URL(window.location.href);

        const linkHash = linkUrl.hash; // e.g., "#over-ons"
        const linkPathname = linkUrl.pathname; // e.g., "/" or "/blog"

        // Only proceed if the link has a hash (i.e., it's an anchor link)
        if (!linkHash) {
          return; // Not an anchor link, let SvelteKit handle normal navigation
        }

        const targetElementId = linkHash.substring(1);
        const targetElement = document.getElementById(targetElementId);

        // Case 1: Target element exists on the CURRENT page.
        // This means linkPathname is the same as currentUrl.pathname.
        if (targetElement && linkPathname === currentUrl.pathname) {
          event.preventDefault(); // Stop the browser's default jump
          smoothScrollToHash(linkHash);
          // Update the URL hash in the address bar without a page reload
          history.pushState(null, null, linkHash);
        }
        // Case 2: Target element is NOT on the current page OR linkPathname is different.
        // (e.g., on /blog, clicking a link to /#ervaringen)
        // In this case, we DON'T preventDefault. We let SvelteKit navigate.
        // The `afterNavigate` function (defined below) will handle the smooth scroll
        // once the new page (e.g., the homepage) is loaded.
        // No explicit else needed here; default browser/SvelteKit behavior takes over.
      }
    };

    document.addEventListener('click', handleDocumentClick);

    // Cleanup: remove the event listener when the layout component is destroyed
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  });

  // 3. Handle scrolling after SvelteKit navigations.
  // This is crucial for links that navigate to a different page and then scroll.
  afterNavigate(() => {
    smoothScrollToHash(window.location.hash);
  });
</script>

<div class="navbar bg-base-100 px-4 md:px-8 py-5">
  <div class="navbar-start">
    <a href="/" class="flex items-center">
      <img src="/logo.png" class="w-16" alt="Vakwerk Logo" />
      </a>
  </div>
  <div class="navbar-end">
    <ul class="menu menu-horizontal px-1 hidden lg:flex">
      <li><a class="text-lg" href="/">Home</a></li>
      <li><a class="text-lg" href="/#over-ons">Over ons</a></li>
      <li><a class="text-lg" href="/#ervaringen">Ervaringen</a></li>
      <li><a class="text-lg" href="/blog">Blog</a></li>
      <li><a class="text-lg" href="/contact">Contact</a></li>
    </ul>
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
        tabindex="-1" class="menu dropdown-content bg-base-100 border-gray-300 rounded-box z-[1] mt-3 w-72 p-4 shadow-lg"
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
            </svg>
            +31 6 12345678
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

<slot />

<Footer />
