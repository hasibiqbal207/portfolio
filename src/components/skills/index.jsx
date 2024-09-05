import React from "react";
import { skillTypes } from "../../data/skill.js";

import {
  Container,
  Wrapper,
  Title,
  Description,
  SubContainer,
  Card,
  SkillTitle,
  List,
  Item,
  Image,
} from "./styles.js";

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Description>
          Here are some of my skills on which I have been working on
        </Description>

        <SubContainer>
          {skillTypes.map((skillByType) => (
            <Card key={skillByType.id}>
              <SkillTitle>{skillByType.title}</SkillTitle>
              <List>
                {skillByType.skills.map((skill) => (
                  <Item key={skill.id}>
                    <Image src={skill.image} />
                    {skill.name}
                  </Item>
                ))}
              </List>
            </Card>
          ))}
        </SubContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
