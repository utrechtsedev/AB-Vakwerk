<div class="blog-container">
  <slot />
</div>

<style>
  .blog-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  /* Target MDsveX-processed content with more specific selectors */
  :global(.blog-container > :is(h1, h2, h3, h4, h5, h6)) {
    font-size: revert;
    font-weight: revert;
    margin: revert;
  }

  /* Basic styles for common Markdown elements */
  :global(.blog-container > h1) {
    font-size: 2.25rem;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  :global(.blog-container > h2) {
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  :global(.blog-container > p) {
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  /* Other styles from your list, but with :global() */
  :global(.blog-container > a) {
    color: #3182ce;
    text-decoration: underline;
  }
  
  /* Continue with other elements as needed */
</style>
