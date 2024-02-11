import React from "react";

import "./Footer.css";
import { Typography } from "@mui/material";

import resumeData from '../../utils/resumeData'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
              <Typography className="footer_name">{ resumeData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Designed and Developed by{" "}
          <a href="/" target="_blank">
            Leonar Estupiñan
          </a>
          <br />
         
          <a href="https://leonar.dev" target="_blank">
            www.leonar.dev
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
