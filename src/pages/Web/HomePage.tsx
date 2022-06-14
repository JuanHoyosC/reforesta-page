import { Container } from "@mui/material";
import Slider from "../../components/Slider";
import homeImage from "../../assets/img/home-image.png";
import Banner from "../../components/Banner";

import CardProjectItem from "../../components/CardProjectItem";

import { useNavigate } from "react-router-dom";
import CarouselPartners from "../../components/CarouselPartners";
import SectionInformation from "../../components/SectionInformation";
import useBlog from "../../hooks/useBlog";

const HomePage = () => {
  const { blogPosts } = useBlog(3);

  let navigate = useNavigate();
  return (
    <>
      <Slider />
      <Container>
        <div className="flex flex-col sm:flex-row p-5 z-10">
          <div className="basis-1/2 mt-20">
            <p className="text-green-700">REFORESTA LORETO</p>
            <h2 className="text-4xl mb-3">
              INICIATIVAS PARA EL BENEFICIO SOCIAL
            </h2>
            <hr className="border-b-4 border-green-500 w-1/6 mb-3" />
            <p className="text-justify">
              Fomento de iniciativas orientadas a crear o mejorar capacidades de
              producción de bienes o servicios bajo condiciones competitivas,
              rentables, sostenibles y sin efectos ambientales negativos
              significativos.
            </p>
            <button
              className="bg-green-500  px-10 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white rounded-full mt-5 drop-shadow-2xl hover:bg-green-700 hover:-translate-y-1 transition duration-300 ease-in-out"
              onClick={() => {
                navigate("/acerca-de-nosotros");
              }}
            >
              Leer mas
            </button>
          </div>
          <div className="basis-1/2 p-8">
            <div className="mt-6 ">
              <img
                src={homeImage}
                alt="planta"
                className="drop-shadow-xl w-96"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <SectionInformation />
      </Container>
      <Banner className="w-full h-56">
        <>
          <div className="absolute z-10 w-full h-auto">
            <div className="flex justify-center item-center z-10 mt-20">
              <p className="text-4xl text-white text-center">
                Nuestros aliados en este procesos
              </p>
            </div>
          </div>
        </>
      </Banner>
      <div className="mx-10 md:mx-20 bg-white rounded-lg -mt-8 md:-mt-12 mb-20 md:mb-40 shadow-2xl">
        <CarouselPartners />
      </div>
      <div className="flex justify-center item-center">
        <div className="text-center align-center">
          <p className="text-green-700">Proyectos</p>
          <h2 className="text-4xl mb-3">Ultimos proyectos</h2>
          <hr className=" align-center border-b-4 border-green-500 mb-3 mx-86 w-6/6" />
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-3 mb-10">
          {blogPosts?.map((post, index) => (
            <CardProjectItem
              key={index}
              title={post.project_title}
              image={post.project_image}
              description={post.project_body}
              slug={post.project_slug}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default HomePage;
