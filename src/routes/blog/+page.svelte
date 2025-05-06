<script>
  export let data;
</script>

<div class="blog-list">
  <h2 class="text-2xl">Welkom op onze blog</h2>
  
  <ul>
    {#each data.posts as post}
      <li>
        <a href="/blog/{post.slug}">
          <article>
            <h2>{post.title}</h2>
            <time datetime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
          </article>
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>
  .blog-list {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
  
  h1 {
    margin-bottom: 2rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 1.5rem;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    display: block;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid #eee;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  a:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    margin: 0 0 0.5rem;
  }
  
  time {
    color: #666;
  }
</style>
