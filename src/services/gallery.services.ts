import request from "../API";

export const getAllImageService = async (
  currentPage: number,
  token: string | null
) => {
  return request.get("/gallery/?limit=6&page=" + currentPage, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const uploadImageService = async (token: string | null, data: any) => {
  return request.post("/gallery/", data, {
    headers: {
      ContentType: "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  });
};

export const deleteImageService = async (id: number, token: string | null) => {
  return request.delete("/gallery/?id=" + id, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
