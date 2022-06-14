import request from "../API";

export const getAllPartnersService = async (
  currentPage: number,
  limit: number = 6
) => {
  return request.get("/partner/?limit=" + limit + "&page=" + currentPage);
};

export const uploadPartnerService = async (token: string | null, data: any) => {
  return request.post("/partner/", data, {
    headers: {
      ContentType: "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  });
};

export const deletePartnerService = async (
  id: number,
  token: string | null
) => {
  return request.delete("/partner/?id=" + id, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
