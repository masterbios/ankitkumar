import { Section } from '../styles';
import { ResponsibilityCard } from '../Cards';
import { positionOfResponsibilityData } from '../../../data/positionOfResponsibility';

const ResponsibilitiesSection = () => {
  return (
    <Section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <h2>Positions of Responsibility 👥</h2>
      {positionOfResponsibilityData.map((responsibility, index) => (
        <ResponsibilityCard key={index} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <div className="content">
            <h3 data-icon={responsibility.icon}>{responsibility.position}</h3>
            <ul>
              <li>{responsibility.description}</li>
            </ul>
          </div>
        </ResponsibilityCard>
      ))}
    </Section>
  );
};

export default ResponsibilitiesSection;
