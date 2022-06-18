import React from "react";
import { useTranslation } from "react-i18next";

export default function ChangeLanguage() {
  let lng = localStorage.getItem('language');
  lng = lng ? lng : 'es';
  const [language, setLanguage] = React.useState(lng);
  const { t, i18n } = useTranslation();

  const changeLanguage = (event: any) => {
    const lang = event.target.value
    i18n.changeLanguage(lang)
    setLanguage(lang);
    localStorage.setItem('language', lang);
  }
  
  return (
    <select style={{ color: '#000' }} name="language" value={language} id="language" onChange={ changeLanguage }>
        <option key="es" value="es">{ t('general.spanish') }</option>
        <option key="en" value="en">{ t('general.english') }</option>
    </select>
  )
}