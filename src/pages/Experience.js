import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#7e7f83">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#7e7f83", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Wrocław, Wrocław
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Engineer's Degree
          </h4>
          <p>Applied Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2022"
          iconStyle={{ background: "#7e7f83", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Wrocław, Wrocław
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p>English Philology</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          iconStyle={{ background: "#7e7f83", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Science and Technology, Wrocław
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Master Engineer's Degree
          </h4>
          <p>Applied Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="09/2022 - 12/2022"
          iconStyle={{ background: "#d9c5b2", color: "#000" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Help Desk Specialist
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Wrocław
          </h4>
          <p>Implementing small changes to the website, customer service</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
