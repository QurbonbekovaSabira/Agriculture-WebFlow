import React from "react";

export const HomeEcoText = ({ text, title }) => {
  return (
    <div>
      <p className="mb-[7px] text-2xl font-medium text-primary">{title}</p>
      <p className="text-lg font-normal text-city-rain">{text}</p>
    </div>
  );
};
