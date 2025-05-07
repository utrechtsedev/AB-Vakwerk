<script>
	let { posts = [] } = $props();
</script>

<div class="blog-list">
  <h2 class="text-2xl text-center">Welkom op de A&B blog!</h2>
  {#if posts.length === 0}
    <p class="text-center">We hebben nog geen artikelen, kom later terug.</p>
  {/if}
<ul>

	{#each posts as post}
			<li>
				<article>
					<a href="/blog/{post.slug}">
						<h2 class="font-bold">
							{post.title}
						</h2>
				<p>{post.excerpt}</p>
				<div class="time">
					<b>Gepubliceerd:</b>
					{post.date}
				</div>

					</a>

				</article>

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
  
  .time {
    color: #666;
  }
</style>
