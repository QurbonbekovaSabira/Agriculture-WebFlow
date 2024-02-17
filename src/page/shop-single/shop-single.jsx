import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../../data/product";
import { Hero } from "../../components/hero";
import { Newslater } from "../../components/newsLater";
import { StarsIcon } from "../../assets/icon/stars-icon";
import { Button } from "../../components/button";
import { ArrowVectorLeftIcon } from "../../assets/icon/arrowVectorLeft-icon";
import { ProudctCard } from "../../components/product-card";
export const ShopSingle = () => {
  let { id } = useParams();

  let product = productData?.find((item) => item.id === parseInt(id));
  console.log(product);
  let advertisingProduct = productData.slice(
    parseInt(id) + 1,
    parseInt(id) + 5,
  );
  return (
    <>
      <Hero img="bg-shop-single" text="Shop Single" />
      <section className="pb-[140px] pt-[114px]">
        <div className="container">
          <div className=" mb-[72px] grid grid-cols-2 items-center gap-[83px]">
            <div className="relative flex h-[600px] max-w-[600px] grow justify-center  rounded-[30px] bg-doctor">
              <img src={product.img2} alt={product.desc} />
              <span className="absolute left-[35px] top-[47px] block rounded-lg bg-primary px-[12px] py-[5px] text-base font-medium text-white">
                {product.desc}
              </span>
            </div>
            <div>
              <h2 className="mb-[10px] text-[40px] font-semibold text-primary">
                {product.text}
              </h2>
              <div className="mb-[10px]">
                <StarsIcon />
              </div>
              <div className="mb-[27px] flex items-center gap-[9px]">
                <p className="text-xl font-semibold text-fortress-grey line-through">
                  ${product.oldPrice}
                </p>
                <p className="text-2xl font-bold text-primary">
                  ${product.saleprice}
                </p>
              </div>
              <p className="mb-[35px] max-w-[80%] text-lg  font-normal text-city-rain">
                {product.composition}
              </p>
              <div className="flex items-center gap-[20px]">
                <p className="text-xl font-bold text-primary">Quantity :</p>
                <p className="rounded-2xl border border-solid border-primary px-[61px] py-[28px] text-xl font-bold">
                  1
                </p>
                <Button
                  beforeIcon={ArrowVectorLeftIcon}
                  type="button"
                  variant="primary"
                >
                  {" "}
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
          <div className="mb-[27px] flex items-center justify-center gap-[20px]">
            <Button
              type="button"
              variant="primary"
              classname="pt-[23px] px-[57px]"
            >
              Product Description
            </Button>
            <Button type="button" variant="white">
              Additional Info
            </Button>
          </div>
          <p className="mx-auto max-w-[80%] text-center text-lg font-normal text-city-rain">
            {product.information}
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="mb-[40px] text-center text-[50px] font-black text-primary">
            Related Products
          </h2>
          <div className="flex items-center justify-center gap-[20px]">
            {advertisingProduct?.map((item) => (
              <ProudctCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <Newslater />
    </>
  );
};
