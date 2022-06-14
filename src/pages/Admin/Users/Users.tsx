import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import request from "../../../API";

import Pagination from "../../../components/Pagination";
import Table from "../../../components/Table";

import { User } from "./IUser.interface";

import { Button, Skeleton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PageNotFound from "../../PageNotFound";
import usePaginationHook from "../../../hooks/usePaginationHook";
import TableItem from "../../../components/TableItem";
import { confirmAlert } from "../../../utils/alerts";
import NavTitle from "../../../components/NavTitle";

const Users = () => {
  const {
    totalPages,
    setTotalPages,
    loading,
    setLoading,
    handlerPreviousPage,
    handlerNextPage,
    currentPage,
  } = usePaginationHook();
  const [users, setUsers] = useState([]);

  let navigate = useNavigate();

  const headersL = ["id", "usuario", "acciones"];

  const getAllUser = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await request.get("/user/?limit=5&page=" + currentPage, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUsers(res.data?.data);
      setTotalPages(parseInt(res.data.total_page));
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteUser = async (id: any) => {
    confirmAlert().then((result) => {
      if (result.isConfirmed) {
        const token = localStorage.getItem("token");

        request
          .delete("/user/?id=" + id, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(() => getAllUser());
      }
    });
  };

  useEffect(() => {
    getAllUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  if (totalPages === 0) {
    return (
      <div className="my-5">
        <NavTitle className="my-4">
          <Typography color="text.primary">Usuarios</Typography>
        </NavTitle>
        <Button
          onClick={() => {
            navigate("/admin/usuarios/add", { replace: true });
          }}
        >
          Nuevo Usuario
        </Button>
        <PageNotFound />
      </div>
    );
  }

  return (
    <>
      <NavTitle className="my-4">
          <Typography color="text.primary">Usuarios</Typography>
        </NavTitle>
      <Button
        onClick={() => {
          navigate("/admin/usuarios/add", { replace: true });
        }}
      >
        Nuevo Usuario
      </Button>
      <Table headers={headersL}>
        <tbody>
          {loading && (
            <tr>
              <TableItem>
                <Skeleton variant="text" />
              </TableItem>
              <TableItem>
                <Skeleton variant="text" />
              </TableItem>
              <TableItem>
                <Skeleton variant="text" />
              </TableItem>
            </tr>
          )}
          {!loading &&
            users?.map((data: User, index) => (
              <tr key={data?.user + index}>
                <TableItem>
                  <p>{data?.user_id} </p>
                </TableItem>
                <TableItem>
                  <p>{data?.user} </p>
                </TableItem>
                <TableItem>
                  <>
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => {
                        deleteUser(data.user_id);
                      }}
                    >
                      Borrar
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<EditIcon />}
                      onClick={() => {
                        navigate("/admin/usuarios/" + data.user_id, {
                          replace: true,
                        });
                      }}
                    >
                      Editar
                    </Button>
                  </>
                </TableItem>
              </tr>
            ))}
        </tbody>
      </Table>
      <Pagination
        loading={loading}
        currentPage={currentPage}
        totalPages={totalPages}
        handlerNextPage={handlerNextPage}
        handlerPreviousPage={handlerPreviousPage}
      />
    </>
  );
};

export default Users;
