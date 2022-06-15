import Table from "../../../components/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button, Skeleton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useProjectFetch from "../../../hooks/useProject";
import TableItem from "../../../components/TableItem";
import Pagination from "../../../components/Pagination";
import { deleteProjectPostService } from "../../../services/blog.services";
import {
  confirmAlert,
  successDeleted,
  errorMessage,
} from "../../../utils/alerts";
import NavTitle from "../../../components/NavTitle";
import { useTranslation } from "react-i18next";
const ProjectPageAdmin = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const headers = [t('admin.projects.id'), t('admin.projects.titleTable'), t('admin.projects.imageTable'), t('admin.projects.actionsTable')];
  const {
    currentPage,
    getAllProjects,
    handlerNextPage,
    handlerPreviousPage,
    loading,
    projects,
    totalPages,
  } = useProjectFetch();

  const handlerDeleteProjectPost = async (id: number) => {
    confirmAlert().then((result) => {
      if (result.isConfirmed) {
        const token = localStorage.getItem("token");
        try {
          deleteProjectPostService(id, token);
          successDeleted();
          getAllProjects();
        } catch (e) {
          errorMessage();
        }
      }
    });
  };

  return (
    <>
      <NavTitle className="my-4">
        <Typography color="text.primary">{ t('admin.navBar.projects') }</Typography>
      </NavTitle>
      <Button
        onClick={() => {
          navigate("/admin/proyectos/add", { replace: true });
        }}
      >
        { t('admin.projects.addProject') }
      </Button>
      <Table headers={headers}>
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
                <Skeleton variant="rectangular" />
              </TableItem>
              <TableItem>
                <>
                  <Skeleton variant="rectangular" />
                  <Skeleton variant="rectangular" />
                </>
              </TableItem>
            </tr>
          )}
          {!loading &&
            projects?.length >= 1 &&
            projects?.map((project, index) => (
              <tr key={index}>
                <TableItem>
                  <p>{project.project_id}</p>
                </TableItem>
                <TableItem>
                  <p className="text-justify">{project.project_title}</p>
                </TableItem>
                <TableItem>
                  <img
                    src={project.project_image}
                    alt={project.project_title}
                    loading="lazy"
                  />
                </TableItem>
                <TableItem>
                  <>
                    <Button 
                      variant="outlined" 
                      startIcon={<DeleteIcon />}
                      onClick={()=>handlerDeleteProjectPost(project.project_id)}
                    >
                      { t('admin.projects.delete') }
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<EditIcon />}
                      onClick={() => {
                        navigate("/admin/proyectos/" + project.project_id, {
                          replace: true,
                        });
                      }}
                    >
                      { t('admin.projects.delete') }
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

export default ProjectPageAdmin;
