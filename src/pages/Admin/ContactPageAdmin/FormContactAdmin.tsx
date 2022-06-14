import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavTitle from "../../../components/NavTitle";
import { createContactService, editContactService, getContactByIdService } from "../../../services/contact.services";
import { errorMessage, succesAlert } from "../../../utils/alerts";

const FormContactAdmin = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [typeContact, setTypeContact] = useState("Correo");
  const [urlContact, setUrlContact] = useState("");
  const [contactDescription, setContactDescription] = useState("");


  const getContactById = async () =>{
    await getContactByIdService(id)
    .then((res)=>{
      const contact = res.data;
      setTypeContact(contact?.contact_type)
      setContactDescription(contact?.contact_description);
      setUrlContact(contact?.contact_url);
    });
  }

  const handleContentContact = (content: string) => {
    if (typeContact === "Correo") {
      setUrlContact(`mailto:${content}`);
    }
    setContactDescription(content);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const body = {
      contact_type: event.target[0].value,
      contact_description: event.target[1].value,
      contact_url: event.target[2].value,
    };
    if(!id) handleCreateContact(body);
    else hadleUpdateContact(body);
    
  };

  const handleCreateContact = async (body: any) => {
    const token = localStorage.getItem("token");
    await createContactService(token, body)
      .then(() => {
        succesAlert();
        navigate("/admin/contacto", { replace: true });
      })
      .catch(() => {
        errorMessage();
      });
  };

  const hadleUpdateContact= async (body: any) => {
    const token = localStorage.getItem("token");
    await editContactService(token, body, id)
      .then(() => {
        succesAlert();
        navigate("/admin/contacto", { replace: true });
      })
      .catch(() => {
        errorMessage();
      });
  };

  useEffect(()=>{
    if(id) getContactById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])

  return (
    <>
      <NavTitle className="my-4">
        <Typography color="text.primary">Contactos</Typography>
        <Typography color="text.primary">
          {id ? "Editar Contacto" : "Añadir Contacto"}
        </Typography>
      </NavTitle>
      <div className="my-5">
        <form onSubmit={handleSubmit}>
          <label className="block">
            <span className="text-gray-700">
              Seleccion el tipo de contacto a crear
            </span>
            <select
              name="contact_type"
              className="block
                w-full
                mt-1
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring 
                focus:ring-indigo-200 focus:ring-opacity-50"
              onChange={(e) => setTypeContact(e.target.value)}
            >
              <option value={"Correo"} selected={typeContact==="Correo"} >Correo</option>
              <option value={"Direccion"} selected={typeContact==="Direccion"}>Dirección</option>
              <option value={"Telefono"} selected={typeContact==="Telefono"}>Teléfono</option>
            </select>
          </label>
          <label className="block my-5">
            <span className="text-gray-700">Ingrese dato de contacto</span>
            <input
              required
              type="text"
              value={contactDescription}
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
              name="contact_description"
              onChange={(e) => handleContentContact(e.target.value)}
            />
          </label>
          <label className="block my-5">
            <span className="text-gray-700">Enlace de contacto</span>
            <input
              required
              value={urlContact}
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
              name="contact_url"
              onChange={(e) => setUrlContact(e.target.value)}
            />
          </label>
          <Button type="submit">Guardar</Button>
        </form>
      </div>
    </>
  );
};

export default FormContactAdmin;
