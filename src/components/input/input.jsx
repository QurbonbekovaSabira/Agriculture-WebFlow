import clsx from "clsx";
import React from "react";

export const Input = ({ placeholder, type, className, variant }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={clsx(
        "outline-none,border-none",
        {
          "text-dhūsar-grey bg-white px-[23px] py-[31px] text-lg font-normal":
            variant === "primary",
        },
        {
          "bg-dr-white rounded-[36px] py-[21px] pl-[23px] pr-[80px] text-lg font-normal text-secondary outline-secondary":
            variant === "secondary",
        },
        className,
      )}
    ></input>
  );
};
