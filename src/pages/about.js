export default function About({ posts }) {
  return (
    <>
      Movie Lists
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? `https://static-side-rendering.vercel.app/api/posts`
      : "http://localhost:3000/api/posts";
  let posts = [];
  try {
    const res = await fetch(baseUrl);
    if (res.ok) {
      posts = await res.json();
    } else {
      console.error("Failed to fetch posts:", res.statusText);
    }
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }

  return {
    props: {
      posts,
    },
  };
}
