import ClientPosts from "./components/client/client";

async function getPosts() {
  const res = await fetch(`http://45.83.106.118:8080/posts` , {cache: "no-store"});

  return res.json();
}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <ClientPosts posts={posts} />
  );
}
