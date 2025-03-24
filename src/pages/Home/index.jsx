import { HomeContainer, Content, Title, Subtitle } from './styles';
import {
  AchievementsSection,
  ExperienceSection,
  SkillsSection,
  ResponsibilitiesSection,
} from '../../components/home/sections';

const Home = () => {
  return (
    <HomeContainer>
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ankit Kumar
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full Stack Developer
        </Subtitle>
        <ExperienceSection />
        <SkillsSection />
        <AchievementsSection />
        <ResponsibilitiesSection />
      </Content>
    </HomeContainer>
  );
};

export default Home;
