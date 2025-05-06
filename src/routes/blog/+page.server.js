export async function load() {
  const postsModules = import.meta.glob('./*/+page.md');
  
  const posts = [];
  
  for (const path in postsModules) {
    const module = await postsModules[path]();
    const slug = path.split('/')[1];
    
    posts.push({
      slug,
      title: module.metadata.title,
      date: module.metadata.date
    });
  }
  
  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return {
    posts
  };
}
