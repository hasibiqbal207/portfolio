import React, { useState } from "react";

import {
  Container,
  Wrapper,
  Title,
  Description,
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
        <Description>
          Here is a list of my academic achievements and certifications.
        </Description>

        <ToggleButtonGroup>
          {renderToggleButton("education", "Education")}
          <Divider />
          {renderToggleButton("certification", "Certifications")}
        </ToggleButtonGroup>

        {toggle === "education" &&
          filtereSection.map((education) => (
            <EducationCard education={education} key={education.id}/>
          ))}

        {toggle === "certification" &&
          filtereSection.map((certification) => (
            <CertificationCard certification={certification} key={certification.id}/>
          ))}
      </Wrapper>
    </Container>
  );
};

export default Academics;
