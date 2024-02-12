import React from "react";
import { Grid, Typography } from "@mui/material";
import resumeData from "../../utils/resumeData";
import "./Resume.css";

const Resume = () => {
  return (
    <>
      {/* About me */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">{resumeData.about}</Typography>
        </Grid>
      </Grid>
      {/* Education and experiences */}
      <Grid container className="section"></Grid>
      {/* Services */}
      <Grid container className="section"></Grid>
      {/* Skills */}
      <Grid container className="section"></Grid>
      {/* Contact */}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
