import request from "../API";

export const getAllSlidersService = async (
  currentPage: number,
  limit: number = 6
) => {
  return request.get("/slider/?limit=" + limit + "&page=" + currentPage);
};

export const getSlidersByIdService = async (
  token: string | null,
  id: string | undefined
) => {
  return request.get("/slider/?id=" + id, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const uploadSliderService = async (token: string | null, data: any) => {
  return request.post("/slider/", data, {
    headers: {
      ContentType: "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  });
};

export const editSliderService = async (
  token: string | null,
  data: any,
  id: string | undefined
) => {
  return request.post("/slider/?id=" + id, data, {
    headers: {
      ContentType: "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  });
};

export const deleteSliderService = async (id: number, token: string | null) => {
  return request.delete("/slider/?id=" + id, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
