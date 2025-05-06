<script>
  import { page } from '$app/stores';
</script>

<div class="error-container">
  <h1>{$page.status}: {$page.error?.message || 'Something went wrong'}</h1>
  <p>Please try again later or contact support if the problem persists.</p>
  <a href="/blog">Return to blog</a>
</div>

<style>
  .error-container {
    max-width: 800px;
    margin: 4rem auto;
    padding: 2rem;
    text-align: center;
  }
</style>
