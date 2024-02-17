import React from "react";

export const AboutCard = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center gap-[15px]">
      <Icon />
      <p className="text-2xl font-medium text-primary">{text}</p>
    </div>
  );
};
