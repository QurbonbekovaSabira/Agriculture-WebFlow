import React from "react";

export const HomeOrganicCard = ({ img, text }) => {
  return (
    <div
      className={`px-[150px] py-[250px] ${img} bg-cover bg-center text-center`}
    >
      <h2 className="inline-block whitespace-nowrap rounded-[20px] bg-white px-[83px] py-[33px] text-center text-xl font-medium text-primary">
        {text}
      </h2>
    </div>
  );
};
