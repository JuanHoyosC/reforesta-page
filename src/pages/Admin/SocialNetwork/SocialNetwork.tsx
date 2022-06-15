import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React, { useEffect, useState } from "react";
import useSocialNetwork from "../../../hooks/useSocialNetwork";
import { Button, CircularProgress } from "@mui/material";
import { updateSocialNetworkByIdServices } from "../../../services/socialnetwork.services";
import { errorMessage, succesAlert } from "../../../utils/alerts";
import { convertToBoolean } from "../../../utils/parseBoolean";
import NavTitle from "../../../components/NavTitle";
import { useTranslation } from "react-i18next";

const SocialNetwork = () => {
  const { t } = useTranslation();
  const { loading, networks } = useSocialNetwork();
  const [expanded, setExpanded] = useState<string | false>(false);
  const [checkedState, setCheckedState] = useState(new Array(3).fill(false));

  useEffect(() => {
    if (!loading) {
      setCheckedState(
        networks.map((network) => {
          return convertToBoolean(network.is_active);
        })
      );
    }
  }, [loading, networks]);

  const handleChangeAccordion =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleOnChangeCehckBox = (position: number) => (event: any) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const handleOnSubmit = (id: number) => (event: any) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    let data = JSON.stringify({
      network_url: event.target[0].value,
      is_active: event.target[1].checked,
    });
    try {
      setTimeout(() => {
        updateSocialNetworkByIdServices(token, data, id);
        succesAlert();
      }, 100);
    } catch (e) {
      errorMessage();
    }
  };

  return (
    <>
      <NavTitle className="my-4">
        <Typography color="text.primary">{ t('admin.navBar.socialNetworks') }</Typography>
      </NavTitle>
      {loading && <CircularProgress />}
      {!loading && (
        <div className="mt-5">
          {networks.map((network, index) => {
            let panelIndex = index + 1;
            return (
              <Accordion
                key={index}
                className="my-5"
                expanded={expanded === `panel${panelIndex}`}
                onChange={handleChangeAccordion(`panel${panelIndex}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id={`panel${panelIndex}bh-header`}
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    {network.network_type}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <form onSubmit={handleOnSubmit(network.network_id)}>
                    <label className="block my-5">
                      <span className="text-gray-700">
                        { t('admin.socialNetworks.url') }
                      </span>
                      <input
                        required
                        defaultValue={network.network_url}
                        type="text"
                        name={network.network_type}
                        className="mt-1 
                          block w-full 
                          rounded-md 
                          border-gray-300 
                          shadow-sm 
                          focus:border-indigo-300 
                          focus:ring 
                          focus:ring-indigo-200 
                          focus:ring-opacity-50"
                        placeholder="Titulo"
                      />
                    </label>
                    <label className="md:w-2/3 block text-gray-500 font-bold">
                      <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        checked={checkedState[index]}
                        onChange={handleOnChangeCehckBox(index)}
                      />
                      <span className="text-sm">
                        { t('admin.socialNetworks.disabled') }
                      </span>
                    </label>
                    <Button type={"submit"}>{ t('admin.socialNetworks.save') }</Button>
                  </form>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SocialNetwork;
