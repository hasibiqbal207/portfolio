import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Description,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
  CardContainer,
} from "./styles";
import ProjectCard from "../card/ProjectCard";
import { projects } from "../../data/project";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  const renderToggleButton = (value, label) => (
    <ToggleButton active={toggle === value} onClick={() => setToggle(value)}>
      {label}
    </ToggleButton>
  );

  const filteredProjects =
    toggle === "all"
      ? projects
      : projects.filter((item) => item.category === toggle);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Description>
          Scroll down to explore some of my diverse projects, primarily focused
          on web applications.
        </Description>
        <ToggleButtonGroup>
          {renderToggleButton("all", "All")}
          <Divider />
          {renderToggleButton("web app", "WEB APP'S")}
        </ToggleButtonGroup>
        <CardContainer>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
