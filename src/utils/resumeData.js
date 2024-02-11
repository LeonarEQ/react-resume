import React from "react";
//import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const personalInfo = {
  name: "Leonar Estupiñan",
  title: "Full Stack JavaScript",
  email: "contacto@leonar.dev",
  movil: "(+34) 604 029 445",
  city: "Vigo",

  socials: {
    LinkedIn: {
      link: "https://www.linkedin.com/in/leonar-estupi%C3%B1an-qui%C3%B1onez/",
      text: "Leonar Estupiñan Quiñonez",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://github.com/LeonarEQ",
      text: "LeonarEQ",
      icon: <GitHubIcon />,
    },
  },
};

export default personalInfo;




/*import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default {
  name: "Leonar Estupiñan",
  title: "Full Stack JavaScript",
  email: "contacto@leonar.dev",
  movil: "(+34) 604 029 445",
  city: "Vigo",

  socials: {

    LinkedIn: {
      link: "https://www.linkedin.com/in/leonar-estupi%C3%B1an-qui%C3%B1onez/",
      text: "Leonar Estupiñan Quiñonez",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://github.com/LeonarEQ",
      text: "LeonarEQ",
      icon: <GitHubIcon />,
    },
  },
};*/
