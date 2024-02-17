import React from "react";
import clsx from "clsx";
export const Button = ({
  children,
  type,
  variant,
  beforeIcon: BeforeIcon,
  afterIcon: AfterIcon,
  classname,
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "flex items-center gap-[10px] rounded-2xl border-none px-[39px] py-[28px] text-xl font-bold",
        {
          "bg-primary  text-white": variant === "primary",
        },
        {
          "bg-yellow  text-primary ": variant === "secondary",
        },
        {
          "border border-solid border-primary text-primary":
            variant === "default",
        },
        {
          "bg-heavy-sugar px-[75px] py-[23px] text-primary":
            variant === "white",
        },
        classname,
      )}
    >
      {children}
      {BeforeIcon && (
        <span className="flex justify-center rounded-full bg-endless-sea p-[6px]">
          <BeforeIcon />
        </span>
      )}
    </button>
  );
};
