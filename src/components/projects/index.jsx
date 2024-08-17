import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
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
    <>
      <ToggleButton active={toggle === value} onClick={() => setToggle(value)}>
        {label}
      </ToggleButton>
    </>
  );

  const filteredProjects =
    toggle === "all"
      ? projects
      : projects.filter((item) => item.category === toggle);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
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
