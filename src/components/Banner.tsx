import bannerImage from "../assets/img/banner.jpg";
const Banner = ({
  children,
  className,
}: {
  children: JSX.Element;
  className: string;
}) => {
  return (
    <div className="w-full">
      <div
        className={className}
        style={{
          backgroundImage: "url('" + bannerImage + "')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Banner;
