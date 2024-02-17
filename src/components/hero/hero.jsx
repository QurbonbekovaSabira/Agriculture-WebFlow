import React from "react";

export const Hero = ({ text, img }) => {
  return (
    <section className={`py-[184px] ${img} bg-cover bg-center bg-no-repeat`}>
      <h2 className="text-center text-[70px] font-black text-primary">
        {text}
      </h2>
    </section>
  );
};
