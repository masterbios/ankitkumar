import { Section } from '../styles';
import { EducationCard } from '../Cards';

const EducationSection = () => {
  return (
    <Section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <h2>Education 🎓</h2>
      <EducationCard
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="icon">🏛️</div>
        <div className="content">
          <h3>A.P.J ABDUL KALAM TECHNICAL UNIVERSITY</h3>
          <p>B. Tech | 2016-2020</p>
          <p>CGPA: 8.23</p>
        </div>
      </EducationCard>

      <EducationCard
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="icon">🏫</div>
        <div className="content">
          <h3>A.P.S ACADEMY</h3>
          <p>XII, CBSE | 2014-2015</p>
          <p>Grade: 71.2 Percent</p>
        </div>
      </EducationCard>
    </Section>
  );
};

export default EducationSection; 