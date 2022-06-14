import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavTitle from "../../../components/NavTitle";
import { uploadPartnerService } from "../../../services/partner.services";
import { errorMessage, succesAlert } from "../../../utils/alerts";

const FormPartner = () => {
  const [files, setFiles] = useState<any>([]);
  let navigate = useNavigate();
  const uploadImages = async () => {
    let fData = new FormData();
    fData.append("files", files[0], files?.name);
    const token = localStorage.getItem("token");
    try {
      await uploadPartnerService(token, fData);
      succesAlert();
      navigate("/admin/socios", { replace: true });
    } catch (e) {
      errorMessage();
    }
  };

  return (
    <>
      <NavTitle className="my-4">
        <Typography color="text.primary">Socios</Typography>
        <Typography color="text.primary">Añadir socios</Typography>
      </NavTitle>
      <input
        type="file"
        name="files"
        id="image"
        onChange={(e) => setFiles(e?.target?.files)}
      />
      <Button onClick={uploadImages}>Añadir</Button>
    </>
  );
};

export default FormPartner;
