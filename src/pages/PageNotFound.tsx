import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import image from "../assets/img/axe.png";

const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center py-4 sm:pt-0 text-center">
      <div>
        <img src={image} alt="construccion" loading="lazy" width={300} />
        <h1 className="text-gray-800 text-center my-5 ">
          { t('notFound.notFound') }
        </h1>
        <NavLink
          to="/"
          className="bg-green-500 hover:bg-green-700 px-12 md:px-16 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white text-center rounded-full"
        >
          { t('notFound.goHome') }
        </NavLink>
      </div>
    </div>
  );
};

export default PageNotFound;
