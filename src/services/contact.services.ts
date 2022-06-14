import request from "../API";

export const getAllContactsService = async () => {
  return request.get("/contact");
};

export const getContactByIdService = async (id: string | undefined) => {
  return request.get("/contact/?id=" + id);
};

export const createContactService = async (token: string | null, data: any) => {
  return request.post("/contact", data, {
    headers: {
      ContentType: "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  });
};

export const editContactService = async (
  token: string | null,
  data: any,
  id: string | undefined
) => {
  return request.put("/contact/?id=" + id, data, {
    headers: {
      ContentType: "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  });
};

export const deleteContactService = async (
  id: number,
  token: string | null
) => {
  return request.delete("/contact/?id=" + id, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
