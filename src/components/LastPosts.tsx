import { Link } from "react-router-dom";
import useBlog from "../hooks/useBlog";
import LastPostsItem from "./LastPostsItem";

const LastPosts = () => {
  const { blogPosts } = useBlog(3);

  return (
    <div className="grid grid-cols-1 gap-3 p-5">
      {blogPosts.map((post, index) => (
        <LastPostsItem 
          key={index} index={index} 
          image={post.project_image} 
          title={post.project_title} 
          slug={post.project_slug} 
        />
      ))}
    </div>
  );
};

export default LastPosts;
