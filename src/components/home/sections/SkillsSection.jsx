import React from 'react';
import { Section } from '../styles';
import { SkillsGrid, SkillCard } from '../Cards';
import { skillLogos } from '../../../data/skillLogos';

const SkillsSection = () => {
  return (
    <Section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2>Skills ⚡</h2>
      <SkillsGrid>
        <SkillCard
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <h3>Frontend Development</h3>
          <ul>
            <li>
              <img src={skillLogos['react']} alt="React" />
              ReactJS
            </li>
            <li>
              <img src={skillLogos['typescript']} alt="TypeScript" />
              TypeScript
            </li>
            <li>
              <img src={skillLogos['javascript']} alt="JavaScript" />
              JavaScript
            </li>
            <li>
              <img src={skillLogos['html']} alt="HTML/CSS" />
              HTML/CSS
            </li>
            <li>
              <img src={skillLogos['bootstrap']} alt="Bootstrap" />
              Bootstrap
            </li>
            <li>
              <img src={skillLogos['tailwind']} alt="Tailwind CSS" />
              Tailwind CSS
            </li>
            <li>
              <img src={skillLogos['material-ui']} alt="Material UI" />
              Material UI
            </li>
            <li>
              <img src={skillLogos['redux']} alt="Redux" />
              Redux
            </li>
          </ul>
        </SkillCard>

        <SkillCard
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <h3>Backend Development</h3>
          <ul>
            <li>
              <img src={skillLogos['java']} alt="JAVA" />
              JAVA
            </li>
            <li>
              <img src={skillLogos['spring']} alt="Spring Boot" />
              Spring Boot
            </li>
            <li>
              <img src={skillLogos['nodejs']} alt="Node.js" />
              Node.js
            </li>
            <li>
              <img src={skillLogos['express']} alt="Express.js" />
              Express.js
            </li>
            <li>
              <img src={skillLogos['nextjs']} alt="Next.js" />
              Next.js
            </li>
          </ul>
        </SkillCard>

        <SkillCard
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <h3>Mobile Development</h3>
          <ul>
            <li>
              <img src={skillLogos['android']} alt="Android" />
              Android
            </li>
            <li>
              <img src={skillLogos['kotlin']} alt="Kotlin" />
              Kotlin
            </li>
            <li>
              <img src={skillLogos['react']} alt="React Native" />
              React Native
            </li>
          </ul>
        </SkillCard>

        <SkillCard
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <h3>Database</h3>
          <ul>
            <li>
              <img src={skillLogos['mysql']} alt="MySQL" />
              MySQL
            </li>
            <li>
              <img src={skillLogos['mongodb']} alt="MongoDB" />
              MongoDB
            </li>
            <li>
              <img src={skillLogos['firebase']} alt="Firebase" />
              Firebase
            </li>
          </ul>
        </SkillCard>

        <SkillCard
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <h3>DevOps & Tools</h3>
          <ul>
            <li>
              <img src={skillLogos['git']} alt="Git" />
              Git
            </li>
            <li>
              <img src={skillLogos['docker']} alt="Docker" />
              Docker
            </li>
            <li>
              <img src={skillLogos['aws']} alt="AWS" />
              AWS
            </li>
            <li>
              <img src={skillLogos['postman']} alt="Postman" />
              Postman
            </li>
            <li>
              <img src={skillLogos['jest']} alt="Jest" />
              Jest
            </li>
            <li>
              <img src={skillLogos['cypress']} alt="Cypress" />
              Cypress
            </li>
          </ul>
        </SkillCard>

        <SkillCard
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <h3>Design & Collaboration</h3>
          <ul>
            <li>
              <img src={skillLogos['figma']} alt="Figma" />
              Figma
            </li>
            <li>
              <img src={skillLogos['jira']} alt="Jira" />
              Jira
            </li>
            <li>
              <img src={skillLogos['confluence']} alt="Confluence" />
              Confluence
            </li>
          </ul>
        </SkillCard>
      </SkillsGrid>
    </Section>
  );
};

export default SkillsSection; 