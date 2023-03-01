import React from "react";
import StyleFooterCompany from "./style";
import logo from "../../../assets/images/logo-white.svg";
import instagramIcon from "../../../assets/images/icon-instagram.svg";
import facebookIcon from "../../../assets/images/icon-facebook.svg";
import linkedinIcon from "../../../assets/images/icon-linkedin.svg";
import twitterIcon from "../../../assets/images/icon-twitter.svg";

const FooterCompany = () => {
  return (
    <StyleFooterCompany>
      <img alt="logo" src={logo} />
      <div>
        <p>1418 River Drive, Suite 35</p>
        <p>Cottonhall, CA 9622</p>
      </div>
      <ul>
        <li>
          <a href="">
            <img alt="facebook" src={facebookIcon} />
          </a>
        </li>
        <li>
          <a href="">
            <img alt="twitter" src={twitterIcon} />
          </a>
        </li>
        <li>
          <a href="">
            <img alt="instagram" src={instagramIcon} />
          </a>
        </li>
        <li>
          <a href="">
            <img alt="linkedin" src={linkedinIcon} />
          </a>
        </li>
      </ul>
    </StyleFooterCompany>
  );
};

export default FooterCompany;
