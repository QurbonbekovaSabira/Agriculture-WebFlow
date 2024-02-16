import React from "react";
import { StarsIcon } from "../../../../assets/icon/stars-icon";
export const HomeTestCard = ({ text, name, img, type }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img className="mb-[20px] w-full max-w-[115px]" src={img} alt={name} />
      <div className="mb-[25px]">
        <StarsIcon />
      </div>
      <p className="mx-auto mb-[20px] w-full max-w-[60%] text-center text-lg font-normal text-city-rain">
        {text}
      </p>
      <p className="text-2xl font-semibold text-primary">{name}</p>
      <p className="text-base font-normal text-city-rain">{type}</p>
    </div>
  );
};
