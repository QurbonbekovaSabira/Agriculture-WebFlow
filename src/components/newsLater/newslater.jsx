import React from "react";
import { Input } from "../input";
import { Button } from "../button";
export const Newslater = () => {
  return (
    <section className=" pb-[117px] pt-[141px]">
      <div className="container grid grid-cols-2 items-center  gap-[80px]  rounded-[30px] bg-[url(./assets/img/newslaterBg.png)] bg-cover bg-no-repeat px-[75px] py-[115px]">
        <h2 className="max-w-[52%] text-[50px] font-black text-white">
          Subscribe to our Newsletter
        </h2>
        <div className="flex  grow items-center gap-[6px]">
          <Input
            className="w-full max-w-[345px] grow"
            placeholder="Your Email Address"
            variant="primary"
          />
          <Button
            classname="py-[33px] px-[47px]"
            variant="primary"
            type="button"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};
