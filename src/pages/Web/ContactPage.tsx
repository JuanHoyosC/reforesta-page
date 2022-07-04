/* eslint-disable jsx-a11y/iframe-has-title */
import TopBanner from "../../components/TopBanner";
import TempImage from "../../assets/img/footer-bg.jpg";
import { Container, Skeleton } from "@mui/material";
import ContactCard from "../../components/ContactCard";
import useDonation from "../../hooks/useDonation";
import useContact from "../../hooks/useContact";
import useMap from "../../hooks/useMap";
import { succesAlert } from "../../utils/alerts";
import { useContext, useEffect, useState } from "react";
import { sendEmail } from "../../services/email.services";
import { useTranslation } from "react-i18next";
import { getTranslate } from "../../services/translate.service";
import { TranslateContext } from "../../context/TranslateContext";

const ContactPage = () => {

  const { t } = useTranslation();
  const { translateState } = useContext(TranslateContext);
  const { donationContent } = useDonation();
  const [ donation, setDonation ] = useState(donationContent?.donation_description);
  const { contacts } = useContact();
  const { map } = useMap();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading,setLoading] = useState(false);

  const handlerSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    let body = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    };
    sendEmail(body)
    .then(() => {
      succesAlert();
    })
    .finally(()=>{
      setName("");
      setEmail("");
      setMessage("");
      setLoading(false);
    });
  };

  useEffect(() => {
    if(translateState.language === 'en') {
      getTranslate(donationContent?.donation_description).then((textTranslate: string) => {
        setDonation(textTranslate);
      } );
    }else {
      setDonation(donationContent?.donation_description);
    }
  }, [donationContent?.donation_description, translateState]);

  return (
    <>
      <TopBanner image={TempImage} title={ t('contact.title') } id="top" />
      <Container>
        <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
          <div
            className="bg-green-500 rounded-3xl shadow-2xl w-full overflow-hidden"
            style={{ maxWidth: "1000px" }}
          >
            <div className="md:flex w-full">
              {donation ? (
                <div
                  className="hidden md:block w-1/2 bg-white py-10 px-10"
                  dangerouslySetInnerHTML={{
                    __html: donation,
                  }}
                />
              ) : (
                <>
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                </>
              )}
              <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                  <p className="text-white text-xl">
                    { t('contact.talkWithUs') }
                  </p>
                </div>
                <div>
                  <form onSubmit={handlerSubmit}>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">
                        <label className="text-xs font-semibold px-1 text-white text-xl">
                          { t('contact.name') }
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            value={name}
                            name="nombre"
                            type="text"
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-lime-900"
                            placeholder={ t('contact.namePlaceholder') }
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">
                        <label className="text-xs font-semibold px-1 text-white text-xl">
                        ¿Como puedes contactarnos?
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            value={email}
                            type="email"
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-lime-900"
                            placeholder="johnsmith@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">
                        <label className="text-xs font-semibold px-1 text-white text-xl">
                        { t('contact.message') }
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                          </div>
                          <textarea
                            value={message}
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-lime-900"
                            onChange={(e) => setMessage(e.target.value)}
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">

                        <button
                          type="submit"
                          className="block w-full max-w-xs mx-auto bg-transparent hover:bg-green-700 focus:bg-lime-500 text-white rounded-lg px-3 py-3 font-semibold border-white border-2"
                        >
                          { loading ? t('contact.sending') : t('contact.send') }
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 md:p-14">
          <div className="item">
            <p className="text-green-700">{ t('general.information') }</p>
            <h2 className="text-4xl mb-3">{ t('contact.contactUs') }</h2>
            <hr className="border-b-4 border-green-500 w-3/6 mb-3" />
            {contacts?.map((ci, index) => (
              <a
                key={index}
                href={ci.contact_url}
                target={"_blank"}
                rel="noreferrer"
              >
                <ContactCard
                  title={ci.contact_type}
                  description={ci.contact_description}
                  contact_type={ci.contact_type}
                />
              </a>
            ))}
          </div>
          <div
            className="item justify-self-center"
            dangerouslySetInnerHTML={{
              __html: map.map_iframe,
            }}
          ></div>
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
