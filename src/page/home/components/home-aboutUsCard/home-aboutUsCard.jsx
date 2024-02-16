import React from "react";

export const HomeAboutUsCard = ({ icon: Icon, text, title }) => {
  return (
    <div className="flex items-center gap-[20px]">
      <div>
        <Icon />
      </div>
      <div>
        <p className="mb-[7px] text-2xl font-extrabold text-primary">{title}</p>
        <p className="text-lg font-normal text-city-rain">{text}</p>
      </div>
    </div>
  );
};
