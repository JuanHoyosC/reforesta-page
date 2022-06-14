import { useState } from "react";

const usePaginationHook = () => {
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  const handlerNextPage = () => {
    if (currentPage < totalPages) {
      setLoading(true);
      setCurrentPage(currentPage + 1);
    }
  };

  const handlerPreviousPage = () => {
    if (currentPage <= totalPages && currentPage > 1) {
      setLoading(true);
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    currentPage,
    totalPages,
    setTotalPages,
    handlerNextPage,
    handlerPreviousPage,
    loading,
    setLoading
  };
};

export default usePaginationHook;
