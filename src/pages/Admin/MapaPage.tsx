import { useState, useEffect } from "react";
import Editor from "../../components/Editor";
import { Button, Typography } from "@mui/material";
import useMap from "../../hooks/useMap";
import { updateMapService } from "../../services/map.services";
import { errorMessage, succesAlert } from "../../utils/alerts";
import NavTitle from "../../components/NavTitle";
const MapaPage = () => {
  const [content, setContent] = useState("");

  const { loading, map } = useMap();

  useEffect(() => {
    if (!loading) {
      setContent(map.map_iframe);
    }
  }, [loading, map.map_iframe]);

  const handlerUpdateMapContent = async () => {
    const token = localStorage.getItem("token");
    let body = {
      map_iframe: content,
    };

    await updateMapService(token, body)
      .then(() => {
        succesAlert();
      })
      .catch(() => {
        errorMessage();
      });
  };

  return (
    <div>
      <NavTitle className="my-4">
        <Typography color="text.primary">Mapa</Typography>
      </NavTitle>
      <label className="block my-5">
        <span className="text-gray-700">Mapa</span>
        <Editor setContent={setContent} content={content} />
      </label>
      <Button onClick={handlerUpdateMapContent}>Guardar</Button>
    </div>
  );
};

export default MapaPage;
