import useDonation from "../hooks/useDonation";

const Donations = () => {
  const { donationContent } = useDonation();
  return (
    <div className="flex justify-center">
      <div
        className="md:block bg-white py-10 px-10"
        dangerouslySetInnerHTML={{
          __html: donationContent.donation_description,
        }}
      />
    </div>
  );
};

export default Donations;
