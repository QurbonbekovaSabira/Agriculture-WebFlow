import clsx from "clsx";
import React from "react";

export const Input = ({ placeholder, type, className, variant }) => {
  return (
    <input
      placeholder={placeholder}
      aria-label={placeholder}
      type={type}
      className={clsx(
        "outline-none,border-none",
        {
          "outline-moon-landing rounded-2xl bg-white px-[23px] py-[31px] text-lg font-normal text-dhūsar-grey":
            variant === "primary",
        },
        {
          "rounded-[36px] bg-dr-white py-[21px] pl-[23px] pr-[80px] text-lg font-normal text-secondary outline-secondary":
            variant === "secondary",
        },
        className,
      )}
    ></input>
  );
};
