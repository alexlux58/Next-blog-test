import fs from "fs";

// **** npm i markdown-to-jsx ****
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "public/posts/";
  const files = `${folder}${slug}.md`;
  const content = fs.readFileSync(files, "utf8");
  const matterResult = matter(content);
  console.log(matterResult);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  console.log(post);

  return (
    <div>
      {/* <h1>This is a post: {slug}</h1> */}
      <Markdown>{post.content}</Markdown>
    </div>
  );
};

export default PostPage;
