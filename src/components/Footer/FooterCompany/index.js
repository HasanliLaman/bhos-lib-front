import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo-white.svg";
import instagramIcon from "../../../assets/images/icon-instagram.svg";
import facebookIcon from "../../../assets/images/icon-facebook.svg";
import linkedinIcon from "../../../assets/images/icon-linkedin.svg";
import twitterIcon from "../../../assets/images/icon-twitter.svg";
import StyleFooterCompany from "./style";

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
          <Link to="/">
            <img alt="facebook" src={facebookIcon} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img alt="twitter" src={twitterIcon} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img alt="instagram" src={instagramIcon} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img alt="linkedin" src={linkedinIcon} />
          </Link>
        </li>
      </ul>
    </StyleFooterCompany>
  );
};

export default FooterCompany;
