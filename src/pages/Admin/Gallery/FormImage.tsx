import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import NavTitle from "../../../components/NavTitle";
import { uploadImageService } from "../../../services/gallery.services";
import {
  errorMessage,
  succesAlert,
} from "../../../utils/alerts";
const FormImage = () => {
  const { t } = useTranslation();
  const [files, setFiles] = useState<any>([]);
  let navigate = useNavigate();

  const uploadImages = async () => {
    let fData = new FormData();
    fData.append("files", files[0], files?.name);
    const token = localStorage.getItem("token");
    try {
      await uploadImageService(token, fData);
      succesAlert();
      navigate("/admin/galeria-imagenes", { replace: true });
    } catch (e) {
      errorMessage();
    }
  };
  return (
    <>
      <NavTitle className="my-4">
          <Typography color="text.primary">{ t('admin.galery.galery') }</Typography>
          <Typography color="text.primary">{ t('admin.galery.add') }</Typography>
        </NavTitle>
      <input
        type="file"
        name="files"
        id="image"
        onChange={(e) => setFiles(e?.target?.files)}
      />
      <Button onClick={uploadImages}>{ t('admin.galery.upload') }</Button>
    </>
  );
};

export default FormImage;
