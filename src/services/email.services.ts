import request from "../API";
export const sendEmail =async (data:any) => {
    return request.post("/email", data);
} 