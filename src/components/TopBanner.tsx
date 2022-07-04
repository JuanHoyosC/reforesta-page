import { FC } from "react";
import { Container } from "@mui/material";
interface TopBannerProps {
  id?: string;
  image: string;
  title: string;
}

const TopBanner: FC<TopBannerProps> = ({ id, image, title }) => {
  return (
    <div
      id={id}
      className="transition-all ease-in-out duration-1000"
      style={{
        backgroundImage: "url('" + image + "')",
        backgroundSize: "cover",
        width: "100%",
        height: "70vh",
        backgroundAttachment: "fixed",
      }}
    >
      <Container>
        <div className="p-12 md:p-20">
          <h1 className="text-6xl md:text-7xl text-white my-20 text-center">
            { title }
          </h1>
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
  );
};

export default TopBanner;
