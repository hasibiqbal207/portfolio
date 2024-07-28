import React, { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  TimelineSection,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
} from "./styles.js";

import { education } from "../../data/education.js";
import { certification } from "../../data/certification.js";

import EducationCard from "../card/EducationCard.jsx";
import CertificationCard from "../card/CertificationCard.jsx";

const Academics = () => {
  const [toggle, setToggle] = useState("education");

  const renderToggleButton = (value, label) => (
    <>
      <ToggleButton active={toggle === value} onClick={() => setToggle(value)}>
        {label}
      </ToggleButton>
      <Divider />
    </>
  );

  let filtereSection;
  if (toggle === "education") {
    filtereSection = education.filter((item) => item.category === toggle);
  } else if (toggle === "certification") {
    filtereSection = certification.filter((item) => item.category === toggle);
  }

  return (
    <Container id="academics">
      <Wrapper>
        <Title>Academic Achievements</Title>
        <Desc>
          Here is a list of my academic achievements and certifications.
        </Desc>

        <ToggleButtonGroup>
          {renderToggleButton("education", "Education")}
          {renderToggleButton("certification", "Certifications")}
        </ToggleButtonGroup>

        <TimelineSection>
          <Timeline>
            {toggle === "education" &&
              filtereSection.map((education) => (
                <TimelineItem key={education.id}>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <EducationCard education={education} />
                  </TimelineContent>
                </TimelineItem>
              ))}

            {toggle === "certification" &&
              filtereSection.map((certification) => (
                <TimelineItem key={certification.id}>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <CertificationCard certification={certification} />
                  </TimelineContent>
                </TimelineItem>
              ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Academics;
