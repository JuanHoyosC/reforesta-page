import request from "../API";

export const getAllPostService = async (
  currentPage: number,
  limit: number = 6
) => {
  return request.get("/project/?limit=" + limit + "&page=" + currentPage);
};

export const getPostProjectByIdService = async (
  token: string | null,
  id: string | undefined
) => {
  return request.get("/project/?id=" + id, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const getPostProjectBySlugService = async (
  token: string | null,
  slug: string | undefined
) => {
  return request.get("/project/?slug=" + slug, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};


export const createPostProjectService = async (token: string | null, data: any) => {
  return request.post("/project/", data, {
    headers: {
      ContentType: "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  });
};


export const editPostProjectService = async (
  token: string | null,
  data: any,
  id: string | undefined
) => {
  return request.post("/project/?id=" + id, data, {
    headers: {
      ContentType: "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  });
};

export const deleteProjectPostService = async (id: number, token: string | null) => {
  return request.delete("/project/?id=" + id, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};