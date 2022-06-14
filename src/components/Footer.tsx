import footerBg from "../assets/img/fondo-1.jpeg";
import Logo from "../assets/img/logo-reforestaloreto.png";

import useSocialNetwork from "../hooks/useSocialNetwork";
import { convertToBoolean } from "../utils/parseBoolean";
import useContact from "../hooks/useContact";
import ContactFooter from "./ContactFooter";

export default function Footer() {
  const { networks: social_networks } = useSocialNetwork();
  const { contacts } = useContact();
  return (
    <footer
      style={{
        backgroundImage: "url(" + footerBg + ")",
        backgroundSize: "cover",
        backgroundPosition:"center",
        opacity: "0.85",
      }}
    >
      <div className="relative bg-blueGray-200 pt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-4/12 p-4 md:p-1 md:pb-5 ">
              <img src={Logo} alt={"Logo ReforestaLoreto"} width={250} />
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <h4 className="text-3xl fonat-semibold text-white mb-2">
                Redes Sociales
              </h4>
              <hr className="border-b-4 border-green-500 w-1/6" />
              <div className="mt-6 lg:mb-0 mb-6 flex">
                {social_networks.map((sn, index) => {
                  if (!convertToBoolean(sn.is_active)) {
                    return "";
                  }
                  return (
                    <a
                      key={index}
                      href={sn.network_url}
                      target="_blank"
                      className="h-10 w-10 items-center justify-center align-center outline-none mr-2"
                      rel="noreferrer"
                    >
                      <img
                        src={sn.network_image}
                        alt={sn.network_type}
                        loading="lazy"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <h4 className="text-3xl fonat-semibold text-white mb-2">
                Contacto
              </h4>
              <hr className="border-b-4 border-green-500 w-1/6" />
              <div className="mt-6 lg:mb-0 mb-6 ">
                {contacts?.map((sn, index) => (
                  <ContactFooter
                    key={index}
                    type={sn.contact_type}
                    url={sn.contact_url}
                    description={sn.contact_description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center md:justify-between justify-center bg-neutral-900 py-1">
        <div className="w-full md:w-6/12 px-4 mx-auto text-center">
          <div className="text-sm text-white py-1">
            Copyright ©{" "}
            <span id="get-current-year">Reforestando Loreto 2022.</span>{" "}
            Desarrollado por Da&Da Servicios Tecnológico
          </div>
        </div>
      </div>
    </footer>
  );
}
