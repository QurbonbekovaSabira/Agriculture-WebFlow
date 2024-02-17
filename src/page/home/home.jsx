import React from "react";
import { Button } from "../../components/button";
import { ArrowVectorLeftIcon } from "../../assets/icon/arrowVectorLeft-icon";
import { homeaboutData } from "../../data/home-about-data";
import { HomeAboutCard } from "./components/home-aboutCard";
import aboutUs from "../../assets/img/home-aboutUs.png";
import { homeAboutUsData } from "../../data/home-aboutUs-data";
import { HomeAboutUsCard } from "./components/home-aboutUsCard";
import { productData } from "../../data/product";
import { ProudctCard } from "../../components/product-card";
import { homeTestiminoalData } from "../../data/home-testiminoalData";
import { HomeTestCard } from "./components/home-testCard";
import { homeSayData } from "../../data/home-say-data";
import { HomeSayCard } from "./components/home-sayCard";
import { homeEcoData } from "../../data/home-ecoData";
import { HomeEcoText } from "./components/home-ecoText";
import { homeOrganicData } from "../../data/home-organicData";
import { HomeOrganicCard } from "./components/home-organicCard";
export const Home = () => {
  return (
    <>
      <section className="bg-[url(./assets/img/home-heroBg.png)] bg-cover bg-center pb-[246px] pt-[258px]">
        <div className="container">
          <p className="font-Yellowtail mb-[8px] text-4xl font-normal text-secondary">
            100% Natural Food
          </p>
          <h1 className="mb-[23px] w-full max-w-[530px] text-[70px] font-black text-primary">
            Choose the best healthier way of life
          </h1>
          <Button
            type="button"
            variant="secondary"
            beforeIcon={ArrowVectorLeftIcon}
          >
            Explore Now
          </Button>
        </div>
      </section>
      <section className="pb-[150px] pt-[145px]">
        <div className="container grid grid-cols-2 items-center gap-[20px]">
          {homeaboutData?.map((item) => (
            <HomeAboutCard key={item.id} {...item} />
          ))}
        </div>
      </section>
      <section className="bg-doctor pb-[113px] pt-[86px]">
        <div className="container grid grid-cols-2 items-center">
          <div>
            <img src={aboutUs} alt="img" />
          </div>
          <div>
            <p className="font-Yellowtail mb-[8px] text-4xl font-normal text-secondary">
              About Us
            </p>
            <h2 className="mb-[14px] w-full max-w-[90%] text-5xl font-black text-primary">
              We Believe in Working Accredited Farmers
            </h2>
            <p className="mb-[48px] w-full max-w-[85%] text-lg font-normal text-city-rain">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="mb-[48px] flex max-w-[70%] flex-col gap-[35px]">
              {homeAboutUsData?.map((item) => (
                <HomeAboutUsCard key={item.id} {...item} />
              ))}
            </div>
            <Button
              type="button"
              variant="primary"
              beforeIcon={ArrowVectorLeftIcon}
            >
              Shop Now
            </Button>{" "}
          </div>
        </div>
      </section>
      <section className="pb-[200px] pt-[176px]">
        <div className="container">
          <p className="font-Yellowtail mb-[8px] text-center text-4xl text-secondary">
            Categories
          </p>
          <h2 className="mb-[40px] text-center text-5xl font-bold text-primary">
            Our Products
          </h2>
          <div className="mb-[122px] flex flex-wrap justify-center gap-[20px]">
            {productData?.slice(0, 8).map((item) => (
              <ProudctCard key={item.id} {...item} />
            ))}
          </div>
          <div className="flex justify-center">
            <Button
              type="button"
              variant="primary"
              beforeIcon={ArrowVectorLeftIcon}
            >
              Load More
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-[url(./assets/img/home-testeminialBg.png)] bg-cover py-[164px]">
        <div className="container ">
          <p className="font-Yellowtail mb-[8px] text-center text-4xl text-secondary">
            Testimonial
          </p>
          <h2 className="mb-[51px] text-center text-5xl font-bold text-primary">
            What Our Customer Saying?
          </h2>
          <div className=" mb-[100px]">
            {homeTestiminoalData?.slice(0, 1).map((item) => (
              <HomeTestCard key={item.id} {...item} />
            ))}
          </div>
          <span className="border-christmas-silver mb-[100px] block border-b border-solid"></span>
          <div className="flex items-center justify-evenly">
            {homeSayData?.map((item) => (
              <HomeSayCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-primary py-[200px]">
        <div className="container">
          <p className="font-Yellowtail mb-[8px] text-4xl font-normal text-secondary">
            Offer
          </p>
          <div className="mb-[60px]  flex items-center justify-between">
            <h2 className=" text-5xl font-bold text-white">
              We Offer Organic For You
            </h2>
            <Button
              type="button"
              variant="secondary"
              beforeIcon={ArrowVectorLeftIcon}
            >
              View All Product
            </Button>
          </div>
          <div className="flex justify-between">
            {productData.slice(12, 16).map((item) => (
              <ProudctCard {...item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[url(./assets/img/home-eco.png)] bg-left bg-no-repeat py-[100px]">
        <div className="container ">
          <div className="ml-auto mr-auto w-full max-w-[48%]  rounded-l-[30px] bg-white px-[89px] py-[77px]">
            <p className="font-Yellowtail mb-[8px] text-4xl font-normal text-secondary">
              Eco Friendly
            </p>
            <h2 className=" mb-[35px] text-5xl font-bold text-primary">
              Econis is a Friendly Organic Store
            </h2>
            <div className="flex flex-col gap-[35px]">
              {homeEcoData?.map((item) => (
                <HomeEcoText key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-peaceful-rain overflow-hidden py-[187px]">
        <div className=" grid grid-cols-3 items-center gap-[42px]">
          {homeOrganicData?.map((item) => (
            <HomeOrganicCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>
  );
};
