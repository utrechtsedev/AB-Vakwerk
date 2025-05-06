<script>
  // Metadata from frontmatter will be available here
  export let title;
  export let date;
</script>

<article class="blog-post">
  <header>
    <h1>{title}</h1>
    <time datetime={date}>{new Date(date).toLocaleDateString()}</time>
  </header>
  
  <div class="content">
    <slot />
  </div>
  
  <footer>
    <a href="/blog">← Back to all posts</a>
  </footer>
</article>

<style>
  .blog-post {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
  
  header {
    margin-bottom: 2rem;
  }
  
  h1 {
    margin-bottom: 0.5rem;
  }
  
  time {
    color: #666;
  }
  
  .content {
    line-height: 1.6;
  }
  
  footer {
    margin-top: 3rem;
    padding-top: 1rem;
    border-top: 1px solid #eee;
  }
</style>
