import { Section } from '../styles';
import { ResponsibilityCard } from '../Cards';

const ResponsibilitiesSection = () => {
  return (
    <Section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <h2>Positions of Responsibility 👥</h2>
      <ResponsibilityCard
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="icon">👨‍🏫</div>
        <div className="content">
          <h3>Programming Mentor</h3>
          <p>Mentored school children through Codechef participating in ICPC for the first time.</p>
        </div>
      </ResponsibilityCard>

      <ResponsibilityCard
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="icon">👥</div>
        <div className="content">
          <h3>ACPC Programming Club</h3>
          <p>Founder & Member of ACPC Programming Club of my college (2017-2020).</p>
        </div>
      </ResponsibilityCard>

      <ResponsibilityCard
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="icon">🎓</div>
        <div className="content">
          <h3>Campus Ambassador</h3>
          <p>Acted as Campus ambassador for Interviewbit to help students prepare for Coding interviews.</p>
        </div>
      </ResponsibilityCard>

      <ResponsibilityCard
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="icon">🎪</div>
        <div className="content">
          <h3>Techfest Volunteer</h3>
          <p>Volunteered in College Annual Techfest to host various coding contests.</p>
        </div>
      </ResponsibilityCard>
    </Section>
  );
};

export default ResponsibilitiesSection; 