import { useEffect, useState } from "react";
import { getMapService } from "../services/map.services";
import usePaginationHook from "./usePaginationHook";

const useMap = () => {
  const { loading, setLoading } = usePaginationHook();
  const [map, setMap] = useState({
    map_id: 0,
    map_iframe: "",
  });

  const getMapContent = async () => {
    await getMapService()
      .then((res) => {
        setMap(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(()=>{
    getMapContent();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return { loading, map, getMapContent };
};

export default useMap;
