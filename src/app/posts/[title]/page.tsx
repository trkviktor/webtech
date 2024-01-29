import Post from "./posts";

export default function Blog({ params }: { params: { title: string } }) {
    return (
      <>
        <Post title={params.title} />
      </>
    )
  }
