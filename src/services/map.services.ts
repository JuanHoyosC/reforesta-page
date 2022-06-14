import request from "../API";

export const updateMapService = async (
    token: string | null,
    data: any,
  ) => {
    return request.put("/map/", data, {
      headers: {
        ContentType: "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    });
  };

export const getMapService = async () =>{
    return request.get("/map");
}