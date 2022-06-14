import { Skeleton } from "@mui/material";
import { FC } from "react";

interface PagiantionProps {
  loading: boolean;
  handlerPreviousPage: () => void;
  handlerNextPage: () => void;
  currentPage: number;
  totalPages: number;
}

const Pagination: FC<PagiantionProps> = ({
  loading,
  handlerPreviousPage,
  handlerNextPage,
  currentPage,
  totalPages,
}) => {
  return (
    <div className="grid grid-cols-3 gap-1 mb-6">
      <button onClick={handlerPreviousPage}>{"<"}</button>
      <p className="text-center">
        {loading ? <Skeleton variant="text" /> : currentPage} /
        {loading ? <Skeleton variant="text" /> : totalPages}{" "}
      </p>
      <button onClick={handlerNextPage}>{">"}</button>
    </div>
  );
};

export default Pagination;
