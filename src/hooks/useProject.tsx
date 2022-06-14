import { useState, useEffect } from "react";
import { IProject } from "../App.interfaces";
import {
  getAllPostService,
} from "../services/blog.services";
import usePaginationHook from "./usePaginationHook";
const useProjectFetch = (limit:number = 6) => {
  const [projects, setProjects] = useState<IProject[] | []>([]);
  const {
    totalPages,
    setTotalPages,
    loading,
    setLoading,
    handlerPreviousPage,
    handlerNextPage,
    currentPage,
  } = usePaginationHook();

  const getAllProjects = async () => {
    try {
      const res = await getAllPostService(currentPage,limit);
      setTotalPages(parseInt(res?.data?.total_page));
      setProjects(res.data?.data);
      setLoading(false);
    } catch (e) {
      setTotalPages(1);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return {
    projects,
    totalPages,
    currentPage,
    loading,
    setLoading,
    handlerPreviousPage,
    handlerNextPage,
    getAllProjects
  };
};

export default useProjectFetch;
