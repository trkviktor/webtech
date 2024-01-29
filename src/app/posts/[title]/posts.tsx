import { compileMDX } from "next-mdx-remote/rsc";


async function getPost(title: string) {
  const res = await fetch(`http://45.83.106.118:8080/posts/${title}`, {cache: "no-store"});

  return res.json();
}

export default async function Post(params: { title: string }){
  const post = await getPost(params.title);

  const { content } = await compileMDX<{ title: string }>({
    source: post.content,
    options: { parseFrontmatter: true },
  })
  return (
    <>
      {content}
    </>
  )
}
