import { Container, Skeleton } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { TranslateContext } from "../context/TranslateContext";

import useSlider from "../hooks/useSlider";
import { getTranslate } from "../services/translate.service";

const Slider = () => {
  const { sliders } = useSlider(100);
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState(sliders[index]?.slider_title);
  const [description, setDescription] = useState(sliders[index]?.slider_description);
  const { translateState } = useContext(TranslateContext);

  const callback = () => {
    setIndex(index + 1);
    if (index > sliders.length - 2) setIndex(0);
  };

  useEffect(() => {
    let timer = setInterval(callback, 5000);
    return () => clearInterval(timer);
  });

  useEffect(() => {
    if (translateState.language === 'en') {
      const promises: Promise<any>[] = [
        getTranslate(sliders[index]?.slider_title),
        getTranslate(sliders[index]?.slider_description)
      ]
      //Envia paralelamente la petición
      Promise.allSettled(promises).then((translates: any[]) => {
        setTitle(translates[0].value);
        setDescription(translates[1].value);
      });
    } else {
      setDescription(sliders[index]?.slider_description);
      setTitle(sliders[index]?.slider_title);
    }
  }, [index, translateState]);

  return (
    <>
      <div></div>
      {sliders.length > 0 && (
        <div
          className="transition-all ease-in-out duration-1000"
          style={{
            backgroundImage: "url('" + sliders[index]?.slider_image + "')",
            backgroundSize: "cover",
            width: "100%",
            height: "100vh",
            backgroundAttachment: "fixed",
          }}
        >
          <Container>
            <div className="p-8 md:p-18 ">

              <h1 className="text-6xl md:text-7xl text-white font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.95)] my-20 transition-all ease-in-out duration-1000 break-all">
                {title}
              </h1>
              <p className="text-justify text-2xl text-white font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.95)] my-6 w-12/12 transition-all ease-in-out duration-1000 break-all">
                {description}
              </p>
              <div className="flex justify-center mt-10 sm:mt-20">
                <div className="animate-bounce-slow p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full flex border-2 border-white pt-0 sm:pt-2">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Slider;
