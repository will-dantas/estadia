import React from "react";

const Footer = () => {
  return (
    <div className="bg-walterWhite pt-5 pl-5 pr-5 justify-center flex flex-col items-center mt-10">
      <div className="p-4">
        <h1 className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block">
          <h1 className="relative text-white text-xl">estadia</h1>
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="text-sm font-medium mt-1 text-primaryDarker">Vamos criar memórias incriveis!</p>
      </div>
      <span className="w-full border-t-2 border-grayLighter mt-6"></span>
      <div className="flex justify-between items-center p-4 w-full">
        <small>© estadia. Todos os direitos reservados.</small>
        <small className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gray-500 relative inline-block">
          <small className="relative text-white text-[12px]">estadia</small>
        </small>
      </div>
    </div>
  );
};

export default Footer;
