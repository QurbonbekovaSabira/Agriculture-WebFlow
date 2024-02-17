import React from "react";
import { Hero } from "../../components/hero";
import { Newslater } from "../../components/newsLater";
import { ProudctCard } from "../../components/product-card";
import { productData } from "../../data/product";
export const Shop = () => {
  return (
    <>
      <Hero img="bg-shop-hero" text="Shop" />
      <section className="py-[90px]">
        <div className="container grid grid-cols-4 justify-center gap-x-[20px] gap-y-[40px]">
          {productData?.map((item) => (
            <ProudctCard key={item.id} {...item} />
          ))}
        </div>
      </section>
      <Newslater />
    </>
  );
};
