import React from "react";
import { Home } from "../page/home";
import { About } from "../page/about";
import { Shop } from "../page/shop";
import { ShopSingle } from "../page/shop-single";
import { NotFound } from "../page/not-found";
export const main_Routes = [
  {
    component: <Home />,
  },
  {
    component: <About />,
    path: "about",
  },
  {
    component: <Shop />,
    path: "shop",
  },
  {
    component: <NotFound />,
    path: "*",
  },
];
