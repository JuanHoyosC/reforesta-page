import { Link } from "react-router-dom";
import useBlog from "../hooks/useBlog";

const LastPosts = () => {
  const { blogPosts } = useBlog(3);

  return (
    <div className="grid grid-cols-1 gap-3 p-5">
      {blogPosts.map((post, index) => (
        <div
          key={index}
          className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl"
        >
          <img
            src={post.project_image}
            alt="art cover"
            loading="lazy"
            width="100"
            height="667"
            className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
          />
          <div className="sm:w-7/12 pl-0 p-5">
            <div className="space-y-2">
              <div className="space-y-4">
                <Link
                  to={"/blog/" + post.project_slug}
                  className="text-sm font-semibold text-cyan-900 break-all"
                >
                  {post.project_title.toUpperCase()}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LastPosts;
