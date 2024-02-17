import React from "react";
import { Hero } from "../../components/hero";
import aboutBg from "../../assets/img/about.png";
import { aboutCardData } from "../../data/about-card-data";
import { AboutCard } from "./components/about-card";
import { ArrowVectorLeftIcon } from "../../assets/icon/arrowVectorLeft-icon";
import { Button } from "../../components/button";
import aboutChooseBg from "../../assets/img/about-choose.png";
import { AboutDescCard } from "./components/about-descCard";
import { aboutDescCardData } from "../../data/about-descCardData";
import { aboutContentData } from "../../data/about-contentData";
import { AboutContentCard } from "./components/about-contentCard";
import { AboutTeamCard } from "./components/about-team";
import { aboutTeamData } from "../../data/about-team-data";
import { AboutOffer } from "./components/about-offer";
import { aboutOfferData } from "../../data/about-offerData";
import { Newslater } from "../../components/newsLater";
export const About = () => {
  return (
    <>
      <Hero text="About" img="bg-about-hero" />
      <section className=" pb-[220px] pt-[163px]">
        <div className="container grid grid-cols-2 items-start gap-[80px]">
          <div>
            <img src={aboutBg} alt="food" />
          </div>
          <div className="max-w-[85%]">
            <p className="mb-[8px] font-Yellowtail text-4xl font-normal text-secondary">
              About Us
            </p>
            <h2 className="mb-[14px] max-w-[75%] text-[50px] font-black text-primary">
              We do Creative Things for Success
            </h2>
            <p className="mb-[20px] text-lg font-normal text-city-rain">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <p className="mb-[49px] text-lg font-normal text-city-rain">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="mb-[58px] flex items-center justify-between">
              {aboutCardData?.map((item) => (
                <AboutCard key={item.id} {...item} />
              ))}
            </div>
            <Button
              beforeIcon={ArrowVectorLeftIcon}
              type="button"
              variant="primary"
            >
              Explore More
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-doctor py-[190px]">
        <div className="container">
          <div className="mb-[90px] flex items-center justify-center gap-[51px]">
            <div className="max-w-[40%]">
              <p className="mb-[7px] font-Yellowtail text-4xl font-normal text-secondary">
                Why Choose us?
              </p>
              <h2 className="mb-[25px] text-[50px] font-black text-primary">
                We do not buy from the open market & traders.
              </h2>
              <p className="mb-[36px] text-lg font-normal text-city-rain">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard the 1500s, when
                an unknown
              </p>
              <div className="flex flex-col gap-[24px]">
                {aboutDescCardData?.map((item) => (
                  <AboutDescCard key={item.id} {...item} />
                ))}
              </div>
            </div>
            <div>
              <img
                src={aboutChooseBg}
                alt="We do not buy from the open market & traders."
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-[30px]">
            {aboutContentData?.map((item) => (
              <AboutContentCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="pb-[190px] pt-[177px]">
        <div className="container">
          <p className="text-center font-Yellowtail text-4xl font-normal text-secondary">
            Team
          </p>
          <h2 className="mb-[16px] text-center text-[50px] font-black text-primary">
            Our Organic Experts
          </h2>
          <p className="mx-auto mb-[42px] max-w-[50%] text-center text-lg font-normal text-city-rain">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className=" flex items-center justify-center gap-[37px]">
            {aboutTeamData?.map((item) => (
              <AboutTeamCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-primary py-[188px]">
        <div className="container">
          <p className="text-center font-Yellowtail text-4xl font-normal text-secondary">
            About Us
          </p>
          <h2 className="mb-[33px] text-center text-[50px] font-black text-white">
            What We Offer for You
          </h2>
          <div className="flex items-center justify-center gap-[21px]">
            {aboutOfferData?.map((item) => (
              <AboutOffer key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <Newslater />
    </>
  );
};
