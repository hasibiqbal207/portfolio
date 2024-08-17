import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";

import {
  Container,
  Wrapper,
  Image,
  Title,
  Date,
  Tags,
  Tag,
  Desc,
  Label,
  Members,
  Member,
  MemberImage,
  MemberName,
  ButtonGroup,
  Button,
} from "./styles";

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Image src={project?.image} />
          <Title>{project?.title}</Title>
          <Date>{project.date}</Date>
          <Tags>
            {project?.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>
          {project.member && (
            <>
              <Label>Members</Label>
              <Members>
                {project?.member.map((member) => (
                  <Member key={member.name}>
                    <MemberImage src={member.img} />
                    <MemberName>{member.name}</MemberName>
                    <a
                      href={member.github}
                      target="new"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <GitHub />
                    </a>
                    <a
                      href={member.linkedin}
                      target="new"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <LinkedIn />
                    </a>
                  </Member>
                ))}
              </Members>
            </>
          )}
          <ButtonGroup>
            <Button dull href={project?.github} target="new">
              View Code
            </Button>
            {project?.webapp && <Button href={project?.webapp} target="new">
              View Live App
            </Button>}
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetails;
