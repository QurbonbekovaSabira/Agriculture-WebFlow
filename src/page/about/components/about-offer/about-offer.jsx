import React from "react";

export const AboutOffer = ({ text, img }) => {
  return (
    <div className="group overflow-hidden">
      <div className="mb-[24px] w-full grow overflow-hidden rounded-[30px] ">
        <img
          className="transition-all duration-500 group-hover:scale-[1.1]"
          src={img}
          alt={text}
        />
      </div>
      <p className="text-center text-2xl font-medium text-white transition-all duration-500 group-hover:scale-[1.1]">
        {text}
      </p>
    </div>
  );
};
