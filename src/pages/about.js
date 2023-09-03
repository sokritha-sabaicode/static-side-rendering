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
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();
  console.log(posts);

  return {
    props: {
      posts,
    },
  };
}
