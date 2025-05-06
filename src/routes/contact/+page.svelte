<!-- src/routes/contact/+page.svelte -->
<script>
  import Contact from "$lib/components/Contact.svelte";
  import { onMount } from "svelte";

  // Set page title
  onMount(() => {
    document.title = "Contact - AB Vakwerk";
  });
</script>

<svelte:head>
  <title>Contact - AB Vakwerk</title>
  <meta name="description" content="Neem contact op met AB Vakwerk voor al uw vragen over tegelwerk, stucwerk en meer. We staan 24/7 klaar om u te helpen." />
</svelte:head>
<Contact />

