import { Metadata } from "next";
import { Posts } from "../../components/Posts";
import PostSearch from "@/components/PostSearch";

const metadata: Metadata = {
  title: "Blog | Next App",
};

export default function Blog() {


  
  return (
    <>
      <h1>Blog Page</h1>
      {/* <PostSearch /> */}
      <Posts />
    </>
  );
};