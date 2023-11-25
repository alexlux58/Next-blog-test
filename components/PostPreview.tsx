import Link from "next/link";
import React from "react";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div>
      <Link href={`/posts/${props.slug}`}>
        {/* <h2>{post.slug}</h2> */}
        <h1>{props.title}</h1>
        <h1>{props.date}</h1>
        <h1>{props.author}</h1>
      </Link>
    </div>
  );
};

export default PostPreview;
