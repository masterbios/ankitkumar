import React from 'react';
import { Section } from '../styles';
import { SkillsGrid, SkillCard } from '../Cards';
import { skillsData } from '../../../data/skills';

const SkillsSection = () => {
  return (
    <Section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2>Skills ⚡</h2>
      <SkillsGrid>
        {skillsData.map((category, index) => (
          <SkillCard key={index} whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
            <h3>{category.category}</h3>
            <ul>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>
                  <img src={skill.logo} alt={skill.name} />
                  {skill.name}
                </li>
              ))}
            </ul>
          </SkillCard>
        ))}
      </SkillsGrid>
    </Section>
  );
};

export default SkillsSection;
