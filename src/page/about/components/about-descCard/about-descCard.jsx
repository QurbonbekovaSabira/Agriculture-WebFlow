import React from "react";
import { DoteIcon } from "../../../../assets/icon/dote-icon";
export const AboutDescCard = ({ desc, text }) => {
  return (
    <div className="flex  max-w-[80%] flex-col gap-[12px]">
      <div className="bg-coronation flex max-w-[340px] items-center gap-[7px] rounded-[49px] py-[29px] pl-[27px] pr-[91px]">
        <DoteIcon />
        <a href="#" className="text-xl font-medium text-primary">
          {desc}
        </a>
      </div>
      <p className="ml-[60px] text-lg font-normal text-city-rain">{text}</p>
    </div>
  );
};
