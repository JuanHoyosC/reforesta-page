import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ISlider } from "../../../App.interfaces";
import NavTitle from "../../../components/NavTitle";
import {
  editSliderService,
  getSlidersByIdService,
  uploadSliderService,
} from "../../../services/slider.services";
import {
  errorMessage,
  succesAlert,
  warningMessage,
} from "../../../utils/alerts";

const FormSlider = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<any>(null);

  const createFormData = () => {
    let fData = new FormData();
    if (file) fData.append("files", file[0], file.name);
    fData.append("slider_title", title);
    fData.append("slider_description", description);
    return fData;
  };

  const handlerSetFile = (e: any) => {
    let fileData = e.target.files;
    setFile(fileData);
  };

  const handlerUploadSlider = () => {
    if (file === null) {
      warningMessage("Seleccione una imagen");
    } else {
      let fData = createFormData();
      const token = localStorage.getItem("token");
      try {
        uploadSliderService(token, fData);
        succesAlert();
        setTitle("");
        setDescription("");
      } catch (e) {
        errorMessage();
      }
    }
  };

  const handlerEditSlider = () => {
    let fData = createFormData();
    const token = localStorage.getItem("token");
    try {
      editSliderService(token, fData, id);
      succesAlert();
      setTitle("");
      setDescription("");
    } catch (e) {
      errorMessage();
    }
  };

  const getSliderById = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await getSlidersByIdService(token, id);
      let sliderData: ISlider = res.data;
      setTitle(sliderData.slider_title);
      setDescription(sliderData.slider_description);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSliderById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-5">
      <NavTitle>
      <Typography color="text.primary">Slider</Typography>
        <Typography color="text.primary">
          {id ? "Editar Slider" : "Añadir Slider"}
        </Typography>
      </NavTitle>
      <div className="mt-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (id) {
              handlerEditSlider();
            } else {
              handlerUploadSlider();
            }
            navigate("/admin/slider", { replace: true });
          }}
        >
          <label className="block my-5">
            <span className="text-gray-700">Titulo</span>
            <input
              required
              type="text"
              className="mt-1 
                  block w-full 
                  rounded-md 
                  border-gray-300 
                  shadow-sm 
                  focus:border-indigo-300 
                  focus:ring 
                  focus:ring-indigo-200 
                  focus:ring-opacity-50"
              placeholder="Titulo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="block my-5">
            <span className="text-gray-700">Descripcion</span>
            <input
              required
              type="text"
              className="mt-1 
                  block w-full 
                  rounded-md 
                  border-gray-300 
                  shadow-sm 
                  focus:border-indigo-300 
                  focus:ring 
                  focus:ring-indigo-200 
                  focus:ring-opacity-50"
              placeholder="Descripción"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </label>
          <label className="block my-5">
            <span className="text-gray-700">Imagen Destacada</span>
            <input
              type="file"
              name="files"
              id="image"
              onChange={(e) => handlerSetFile(e)}
            />
          </label>
          <Button type="submit">Guardar</Button>
        </form>
      </div>
    </div>
  );
};

export default FormSlider;
