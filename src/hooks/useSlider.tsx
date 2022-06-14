import { useState, useEffect } from "react";
import { ISlider } from "../App.interfaces";
import { getAllSlidersService } from "../services/slider.services";
import usePaginationHook from "./usePaginationHook";
const useSlider= (limit:number = 6) => {
  const {
    totalPages,
    setTotalPages,
    loading,
    setLoading,
    handlerPreviousPage,
    handlerNextPage,
    currentPage,
  } = usePaginationHook();
  const [sliders, setSliders] = useState<ISlider[] | []>([]);

  const getAllSliders = async () => {
    try {
      const res = await getAllSlidersService(currentPage,limit);
      setTotalPages(parseInt(res?.data?.total_page));
      setSliders(res.data?.data);
      setLoading(false);
    } catch (e) {
      setTotalPages(1);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllSliders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return {
    sliders,
    totalPages,
    currentPage,
    loading,
    setLoading,
    handlerPreviousPage,
    handlerNextPage,
    getAllSliders,
  };
};

export default useSlider;
