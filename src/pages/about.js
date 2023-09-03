export default function About({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? `https://static-side-rendering.vercel.app/api/posts`
      : "http://localhost:3000/api/posts";
  // Call an external API endpoint to get posts
  const res = await fetch(baseUrl);
  const posts = await res.json();
  console.log(posts);

  return {
    props: {
      posts,
    },
  };
}
