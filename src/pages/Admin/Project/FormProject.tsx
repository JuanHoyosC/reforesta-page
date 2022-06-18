import { Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { IProject } from "../../../App.interfaces";
import Editor from "../../../components/Editor";
import NavTitle from "../../../components/NavTitle";
import {
  createPostProjectService,
  editPostProjectService,
  getPostProjectByIdService,
} from "../../../services/blog.services";
import {
  errorMessage,
  succesAlert,
  warningMessage,
} from "../../../utils/alerts";
import { slugify } from "../../../utils/slugify";

const FormProject = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [file, setFile] = useState<any>();
  const [content, setContent] = useState("");

  const handlerSetFile = (e: any) => {
    let fileData = e.target.files;
    setFile(fileData);
  };

  const createFormData = () => {
    let fData = new FormData();
    if (file) fData.append("files", file[0], file.name);
    fData.append("project_title", title);
    fData.append("project_body", content);
    fData.append("project_slug", slugify(title));
    return fData;
  };

  const handlerUploadProejctPost = () => {
    if (file === null) {
      warningMessage("Seleccione una imagen");
    } else {
      let fData = createFormData();
      const token = localStorage.getItem("token");
      try {
        createPostProjectService(token, fData);
        succesAlert();
        navigate("/admin/proyectos", { replace: true });
      } catch (e) {
        errorMessage();
      }
    }
  };

  const handlerEditProjectPost = () => {
    let fData = createFormData();
    const token = localStorage.getItem("token");
    try {
      editPostProjectService(token, fData, id);
      succesAlert();
      navigate("/admin/proyectos", { replace: true });
    } catch (e) {
      errorMessage();
    }
  };

  const getProjectPostById = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await getPostProjectByIdService(token, id);
      let projectPostData: IProject = res.data;
      setTitle(projectPostData.project_title);
      setContent(projectPostData.project_body);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProjectPostById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-5">
      <NavTitle className="my-4">
        <Typography color="text.primary">{ t('admin.projects.projects') }</Typography>
        <Typography color="text.primary">{ t('admin.projects.add') }</Typography>
      </NavTitle>
      <div className="mt-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (id) {
              handlerEditProjectPost();
            } else {
              handlerUploadProejctPost();
            }
          }}
        >
          <label className="block my-5">
            <span className="text-gray-700">{ t('admin.projects.titleTable') }</span>
            <input
              required
              type="text"
              name="project_title"
              className="mt-1 
              block w-full 
              rounded-md 
              border-gray-300 
              shadow-sm 
              focus:border-indigo-300 
              focus:ring 
              focus:ring-indigo-200 
              focus:ring-opacity-50"
              placeholder={ t('admin.projects.titleTable') }
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="block my-5">
            <span className="text-gray-700">{ t('admin.projects.mainImage') }</span>
            <input
              type="file"
              name="files"
              className="mt-1 
              block w-full 
              rounded-md 
              border-gray-300 
              shadow-sm 
              focus:border-indigo-300 
              focus:ring 
              focus:ring-indigo-200 
              focus:ring-opacity-50"
              placeholder={ t('admin.projects.titleTable') }
              onChange={(e) => handlerSetFile(e)}
            />
          </label>
          <label className="block my-5">
            <span className="text-gray-700">{ t('admin.projects.content') }</span>
            <Editor setContent={setContent} content={content} />
          </label>
          <Button type="submit">{ t('admin.projects.save') }</Button>
        </form>
      </div>
    </div>
  );
};

export default FormProject;
