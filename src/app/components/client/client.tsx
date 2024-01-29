"use client";

import { usePathname, redirect } from "next/navigation";
import Link from "next/link";
import Styles from "@/app/layout.module.css";
import { FaCoins, FaHouse, FaPenToSquare, FaRegNewspaper } from "react-icons/fa6";
import { FcBullish, FcFolder, FcHome } from "react-icons/fc";
import Image from "next/image";

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function ClientPosts({ posts }: { posts: Post[] }) {
  const pathname = usePathname();

  if (pathname.toString() === "/posts" && posts !== undefined) {
    redirect(`/posts/${posts[posts.length - 1].title}`);
  }

  return (
    <>
      {pathname.toString().split("/")[1] === "posts" ? (
        <div className={Styles.content}>
          <nav className={Styles.nav}>
            {posts.slice().reverse().map((post: any) => (
              <Link
                className={
                  pathname.toString() === `/posts/${post.title}`
                    ? Styles.active
                    : Styles.link
                }
                href={`/posts/${post.title}`}>
                {post.title}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <Link
        className={pathname.toString() === "/" ? Styles.active : Styles.link}
        href="/">
        <FcHome /> Home
      </Link>
      <Link
        className={pathname.toString().split("/")[1] === "posts" ? Styles.active : Styles.link}
        href="/posts">
        <FcFolder /> Posts
      </Link>
      <Link
        className={pathname.toString().split("/")[1] === "socialcredit" ? Styles.bottomActive : Styles.bottomLink}
        href="/socialcredit">
        <FcBullish /> Social Credit
      </Link>
      <Link
        className={pathname.toString().split("/")[1] === "fyralath" ? Styles.active : Styles.link}
        href="/fyralath">
        <Image src="/fyralath.png" alt="me" width="14" height="14" /> Fyralath
      </Link>
      <Link
        className={pathname.toString().split("/")[1] === "review" ? Styles.active : Styles.link}
        href="/review">
        <FaPenToSquare /> Review
      </Link>
    </>
  );
}
