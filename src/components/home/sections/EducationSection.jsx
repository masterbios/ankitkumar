import { Section } from '../styles';
import { EducationCard } from '../Cards';
import { educationData } from '../../../data/education';

const EducationSection = () => {
  return (
    <Section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <h2>Education 🎓</h2>
      {educationData.map((education, index) => (
        <EducationCard key={index} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <div className="content">
            <h3 data-icon={education.icon}>{education.school}</h3>
            <p>
              {education.degree} | {education.duration}
            </p>
            <p>{education.grade}</p>
          </div>
        </EducationCard>
      ))}
    </Section>
  );
};

export default EducationSection;
