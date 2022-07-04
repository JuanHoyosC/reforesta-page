import { FC, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import demoImage from "../assets/img/home-image.png";
import { TranslateContext } from "../context/TranslateContext";
import { getTranslate } from "../services/translate.service";

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
  const [ titleState, setTitle] = useState(title);
  const { translateState } = useContext(TranslateContext);

  useEffect(() => {
    if(translateState.language === 'en') {
      getTranslate(title).then((textTranslate: string) => {
        setTitle(textTranslate);
      } );
    }else {
      setTitle(title);
    }
  }, [title, translateState]);
  return (
    <div className="rounded-lg">
      <img
        src={image ? image : demoImage}
        alt=""
        className="rounded-lg"
        loading="lazy"
      />
      <Link to={"/blog/" + slug} className="break-words text-xl text-cyan-900">
        {titleState ? titleState.substring(0, 50).toUpperCase() + "..." : t('general.projectTitle')}
        <p className="mb-5 break-words text-sm">
          {t('general.reading')}
        </p>
      </Link>
    </div>
  );
};

export default CardProjectItem;
