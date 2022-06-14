import { useEffect, useState } from "react";
import { IDonation } from "../App.interfaces";
import { getDonationService } from "../services/donation.services";
import usePaginationHook from "./usePaginationHook";

const useDonation = () => {
  const { loading, setLoading } = usePaginationHook();
  const [donationContent, setDonationContent] = useState<IDonation>({
    donation_id: 0,
    donation_description: "",
  });

  const getDonationContent = async () => {
    try {
      const res = await getDonationService();
      setDonationContent(res.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(()=>{
    getDonationContent();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return {
    loading,
    setLoading,
    donationContent,
  };

};

export default useDonation;
