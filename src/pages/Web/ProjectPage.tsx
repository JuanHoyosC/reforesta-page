import { Container } from "@mui/material";
import CardProjectItem from "../../components/CardProjectItem";
import TopBanner from "../../components/TopBanner";
import TempImage from "../../assets/img/footer-bg.jpg";
import useBlog from "../../hooks/useBlog";
const ProjectPage = () => {
  const {blogPosts} = useBlog(6);
  return (
      <>
        <TopBanner image={TempImage} title="Blog de nuestros Proyectos" id="top" />
        <Container className="mt-5 md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-3 mb-10">
            {
              blogPosts?.map((post,index)=>(
                <CardProjectItem 
                key={index} 
                title={post.project_title} 
                image={post.project_image}
                description={post.project_body}
                slug={post.project_slug}/>
              ))
            }
        </div>
        </Container>
      </>
  );
};

export default ProjectPage;
