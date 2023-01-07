import React from "react";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href='https://pl.linkedin.com/in/natalia-krauze-14661b190' target='_blank'><LinkedInIcon /></a>
      <a href='mailto:natalia.krauze.1999@gmail.com' target='_blank'><EmailIcon /></a>
      <a href='https://github.com/natakra' target='_blank'><GithubIcon /></a>
      </div>
      <p> &copy; 2023 Natalia Krauze</p>
    </div>
  );
}

export default Footer;
