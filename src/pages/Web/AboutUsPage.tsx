import { Container } from "@mui/material";

import TopBanner from "../../components/TopBanner";

import homeImage from "../../assets/img/home-image.png";
import TempImage from "../../assets/img/footer-bg.jpg";
import Banner from "../../components/Banner";
import GalleryPage from "../../pages/Admin/Gallery/GalleryPage";

import RadarOutlinedIcon from "@mui/icons-material/RadarOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";

const AboutUsPage = () => {
  return (
    <>
      <TopBanner image={TempImage} title="Acerca de Nosotros" id="top" />
      <Container>
        <div className="flex flex-col sm:flex-row p-5 z-10">
          <div className="basis-1/2 mt-20">
            <p className="text-green-700">REFORESTA LORETO</p>
            <h2 className="text-4xl mb-3">QUIENES SOMOS</h2>
            <hr className="border-b-4 border-green-500 w-1/6 mb-3" />
            <p className="text-justify">
              Somos una organización peruana sin fines de lucro fundada en el
              departamento de Loreto, la región amazónica más extensa del Perú,
              una zona de extraordinaria biodiversidad que es afectada por los
              constantes problemas de tala ilegal, deforestación, agricultura
              migratoria. Actualmente promovemos la conservación y recuperación
              de especies forestales en peligro de extinción en 300 hectáreas de
              bosques, ubicados en el km 55 de la carretera Iquitos-Nauta, una
              zona muy afectada por la tala ilegal.
            </p>
          </div>
          <div className="basis-1/2 p-8">
            <div className="mt-6">
              <img
                src={homeImage}
                alt="planta"
                className="drop-shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Container>
      <Banner className="w-full h-auto md:h-56">
        <div className="grid grid-cols md:grid-cols-2 gap-2 divide-y md:divide-y-0 md:divide-x p-5">
          <div className="p-5 grid justify-items-center">
            <RadarOutlinedIcon className="scale-150 text-white" />
            <p className="text-white text-center text-3xl drop-shadow-xl drop-shadow-[0_1px_1px_rgba(0,0,0,0.95)]">
              Misión
            </p>
            <p className="text-white subpixel-antialiased drop-shadow-xl text-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.95)]">
              Conservar áreas de bosques vulnerables y promover la reforestación
              y recuperación de especies forestales amazónicas en peligro de
              extinción.
            </p>
          </div>
          <div className="p-5 grid justify-items-center">
            <TipsAndUpdatesOutlinedIcon className="scale-150 text-white" />
            <p className="text-white text-center text-3xl drop-shadow-xl drop-shadow-[0_1px_1px_rgba(0,0,0,0.95)]">
              Visión
            </p>
            <p className="text-white subpixel-antialiased drop-shadow-xl text-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.95)]">
              Ser una organización sin ánimo de lucro reconocida a nivel mundial
              por fomentar la conservación de bosques amazónicos y la
              reforestación con énfasis en especies forestales en peligro de
              extinción.
            </p>
          </div>
        </div>
      </Banner>
      <div className="p-10">
        <div className="flex justify-center item-center">
          <div className="text-center align-center">
            <p className="text-green-700">Galeria</p>
            <h2 className="text-4xl mb-3">Enterate de nuestro trabajo</h2>
            <hr className=" align-center  border-b-4 border-green-500 mb-3 mx-86 w-6/6" />
          </div>
        </div>
        <div className="mt-5">
          <GalleryPage page="front" />
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
