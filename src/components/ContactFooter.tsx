import { FC } from "react";

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

interface ContactFooterProps {
  description: string;
  url: string;
  type?: string;
}

const ContactFooter: FC<ContactFooterProps> = ({ description, url, type }) => {
  const getIconByType = (type: string | undefined) => {
    if (type === "Correo") {
      return (
        <EmailOutlinedIcon className="group-hover:text-green-400 text-white break-all" />
      );
    } else if (type === "Telefono") {
      return (
        <PhoneInTalkIcon className="group-hover:text-green-400 text-white break-all" />
      );
    } else if (type === "Direccion") {
      return (
        <FmdGoodOutlinedIcon className="group-hover:text-green-400 text-white break-all" />
      );
    } else {
      return "";
    }
  };
  return (
    <a
      href={url}
      target="_blank"
      className="h-10 w-10 items-center justify-center align-center outline-none mr-2"
      rel="noreferrer"
    >
      <div className="flex group ">
          {getIconByType(type)}
        <p className="ml-1 text-white break-words group-hover:text-green-400">
          {description}
        </p>
      </div>
    </a>
  );
};

export default ContactFooter;
