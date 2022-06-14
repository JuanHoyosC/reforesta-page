import request from "../API";

export const getAllSocialNetworkServices = () => {
  return request.get("/social");
};

export const updateSocialNetworkByIdServices = async (
    token: string | null,
    body:any,
    id: string | any
  ) => {
    return request.put("/social/?id=" + id, body, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };;
