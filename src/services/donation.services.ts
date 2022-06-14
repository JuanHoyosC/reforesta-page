import request from "../API";
export const getDonationService = async () => {
  return request.get("/donation");
};

export const updateDonationService = async (
  token: string | null,
  body: any,
  id: string | any
) => {
  return request.put("/donation/?id=" + id, body, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
