import { PostMetadata } from "@/components/PostMetadata";
import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  // const slugs = markdownPosts.map((file) => file.replace(".md", ""));

  const posts = markdownPosts.map((fileName) => {
    const fileContetns = fs.readFileSync(`${folder}${fileName}`, "utf8");
    const matterResult = matter(fileContetns);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      slug: fileName.replace(".md", ""),
      subtitle: matterResult.data.subtitle,
      author: matterResult.data.author,
    };
  });

  return posts;
};

export default getPostMetadata;
