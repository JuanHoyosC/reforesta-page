import { useEffect, useState } from "react";
import { ISocialNetwork } from "../App.interfaces";
import { getAllSocialNetworkServices } from "../services/socialnetwork.services";
import usePaginationHook from "./usePaginationHook";

const useSocialNetwork = () => {
  const [networks, setNetworks] = useState<ISocialNetwork[] | []>([]);
  const { loading, setLoading } = usePaginationHook();

  const getAllSocialNetworks = async () => {
    try {
      const res = await getAllSocialNetworkServices();
      setNetworks(res.data?.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllSocialNetworks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    setLoading,
    networks,
  };
};

export default useSocialNetwork;
