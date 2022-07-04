import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { TranslateContext } from "../context/TranslateContext";
import englishImage from "../assets/img/english.png";
import spanishImage from "../assets/img/spanish.png";

const style = {
  width: "2rem",
  margin: ".5rem"
}

export default function ChangeLanguage() {

  const { translateState, updateLanguage } = useContext(TranslateContext);
  let lng = localStorage.getItem('language');
  lng = lng ? lng : 'es';
  const [language, setLanguage] = useState(lng);


  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    updateLanguage(lang);
    setLanguage(lang)
    localStorage.setItem('language', lang);
  }

  return (
    <div style={{display: "flex"}}>
      <button onClick={() => changeLanguage('es')} style={style}>
        <img src={spanishImage} alt="spanish" id="spanish" />
      </button>
      <button onClick={() => changeLanguage('en')} style={style}>
        <img src={englishImage} alt="english" id="english" />
      </button>

    </div>
  )
}