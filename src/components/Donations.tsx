import { useContext, useEffect, useState } from "react";
import { TranslateContext } from "../context/TranslateContext";
import useDonation from "../hooks/useDonation";
import { getTranslate } from "../services/translate.service";

const Donations = () => {
  const { donationContent } = useDonation();
  const { translateState } = useContext(TranslateContext);
  const [ donation, setDonation ] = useState(donationContent.donation_description);

  //Se encarga de traduccir el texto
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
    <div className="flex justify-center">
      <div
        className="md:block bg-white py-10 px-10"
        dangerouslySetInnerHTML={{
          __html: donation,
        }}
      />
    </div>
  );
};

export default Donations;
