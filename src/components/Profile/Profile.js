import React from "react";

import { Typography } from '@mui/material';
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import resumeData from "../../utils/resumeData";
import { TimelineItem, TimelineContent } from '@mui/lab';
import CustomButton from "../Button/Button";
import GetAppIcon from '@mui/icons-material/GetApp';

import "./Profile.css";

const CustomTimelineItem = ({ title, text, link }) => (

  
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {""}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

console.log(resumeData);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={require("../../assets/images/img_profile.jpg")} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />

          {Object.keys(resumeData.socials).map((key, index) => (
            <CustomTimelineItem
            key={index} // Asigna una clave única para cada elemento
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <div className="button_container" style={{ display: "flex" }}>
          <CustomButton text={"Donwload CV"} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
