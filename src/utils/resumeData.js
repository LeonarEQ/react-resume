import React from "react";
//import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

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

  about:
    "Soy desarrollador web capaz de construir una presencia web desde cero, desde el concepto, el análisis de funcionalidades, diseño del wireframe, la maquetación, sus estilos y la programación tanto en el backend como en el frontend hasta la puesta en producción, siempre busco crear código limpio y eficiente, aplico las mejores prácticas actuales en el desarrollo siempre documentando el proceso. Aprendo rápido, me esfuerzo mucho y sé trabajar en equipo.",
};

export default personalInfo;
