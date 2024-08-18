import React from "react";
import { skillTypes } from "../../data/skill.js";

import {
  Container,
  Wrapper,
  Title,
  Description,
  SkillContainer,
  SkillCard,
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
        <Description>
          Here are some of my skills on which I have been working on
        </Description>

        <SkillContainer>
          {skillTypes.map((skillByType) => (
            <SkillCard key={skillByType.id}>
              <SkillTitle>{skillByType.title}</SkillTitle>
              <SkillList>
                {skillByType.skills.map((skill) => (
                  <SkillItem key={skill.id}>
                    <SkillImage src={skill.image} />
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
