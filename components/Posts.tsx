"use client";
import { shallow } from "zustand/shallow";
import { usePosts } from "@/store";
import Link from "next/link";
import { useEffect } from "react";

const Posts = () => {
  const [posts, loading, getAllPosts] = usePosts(
    ({posts, loading, getAllPosts}) => ([posts, loading, getAllPosts]),
    shallow
);

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return loading ? (
    <h3>Loading... </h3>
  ) : (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { Posts };