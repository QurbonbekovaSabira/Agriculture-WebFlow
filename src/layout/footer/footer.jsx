import React from "react";
import logo from "../../assets/img/logo.svg";
import { InstagramIcon } from "../../assets/icon/instagram-icon";
import { FacebookIcon } from "../../assets/icon/facebook-icon";
import { TwitterIcon } from "../../assets/icon/twitter-icon";
import { PIcon } from "../../assets/icon/P-icon";
export const Footer = () => {
  return (
    <>
      <div className=" container flex grow justify-center gap-[35px]  pb-[100px] pt-[48px]">
        <div className=" border-disco-ball-light max-w-[30%] grow border-r border-solid pr-[50px] text-right">
          <p className="mb-[32px] text-[30px]  font-semibold text-primary">
            Contact Us
          </p>
          <div className="mb-[25px]">
            <p className="textlg mb-[5px] font-semibold text-city-rain">
              Email
            </p>
            <a
              className="text-lg font-normal text-city-rain"
              href="mail:needhelp@Organia.com"
            >
              needhelp@Organia.com
            </a>
          </div>
          <div className="mb-[25px]">
            <p className="textlg mb-[5px] font-semibold text-city-rain">
              Phone
            </p>
            <a
              className="text-lg font-normal text-city-rain"
              href="tel:666 888 888"
            >
              666 888 888
            </a>
          </div>
          <div>
            <p className="textlg mb-[5px] font-semibold text-city-rain">
              Address
            </p>
            <a className="text-lg font-normal text-city-rain" href="#">
              88 road, borklyn street, USA
            </a>
          </div>
        </div>
        <div className="border-disco-ball-light max-w-[40%]  grow border-r border-solid pr-[50px]">
          <div className="flex justify-center">
            <img className="mb-[32px] " src={logo} alt="logo" />
          </div>
          <p className="mb-[49px] text-center text-lg font-normal text-city-rain">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing{" "}
          </p>
          <div className="flex items-center justify-center gap-[15px]">
            <a href="#">
              <InstagramIcon />
            </a>
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <TwitterIcon />
            </a>
            <a href="#">
              <PIcon />
            </a>
          </div>
        </div>
        <div className=" max-w-[30%]  grow  pr-[50px]">
          <p className="mb-[24px] text-[30px]  font-semibold text-primary">
            Utility Pages
          </p>
          <div className="flex flex-col gap-[26px]">
            <a className=" text-lg font-normal text-city-rain" href="#">
              Style Guide
            </a>
            <a className=" text-lg font-normal text-city-rain" href="#">
              404 Not Found
            </a>
            <a className=" text-lg font-normal text-city-rain" href="#">
              Password Protected
            </a>
            <a className=" text-lg font-normal text-city-rain" href="#">
              Licences
            </a>
            <a className=" text-lg font-normal text-city-rain" href="#">
              Changelog
            </a>
          </div>
        </div>
      </div>
      <span className="bg-disco-ball-light block h-[1px]"></span>
      <div className="flex items-center justify-center gap-[5px] pb-[22px] pt-[18px]">
        <p className="text-lg font-normal text-city-rain">
          Copyright <span className="font-semibold"> © Organick |</span>{" "}
        </p>

        <p className="text-lg font-normal text-city-rain">
          Designed by <span className="font-semibold">VictorFlow</span>
        </p>
        <p className="text-lg font-normal text-city-rain">
          Templates - Powered by <span className="font-semibold">Webflow</span>
        </p>
      </div>
    </>
  );
};
