import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import NavTitle from "../../../components/NavTitle";
import { uploadPartnerService } from "../../../services/partner.services";
import { errorMessage, succesAlert } from "../../../utils/alerts";

const FormPartner = () => {
  const { t } = useTranslation();
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
        <Typography color="text.primary">{ t('admin.navBar.socios') }</Typography>
        <Typography color="text.primary"> { t('admin.socios.addSocios') } </Typography>
      </NavTitle>
      <input
        type="file"
        name="files"
        id="image"
        onChange={(e) => setFiles(e?.target?.files)}
      />
      <Button onClick={uploadImages}>{ t('admin.socios.add') }</Button>
    </>
  );
};

export default FormPartner;
