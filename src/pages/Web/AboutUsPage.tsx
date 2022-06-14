import { Container } from "@mui/material";

import TopBanner from "../../components/TopBanner";

import homeImage from "../../assets/img/home-image.png";
import TempImage from "../../assets/img/footer-bg.jpg";
import Banner from "../../components/Banner";
import GalleryPage from "../../pages/Admin/Gallery/GalleryPage";

import RadarOutlinedIcon from "@mui/icons-material/RadarOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import { useTranslation } from "react-i18next";

const AboutUsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <TopBanner image={TempImage} title={ t('aboutUs.title') } id="top" />
      <Container>
        <div className="flex flex-col sm:flex-row p-5 z-10">
          <div className="basis-1/2 mt-20">
            <p className="text-green-700">{ t('general.title') }</p>
            <h2 className="text-4xl mb-3">{ t('aboutUs.title2') }</h2>
            <hr className="border-b-4 border-green-500 w-1/6 mb-3" />
            <p className="text-justify">
              { t('aboutUs.description') }
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
              { t('aboutUs.missionTitle') }
            </p>
            <p className="text-white subpixel-antialiased drop-shadow-xl text-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.95)]">
              { t('aboutUs.missionDescription') }
            </p>
          </div>
          <div className="p-5 grid justify-items-center">
            <TipsAndUpdatesOutlinedIcon className="scale-150 text-white" />
            <p className="text-white text-center text-3xl drop-shadow-xl drop-shadow-[0_1px_1px_rgba(0,0,0,0.95)]">
              { t('aboutUs.vitionTitle') }
            </p>
            <p className="text-white subpixel-antialiased drop-shadow-xl text-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.95)]">
              { t('aboutUs.vitionDescription') }
            </p>
          </div>
        </div>
      </Banner>
      <div className="p-10">
        <div className="flex justify-center item-center">
          <div className="text-center align-center">
            <p className="text-green-700"> { t('general.galery') } </p>
            <h2 className="text-4xl mb-3">{ t('aboutUs.ourWork') }</h2>
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
