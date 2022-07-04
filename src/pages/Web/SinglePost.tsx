import { Skeleton } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProject } from "../../App.interfaces";
import LastPosts from "../../components/LastPosts";
import { TranslateContext } from "../../context/TranslateContext";
import { getPostProjectBySlugService } from "../../services/blog.services";
import { getTranslate } from "../../services/translate.service";

const SinglePost = () => {
  const { translateState } = useContext(TranslateContext);
  const [post, setPost] = useState<IProject>({
    project_id: 0,
    project_image: "",
    project_body: "",
    project_slug: "",
    project_title: "",
  });
  const [ title, setTitle] = useState(post?.project_title);
  const [ body, setBody] = useState(post?.project_body);

  const { slug } = useParams();

  const getLastPost = async () => {
    const token = localStorage.getItem("token");
    
    
    try {
      const res = await getPostProjectBySlugService(token, slug);
      let projectPostData: IProject = res.data;
      setPost(projectPostData);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getLastPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  useEffect(() => {
    if(translateState.language === 'en') {
      const promises: Promise<any>[] = [
        getTranslate(post.project_title),
        getTranslate(post?.project_body)
      ];
      Promise.allSettled(promises).then((translates: any[]) => {
        setTitle(translates[0].value);
        setBody(translates[1].value);
      });
    }else {
      setTitle(post.project_title);
      setBody(post?.project_body);
    }
  }, [post.project_title, post?.project_body, translateState]);

  return (
    <div className="pt-20 md:flex md:flex-row">
      <div className="p-4 md:p-5 basis-6/6 md:basis-4/6">
        <h1 className="text-3xl font-semibold text-cyan-900 break-all mb-5">
          {title ? (
            title.toUpperCase()
          ) : (
            <Skeleton variant="text" />
          )}
        </h1>
        {post?.project_image ? (
          <img src={post?.project_image} width={"80%"} alt={"single-post"} />
        ) : (
          <Skeleton variant="rectangular" />
        )}
        {body ? (
          <div dangerouslySetInnerHTML={{ __html: body }} />
        ) : (
          <>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            
          </>
        )}
      </div>
      <div className="basis-6/6 md:basis-2/6">
        <LastPosts />
      </div>
    </div>
  );
};

export default SinglePost;
