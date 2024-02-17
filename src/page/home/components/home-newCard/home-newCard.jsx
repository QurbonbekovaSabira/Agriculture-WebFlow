import React from "react";
import { UserIcon } from "../../../../assets/icon/userIcon";
import { Button } from "../../../../components/button";
import { ArrowVectorLeftIcon } from "../../../../assets/icon/arrowVectorLeft-icon";
export const HomenewCard = ({ day, title, text, bg, name }) => {
  return (
    <div
      className={` w-full max-w-[633px] rounded-[30px] px-[335px] py-[260px] ${bg} relative bg-no-repeat`}
    >
      <p className="absolute left-[32px] top-[43px] inline-block w-[82px] flex-wrap rounded-full bg-white px-[23px] py-[15px] text-center text-xl font-black text-primary">
        {day}
      </p>
      <div className="shadow-moon-landing absolute bottom-[-80px]  left-[50%] translate-x-[-50%] rounded-[31px] bg-white px-[57px] pb-[60px] pt-[46px] shadow-lg transition-all  duration-300 hover:scale-95">
        <div className="mb-[15px] flex items-center gap-[8px]">
          <UserIcon />
          <p className="text-lg font-normal text-primary">{name}</p>
        </div>
        <p className="mb-[2px] whitespace-nowrap text-2xl font-black text-primary">
          {title}
        </p>
        <p className="mb-[15px] text-lg font-normal text-city-rain">{text}</p>
        <Button
          beforeIcon={ArrowVectorLeftIcon}
          type="button"
          variant="secondary"
        >
          Read More
        </Button>
      </div>
    </div>
  );
};
