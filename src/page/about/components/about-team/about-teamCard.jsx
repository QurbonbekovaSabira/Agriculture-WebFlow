import React from "react";
import { AboutTwitterIcon } from "../../../../assets/icon/about-twitter-icon";
import { AboutInstagramIcon } from "../../../../assets/icon/about-instagram-icon";
import { AboutFacebookIcon } from "../../../../assets/icon/about-facebook-icon";
export const AboutTeamCard = ({
  instagram,
  facebook,
  twitter,
  name,
  job,
  img,
}) => {
  return (
    <div className="hover:shadow-shark-fin rounded-2xl bg-doctor transition-all duration-500 hover:bg-white hover:shadow-xl">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="px-[28px] py-[35px]">
        <p className="mb-[2px] text-2xl font-black text-primary">{name}</p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-normal text-secondary">{job}</p>
          <div className="flex items-center gap-[17px]">
            {instagram ? (
              <a href={instagram}>
                <AboutInstagramIcon />
              </a>
            ) : (
              ""
            )}
            {facebook ? (
              <a href={facebook}>
                <AboutFacebookIcon />
              </a>
            ) : (
              ""
            )}
            {twitter ? (
              <a href={twitter}>
                <AboutTwitterIcon />
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
