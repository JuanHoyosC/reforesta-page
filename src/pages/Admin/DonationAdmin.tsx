import { useState, useEffect } from "react";
import Editor from "../../components/Editor";
import { Button, Typography } from "@mui/material";
import useDonation from "../../hooks/useDonation";
import { updateDonationService } from "../../services/donation.services";
import { errorMessage, succesAlert } from "../../utils/alerts";
import NavTitle from "../../components/NavTitle";
import { useTranslation } from "react-i18next";
const DonationAdmin = () => {
  const { t } = useTranslation(); 
  const [content, setContent] = useState("");
  const [id,setId] =useState(0);
  const {loading,donationContent} = useDonation();

  useEffect(()=>{
    if(!loading){
      setContent(donationContent?.donation_description);
      setId(donationContent?.donation_id)
    }
  },[donationContent, loading])

  const handlerUpdateDonationContent =() =>{
    const token = localStorage.getItem("token");
    let body = {
      donation_description: content
    }
    try {
      setTimeout(() => {
        updateDonationService(token, body, id);
        succesAlert();
      }, 100);
    } catch (e) {
      errorMessage();
    }
  }



  return (
    <div>
      <NavTitle className="my-4">
        <Typography color="text.primary">{ t('admin.navBar.donation') }</Typography>
      </NavTitle>
      <label className="block my-5">
        <span className="text-gray-700">{ t('admin.donation.content') }</span>
        <Editor setContent={setContent} content={content} />
      </label>
      <Button onClick={handlerUpdateDonationContent}>{ t('admin.donation.save') }</Button>
    </div>
  );
};

export default DonationAdmin;
