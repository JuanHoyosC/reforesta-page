import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import { useTranslation } from "react-i18next";
const SectionInformation = () => {
  const { t } = useTranslation();

  const informationList = [
    {icon: <CrisisAlertIcon className="scale-150 item-center group-hover:text-white" />, text: t('sectionInformation.sectionA')},
    {icon: <CrisisAlertIcon className="scale-150 item-center group-hover:text-white" />, text: t('sectionInformation.sectionB')},
    {icon: <CrisisAlertIcon className="scale-150 item-center group-hover:text-white" />, text: t('sectionInformation.sectionC')},
    {icon: <CrisisAlertIcon className="scale-150 item-center group-hover:text-white" />, text: t('sectionInformation.sectionD')},
    {icon: <CrisisAlertIcon className="scale-150 item-center group-hover:text-white" />, text: t('sectionInformation.sectionE')},
    {icon: <CrisisAlertIcon className="scale-150 item-center group-hover:text-white" />, text: t('sectionInformation.sectionF')}

  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 mb-10 divide-y md:divide-y-0 md:divide-x  divide-x">
      {informationList.map((info, index)=>(
        <div className="p-10 grid justify-items-center group hover:bg-teal-800" key={index}>
          {info.icon}
          <p className="text-center group-hover:text-white ">
            {info.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionInformation;
