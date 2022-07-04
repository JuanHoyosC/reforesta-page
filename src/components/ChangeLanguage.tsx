import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { TranslateContext } from "../context/TranslateContext";

export default function ChangeLanguage() {

  const { translateState, updateLanguage } = useContext(TranslateContext);
  console.log(translateState)

  const [language, setLanguage] = React.useState(translateState.language);
  const { t, i18n } = useTranslation();

  const changeLanguage = (event: any) => {
    const lang = event.target.value
    i18n.changeLanguage(lang)
    setLanguage(lang);
    updateLanguage(lang);
    localStorage.setItem('language', lang);
  }
  
  return (
    <select style={{ color: '#000' }} name="language" value={language} id="language" onChange={ changeLanguage }>
        <option key="es" value="es">{ t('general.spanish') }</option>
        <option key="en" value="en">{ t('general.english') }</option>
    </select>
  )
}