import React from "react";

export const HomeOrganicCard = ({ img, text }) => {
  return (
    <div
      className={`px-[150px] py-[250px] transition-all duration-300 hover:scale-[1.05] ${img} bg-cover bg-center text-center`}
    >
      <a
        href="#"
        className="inline-block cursor-pointer whitespace-nowrap rounded-[20px] bg-white px-[83px] py-[33px] text-center text-xl font-medium text-primary"
      >
        {text}
      </a>
    </div>
  );
};
