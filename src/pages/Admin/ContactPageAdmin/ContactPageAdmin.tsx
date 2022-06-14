import { useNavigate } from "react-router-dom";
import { Button, Skeleton, Typography } from "@mui/material";
import Table from "../../../components/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useContact from "../../../hooks/useContact";
import TableItem from "../../../components/TableItem";
import { deleteContactService } from "../../../services/contact.services";
import {
  confirmAlert,
  errorMessage,
  successDeleted,
} from "../../../utils/alerts";
import NavTitle from "../../../components/NavTitle";
const ContactPageAdmin = () => {
  const headers = ["id", "tipo", "descripcion", "acciones"];

  const { contacts, loading, getAllContacts } = useContact();
  const navigate = useNavigate();

  const hanlderDeleteContact = (id: number) => {
    confirmAlert().then((result) => {
      if (!result.isConfirmed) return null;
      const token = localStorage.getItem("token");
      deleteContactService(id, token)
        .then(() => {
          getAllContacts();
          successDeleted();
        })
        .catch(() => {
          errorMessage();
        });
    });
  };

  return (
    <>
      <NavTitle className="my-4">
        <Typography color="text.primary">Contactos</Typography>
      </NavTitle>
      <Button
        onClick={() => {
          navigate("/admin/contacto/add", { replace: true });
        }}
      >
        Añadir nuevo contacto
      </Button>
      <Table headers={headers}>
        <tbody>
          {loading && (
            <tr>
              <TableItem>
                <Skeleton variant="text" />
              </TableItem>
              <TableItem>
                <Skeleton variant="rectangular" />
              </TableItem>

              <TableItem>
                <Skeleton variant="rectangular" />
              </TableItem>
            </tr>
          )}
          {!loading &&
            contacts.length > 0 &&
            contacts?.map((con, index) => (
              <tr key={index}>
                <TableItem>
                  <p>{con.contact_id}</p>
                </TableItem>
                <TableItem>
                  <p>{con.contact_type}</p>
                </TableItem>
                <TableItem>
                  <p>{con.contact_description}</p>
                </TableItem>
                <TableItem>
                  <>
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => hanlderDeleteContact(con.contact_id)}
                    >
                      Borrar
                    </Button>
                    <Button 
                      variant="outlined" 
                      startIcon={<EditIcon />} 
                      onClick={()=>{
                        navigate("/admin/contacto/"+con.contact_id,{ replace: true });
                      }}>
                      Editar
                    </Button>
                  </>
                </TableItem>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default ContactPageAdmin;
