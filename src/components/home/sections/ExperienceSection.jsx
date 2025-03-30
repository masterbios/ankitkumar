import { Section } from '../styles';
import { ExperienceCard } from '../Cards';
import { experienceData } from '../../../data/experience';
const ExperienceSection = () => {
  return (
    <Section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2>Experience 💼</h2>
      {experienceData.map((experience, index) => (
        <ExperienceCard key={index} whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
          <div className="header">
            <div className="company">
              {experience.company} | {experience.position}
            </div>
            <div className="duration">{experience.duration}</div>
          </div>
          <ul>
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
          <div className="tech-stack">
            <div className="stack-title">Tech Stack:</div>
            <div className="stack-items">
              {experience.techStack.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </div>
        </ExperienceCard>
      ))}
    </Section>
  );
};

export default ExperienceSection;
