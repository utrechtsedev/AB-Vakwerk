<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	import SectionContainer from '$lib/components/SectionContainer.svelte';

	let { data } = $props();

	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } =
		data.meta;
	const { PostContent } = data;
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>
<SectionContainer>
	<article class="post">
		<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
		<img
			class="w-full"
			src={coverImage}
			alt=""
			style="aspect-ratio: {coverWidth} / {coverHeight};"
		/>

		<h1>{title}</h1>

		<div class="meta">
			<b>Gepubliceerd:</b>
			{date}
			<br />
			<b>Geupdate:</b>
			{updated}
		</div>

		<PostContent />

		{#if categories}
			<aside class="post-footer">
				<h2>Categorieën:</h2>
				<ul class="post-footer__categories">
					{#each categories as category}
						<li>
							<a href="/blog/category/{category}/">
								{category}
							</a>
						</li>
					{/each}
				</ul>
			</aside>
		{/if}
	</article>
</SectionContainer>
