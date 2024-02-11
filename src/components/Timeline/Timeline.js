import React from "react";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

import "./Timeline.css";

import { Typography } from "@mui/material";

const CustomTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className={"timeline"}>
      {/* Iteam Header */}
      <TimelineItem className={"timeline_firstItem"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_dot_header"}>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={"timeline_header"}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {children}
    </Timeline>
  );
};

export const CustomTimelineSeparator = () => (
  <TimelineSeparator className={"separator_padding"}>
    <TimelineDot variant={"outlined"} className={"timeline_dot"} />
    <TimelineConnector />
  </TimelineSeparator>
);

export default CustomTimeline;
