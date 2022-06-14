import { FC } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
interface ContactCardProps {
  title: string;
  description: string;
  contact_type?: string;
}

const ContactCard: FC<ContactCardProps> = ({
  title,
  description,
  contact_type,
}) => {
  const getIconByType = (contact_type: string | undefined) => {
    if (contact_type === "Correo") {
      return (
        <EmailIcon className="scale-100 md:scale-150 group-hover:text-white" />
      );
    } else if (contact_type === "Telefono") {
      return (
        <PhoneInTalkIcon className="scale-100 md:scale-150 group-hover:text-white" />
      );
    } else if (contact_type === "Direccion") {
      return (
        <PlaceIcon className="scale-100 md:scale-150 group-hover:text-white" />
      );
    } else {
      return "";
    }
  };

  return (
    <div className="group border rounded-3xl border-slate-400 w-full p-5 shadow-md w-full hover:bg-teal-800 my-4">
      <div className="flex">
        <div className="flex-auto w-5/6">
          <p className="font-bold group-hover:text-white">{title}</p>
          <p className="group-hover:text-white break-words">{description}</p>
        </div>
        <div className="flex-1 w-1/6">
          <div className="rounded-xl bg-gray-300 p-2 md:p-4 group-hover:bg-teal-900 md:w-14 w-10 h-15">
            {getIconByType(contact_type)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
