import { Alert, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import request from "../../../API";
import NavTitle from "../../../components/NavTitle";

export const FormUser = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const { id } = useParams();
  let navigate = useNavigate();

  const handlerSubmit = (e: any) => {
    e.preventDefault();
    if (!id) {
      handlerCreateUser();
    }
    else{
      handlerEditUser();
    }
    navigate("/admin/usuarios", { replace: true });
  };

  const getUserById = async (id: string) => {
    const token = localStorage.getItem("token");
    try {
      const res = await request.get("/user/?id=" + parseInt(id), {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUser(res.data?.user);
    } catch (e) {
      console.log(e);
    }
  };

  const handlerCreateUser = async () => {
    const token = localStorage.getItem("token");
    try {
      await request.post(
        "/user",
        {
          user: user,
          password: password,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setIsSuccess(true);
      setShowMessage(true);
    } catch (E) {
      setIsSuccess(false);
    }
  };

  const handlerEditUser = async () => {
    console.log("user: " + user + ",pass :" + password);
    const token = localStorage.getItem("token");
    try {
      await request.put(
        "/user/?id=" + id,
        {
          user: user,
          password: password,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setIsSuccess(true);
      setShowMessage(true);
    } catch (E) {
      setIsSuccess(false);
    }
  };

  useEffect(() => {
    console.log(id);
    if (id) {
      getUserById(id);
    }
  }, [id]);

  return (
    <div className="my-10">
      <NavTitle className="my-4">
      <Typography color="text.primary">{ t('admin.navBar.users') }</Typography>
        <Typography color="text.primary">
          {id ? "Editar Usuario" :  "Añadir Usuario"}
        </Typography>
      </NavTitle>
      {showMessage && isSuccess && (
        <Alert
          severity="success"
          onClose={() => {
            setShowMessage(!showMessage);
          }}
        >
          Usuario registrado con exito!
        </Alert>
      )}
      {showMessage && !isSuccess && (
        <Alert
          severity="error"
          onClose={() => {
            setShowMessage(!showMessage);
          }}
        >
          Usuario no registrado con exito!
        </Alert>
      )}
      <form className="my-5" onSubmit={handlerSubmit}>
        <div className="flex flex-col ">
          <div className="my-5">
            <label className="block">
              <span className="text-gray-700">Usuario</span>
              <input
                required
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Usuario"
                value={user ? user : ""}
                onChange={(e) => setUser(e.target.value)}
              />
            </label>
          </div>
          <div className="my-5">
            <label className="block">
              <span className="text-gray-700">Contraseña</span>
              <input
                required
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Contraseña"
                value={password ? password : ""}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          {!id && <Button type="submit">Guardar</Button>}
          {id && <Button type="submit">Guardar Cambios</Button>}
        </div>
      </form>
    </div>
  );
};
