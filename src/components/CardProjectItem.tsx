import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import demoImage from "../assets/img/home-image.png";

interface CardProjectItem {
  title: string;
  slug: string;
  description: string;
  image: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const CardProjectItem: FC<CardProjectItem> = ({
  title,
  slug = "",
  description,
  image,
}) => {
  const { t } = useTranslation();
  return (
    <div className="rounded-lg">
      <img
        src={image ? image : demoImage}
        alt=""
        className="rounded-lg"
        loading="lazy"
      />
      <Link to={"/blog/" + slug} className="break-words text-xl text-cyan-900">
        {title ? title.substring(0, 50).toUpperCase() + "..." : t('general.projectTitle')}
        <p className="mb-5 break-words text-sm">
          {t('general.reading')}
        </p>
      </Link>
    </div>
  );
};

export default CardProjectItem;
