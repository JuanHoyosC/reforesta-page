import { useEffect, useState } from "react";
import { IPartner } from "../App.interfaces";
import { getAllPartnersService } from "../services/partner.services";
import usePaginationHook from "./usePaginationHook";

const usePartner = () => {
  const [partners, setPartners] = useState<IPartner[] | []>([]);
  const {
    totalPages,
    setTotalPages,
    loading,
    setLoading,
    handlerPreviousPage,
    handlerNextPage,
    currentPage,
  } = usePaginationHook();

  const getAllPartners = async () => {
    try {
      const res = await getAllPartnersService(currentPage);
      setTotalPages(parseInt(res?.data?.total_page));
      setPartners(res.data?.data);
      setLoading(false);
    } catch (e) {
      setTotalPages(1);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPartners();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    partners,
    totalPages,
    currentPage,
    loading,
    setLoading,
    handlerPreviousPage,
    handlerNextPage,
    getAllPartners}

};

export default usePartner;
