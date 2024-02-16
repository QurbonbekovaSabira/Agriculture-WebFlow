import clsx from "clsx";
import React from "react";

export const HomeAboutCard = ({ desc, title, img, variant }) => {
  return (
    <div
      className={`${img} w-full rounded-[30px] bg-cover bg-center py-[110px] pl-[45px] `}
    >
      <p
        className={clsx(
          "font-Yellowtail mb-[5px] text-4xl font-normal",
          { "text-white": variant === "white" },
          { "text-secondary": variant === "green" },
        )}
      >
        {desc}
      </p>
      <p
        className={clsx(
          "w-full max-w-[42%] text-5xl font-extrabold",
          { "text-white": variant === "white" },
          { "text-primary": variant === "green" },
        )}
      >
        {title}
      </p>
    </div>
  );
};
