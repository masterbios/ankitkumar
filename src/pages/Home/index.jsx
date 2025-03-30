import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMediumM } from 'react-icons/fa';
import {
  PageWrapper,
  HomeContainer,
  AboutContainer,
  Content,
  TextContent,
  SocialLinks,
  SocialIcon,
  ImageContainer,
} from './styles';
import ExperienceSection from '../../components/home/sections/ExperienceSection';
import SkillsSection from '../../components/home/sections/SkillsSection';
import AchievementsSection from '../../components/home/sections/AchievementsSection';
import ResponsibilitiesSection from '../../components/home/sections/ResponsibilitiesSection';
import EducationSection from '../../components/home/sections/EducationSection';

const Home = () => {
  return (
    <PageWrapper>
      <HomeContainer>
        <Content>
          <TextContent>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi, I'm Ankit Kumar
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Full Stack Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I create beautiful and functional web applications using modern technologies.
              Passionate about building user-friendly experiences and solving complex problems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <SocialLinks>
                <SocialIcon
                  href="https://github.com/masterbios"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </SocialIcon>
                <SocialIcon
                  href="https://www.linkedin.com/in/ankit-kumar-97b301158/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </SocialIcon>
                <SocialIcon
                  href="https://medium.com/@ankitkp88534"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaMediumM />
                </SocialIcon>
              </SocialLinks>
            </motion.div>
          </TextContent>
          <ImageContainer>
            <motion.img
              src="/ankitkumar/profile.jpg"
              alt="Ankit Kumar"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </ImageContainer>
        </Content>
      </HomeContainer>
      <AboutContainer>
        <ExperienceSection />
        <SkillsSection />
        <AchievementsSection />
        <ResponsibilitiesSection />
        <EducationSection />
      </AboutContainer>
    </PageWrapper>
  );
};

export default Home;
