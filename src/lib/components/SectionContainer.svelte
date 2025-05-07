<script>
  // Props for customization
  export let padding = 'p-6'; // Default padding
  export let extraClass = ''; // Additional classes if needed
</script>

<div class="{padding} {extraClass} w-[95%] md:w-[50%] mx-auto flex justify-center items-center my-5">
  <slot/>
</div>

<style>
  div {
    text-decoration: none;
    color: inherit;
    display: block;
    /* padding: 1rem; */ /* Padding is now controlled by the 'padding' prop or Tailwind classes */
    border-radius: 5px;
    border: 1px solid #eee;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  div:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
</style>
