import React from "react";

import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import TelegramIcon from "@mui/icons-material/Telegram";
import "./Header.css";

const Header = (props) => {
  const pathName = props?.location?.pathname;

  return (
    <Navbar expand="lg" sticky="top" className="header">
      {/* Home link */}
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          {/*<HomeRounded />*/}
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          {/* Resume Link*/}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header_link_active" : "header_link"}
          >
            Resume page
          </Nav.Link>

          {/* Portfolio Link*/}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName == "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio Page
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(resumeData.socials).map((key, index) => (
            <a href={resumeData.socials[key].link} target="_blank" key={index}>
              {resumeData.socials[key].icon}
            </a>
          ))}

          <CustomButton text={"Hire Me"} icon={<TelegramIcon />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
