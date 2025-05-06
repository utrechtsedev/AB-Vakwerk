<!-- src/routes/+page.svelte -->

<script>
  import AboutUs from "$lib/components/AboutUs.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Services from "$lib/components/Services.svelte";
  import Reviews from "$lib/components/Reviews.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title
    >SpoedSpecialist - 24/7 Spoed Loodgieter, Elektricien & Slotenmaker</title
  >
  <meta
    name="title"
    content="SpoedSpecialist - 24/7 Spoed Loodgieter, Elektricien & Slotenmaker"
  />
  <meta
    name="description"
    content="24/7 beschikbare spoeddienst voor loodgieter, elektricien en slotenmaker. Direct hulp bij spoedgevallen. Snelle, betrouwbare en professionele service. Bel nu: +31 6 1234 5678"
  />
  <meta
    name="keywords"
    content="spoed loodgieter, spoedelektricien, spoedslotenmaker, 24/7 nooddienst, lekkage, stroomstoring, buitengesloten, noodgeval, spoedhulp"
  />
  <meta name="robots" content="index, follow" />
  <meta name="language" content="Dutch" />
  <meta name="author" content="SpoedSpecialist" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charset="UTF-8" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.spoedspecialist.nl/" />
  <meta
    property="og:title"
    content="SpoedSpecialist - 24/7 Spoed Loodgieter, Elektricien & Slotenmaker"
  />
  <meta
    property="og:description"
    content="24/7 beschikbare spoeddienst voor loodgieter, elektricien en slotenmaker. Direct hulp bij spoedgevallen. Snelle, betrouwbare en professionele service."
  />
  <meta
    property="og:image"
    content="https://www.spoedspecialist.nl/og-image.jpg"
  />
  <meta property="og:locale" content="nl_NL" />
  <meta property="og:site_name" content="SpoedSpecialist" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://www.spoedspecialist.nl/" />
  <meta
    name="twitter:title"
    content="SpoedSpecialist - 24/7 Spoed Loodgieter, Elektricien & Slotenmaker"
  />
  <meta
    name="twitter:description"
    content="24/7 beschikbare spoeddienst voor loodgieter, elektricien en slotenmaker. Direct hulp bij spoedgevallen. Snelle, betrouwbare en professionele service."
  />
  <meta
    name="twitter:image"
    content="https://www.spoedspecialist.nl/twitter-image.jpg"
  />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://www.spoedspecialist.nl/" />

  <!-- Hreflang -->
  <link rel="alternate" hreflang="nl" href="https://www.spoedspecialist.nl/" />
  <link
    rel="alternate"
    hreflang="x-default"
    href="https://www.spoedspecialist.nl/"
  />

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/manifest.json" />

  <!-- Theme Color -->
  <meta name="theme-color" content="#218BEC" />

  <!-- Structured Data - Local Business -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "SpoedSpecialist",
      "description": "24/7 beschikbare spoeddienst voor loodgieter, elektricien en slotenmaker. Direct hulp bij spoedgevallen.",
      "image": "https://www.spoedspecialist.nl/logo.png",
      "telephone": "+31612345678",
      "email": "info@spoedspecialist.nl",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "NL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "52.370216",
        "longitude": "4.895168"
      },
      "url": "https://www.spoedspecialist.nl",
      "priceRange": "€€€",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      ],
      "areaServed": {
        "@type": "Country",
        "name": "Nederland"
      },
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Spoed Loodgieter",
            "description": "24/7 spoed loodgietersdiensten voor lekkages, verstoppingen en complete badkamerrenovaties."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Spoed Elektricien",
            "description": "24/7 spoed elektriciens voor stroomstoringen, kapotte stopcontacten en volledige elektrische installaties."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Spoed Slotenmaker",
            "description": "24/7 spoed slotenmakers voor buitensluitingen en het vervangen van sloten."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Nooddienst",
            "description": "Altijd beschikbaar voor alle spoedgevallen, ongeacht het tijdstip."
          }
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "4",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  </script>

  <!-- Breadcrumb Schema -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.spoedspecialist.nl"
        }
      ]
    }
  </script>

  <!-- Emergency Service Schema -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "EmergencyService",
      "name": "SpoedSpecialist Nooddienst",
      "alternateName": "24/7 Spoeddienst",
      "priceRange": "€€€",
      "openingHours": "Mo-Su 00:00-24:00",
      "telephone": "+31612345678",
      "description": "24/7 spoeddienst voor loodgieterwerk, elektrische storingen en slotenmaker noodhulp",
      "areaServed": {
        "@type": "Country",
        "name": "Nederland"
      }
    }
  </script>
</svelte:head>

<Hero />
<AboutUs />
<Services />
<Reviews />
<Footer />

