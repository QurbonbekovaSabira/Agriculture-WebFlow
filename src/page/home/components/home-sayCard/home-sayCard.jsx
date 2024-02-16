import React from "react";

export const HomeSayCard = ({ text, title }) => {
  return (
    <div className="h-[211px] w-full max-w-[211px] overflow-hidden rounded-full  border-[5px] border-solid  border-secondary transition-all delay-300 hover:scale-[1.2]">
      <div className="bg-beluga boder-[7px] grow border-solid border-white py-[50px]">
        <p className="text-center text-[50px] font-black text-primary">
          {text}
        </p>
        <p className="text-center text-lg font-semibold text-primary">
          {title}/
        </p>
      </div>
    </div>
  );
};
