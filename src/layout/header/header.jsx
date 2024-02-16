import React from "react";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { InputHeader } from "./components/input-header/input-header";
import { CardIcon } from "../../assets/icon/card-icon";
export const Header = () => {
  return (
    <div className="container flex justify-between py-[69px]">
      <div className="flex items-center gap-[150px]">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <nav className="flex gap-[45px]">
          <Link className="text-xl font-bold text-primary" to="/">
            Home{" "}
          </Link>
          <Link className="text-xl font-bold text-primary" to="/about">
            About
          </Link>
          <Link className="text-xl font-bold text-primary">Pages</Link>
          <Link className="text-xl font-bold text-primary" to="./shop">
            Shop
          </Link>
          <Link className="text-xl font-bold text-primary">Projects</Link>
          <Link className="text-xl font-bold text-primary">News</Link>
        </nav>
      </div>
      <div className="flex items-center gap-[18px]">
        <InputHeader />
        <div className="border-christmas-silver flex items-center gap-[12px] rounded-[33px] border border-solid px-[6px] py-[5px]">
          <a
            href="#"
            className="inline-block rounded-full bg-primary px-[17px] py-[17px] text-white"
          >
            <CardIcon />
          </a>
          <p>Cart (0)</p>
        </div>
      </div>
    </div>
  );
};
