import { useEffect, useState } from "react";
import { IProject } from "../App.interfaces";
import { getAllPostService } from "../services/blog.services";
import usePaginationHook from "./usePaginationHook";

const useBlog = (limit: number = 3) => {
  const [blogPosts, setBlogPosts] = useState<IProject[] | []>([]);
  const {
    totalPages,
    setTotalPages,
    loading,
    setLoading,
    handlerPreviousPage,
    handlerNextPage,
    currentPage,
  } = usePaginationHook();

  const getAllPost = async () => {
    try {
      const res = await getAllPostService(currentPage, limit);
      setTotalPages(parseInt(res?.data?.total_page));
      setBlogPosts(res.data?.data);
      setLoading(false);
    } catch (e) {
      setTotalPages(1);
      setLoading(false);
    }
  };

  const getLastPost = async () => {
    try {
      const res = await getAllPostService(currentPage, limit);
      setTotalPages(parseInt(res?.data?.total_page));
      setBlogPosts(res.data?.data);
      setLoading(false);
    } catch (e) {
      setTotalPages(1);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    blogPosts,
    totalPages,
    currentPage,
    loading,
    setLoading,
    handlerPreviousPage,
    handlerNextPage,
    getLastPost,
    getAllPost,
  };
};

export default useBlog;
