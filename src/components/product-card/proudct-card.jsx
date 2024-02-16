import React from "react";
import { StarsIcon } from "../../assets/icon/stars-icon";
import { Link } from "react-router-dom";

export const ProudctCard = ({ id, text, oldPrice, saleprice, desc, img }) => {
  return (
    <Link
      to={`/products/:${id}`}
      className="group relative max-w-[335px] grow overflow-hidden rounded-[30px] bg-doctor pt-[73px]"
    >
      <div className="mb-[8px] h-[324px] w-full overflow-hidden ">
        <img
          className="w-full transition-all  duration-700 group-hover:scale-[1.2]"
          src={img}
          alt={text}
        />
        <p className="absolute left-[30px] top-[30px] rounded-lg bg-primary px-[12px] py-[5px] text-base font-semibold text-white">
          {desc}
        </p>
      </div>
      <div className="px-[31px] pb-[17px]">
        <p className="mb-[13px] text-xl font-semibold text-primary">{text}</p>
        <span className="bg-silver-lake mb-[6px] block h-[1px] w-full"></span>
        <div className=" flex items-center justify-between">
          <div className="flex items-end gap-[8px]">
            <p className="text-fortress-grey text-base font-semibold">
              {oldPrice}
            </p>
            <p className="text-lg font-bold text-primary">{saleprice}</p>
          </div>
          <StarsIcon />
        </div>
      </div>
    </Link>
  );
};
