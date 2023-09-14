"use client";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import { getAllPosts } from "@/services/getPosts";
import LoadingPosts from "./loading";
import Posts from "../../components/Posts";

const metadata: Metadata = {
  title: "Blog | Next App",
};

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllPosts().then(setPosts).finally(() => setLoading(false));
  })

  return (
    <>
      <h1>Blog Page</h1>
      {loading ? <LoadingPosts /> : <Posts posts={posts} />}
    </>
  );
};