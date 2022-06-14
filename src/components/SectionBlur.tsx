const SectionBlur = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex justify-center item-center">
      <div className="w-full relative">
        <div className="bg-green-200 absolute bottom-0 -left-8 m-auto h-0 md:h-80 w-0 md:w-80 rounded-full filter blur-[100px]"></div>
        <div className="bg-green-200 absolute top-0 right-0 m-auto h-0 md:h-80 w-0 md:w-80  rounded-full filter blur-[100px]"></div>
        {children}
      </div>
    </div>
  );
};

export default SectionBlur;
