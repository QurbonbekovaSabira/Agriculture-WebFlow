import React from "react";

export const AboutContentCard = ({ icon: Icon, title, text }) => {
  return (
    <div className="hover:shadow-shark-fin flex max-w-[277px] flex-col justify-center gap-[14px] rounded-[30px] bg-white px-[38px] pb-[20px] pt-[50px] text-center transition-all duration-500 hover:bg-white hover:shadow-xl">
      <div className="mb-[5px] flex justify-center">
        <Icon />
      </div>
      <p className="text-2xl font-black text-primary">{title}</p>
      <p className="text-lg font-normal text-city-rain">{text}</p>
    </div>
  );
};
