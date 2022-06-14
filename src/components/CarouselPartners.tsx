import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LogoDemo from "../assets/img/logo-demo.png";
import Slider from "react-slick";
import usePartner from "../hooks/usePartner";
const CarouselPartners = () => {
  const { partners } = usePartner();

  let settings = {
    dots: true,
    infinite: true,
    speed: 200,
    autoplay:true,
    slidesToShow: partners.length<=2 ? partners.length : 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (partners.length < 1) {
    return (
      <Slider {...settings}>
        <div>
          <img src={LogoDemo} alt="logos" loading="lazy" />
        </div>
        <div>
          <img src={LogoDemo} alt="logos" loading="lazy" />
        </div>
        <div>
          <img src={LogoDemo} alt="logos" loading="lazy" />
        </div>
        <div>
          <img src={LogoDemo} alt="logos" loading="lazy" />
        </div>
      </Slider>
    );
  }

  return (
    <Slider {...settings}>
      {partners.length >= 1 &&
        partners?.map((partner, index) => (
          <div key={index}>
            <div className="p-4">
              <img className="object-fill w-[300px] h-[200px] md:w-[300px] md:h-[180px]" src={partner.partner_image} alt="logos" loading="lazy" />
            </div>
          </div>
        ))}
    </Slider>
  );
};

export default CarouselPartners;
