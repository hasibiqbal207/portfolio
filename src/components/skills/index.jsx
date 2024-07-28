import React from "react";
import { skillTypes } from "../../data/skill.js";

import {
  Container,
  Wrapper,
  Title,
  Desc,
  SkillsContainer,
  Skill,
  SkillTitle,
  SkillList,
  SkillItem,
  SkillImage,
} from "./styles.js";
const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working on
        </Desc>
        <SkillsContainer>
          {skillTypes.map((skillType) => (
            <Skill key={skillType.id}>
              <SkillTitle>{skillType.title}</SkillTitle>
              <SkillList>
                {skillType.skills.map((skill) => (
                  <SkillItem key={skill.id}>
                    <SkillImage src={skill.image} />
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
