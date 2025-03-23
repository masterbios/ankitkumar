import { Section } from '../styles';
import { ExperienceCard } from '../Cards';

const ExperienceSection = () => {
  return (
    <Section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2>Experience 💼</h2>
      <ExperienceCard
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <div className="header">
          <div className="company">Indeed.com | Software Engineer II</div>
          <div className="duration">October 2021 - Present</div>
        </div>
        <ul>
          <li>Working in SEG India team focusing on enhancing Indian job seeker experience, including job applications, matching, re-engagement, localization, etc. Collaborating with internal teams to integrate and improve features based on job seeker feedback and UX research.</li>
          <li>Executed multiple A/B tests on various Indeed platforms to enhance Hindi language user experience, successfully re-engaging job seekers through WhatsApp job alerts, and designed diverse UI features on the Android app for Indian job seeker localization.</li>
          <li>Helped launching In-app push notification, adding various Rich remote push notifications features on Indeed's Android app for Indian jobseekers.</li>
        </ul>
        <div className="tech-stack">
          <div className="stack-title">Tech Stack:</div>
          <div className="stack-items">
            <span>ReactJS (TypeScript + JavaScript)</span>
            <span>JAVA (Spring Boot)</span>
            <span>Android (Kotlin)</span>
            <span>Jetpack Compose</span>
            <span>MySQL</span>
          </div>
        </div>
      </ExperienceCard>

      <ExperienceCard
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <div className="header">
          <div className="company">GeeksForGeeks | Software Engineer I</div>
          <div className="duration">August 2020 - September 2021</div>
        </div>
        <ul>
          <li>Worked in GFG Auth team managing user authorization/authentication, collaborating with internal teams to integrate user data, and serving as a bridging team to consistently provide solutions for engaging users.</li>
          <li>Developed and designed the GFG Mailing Portal from scratch, a software utilized by the marketing team to distribute promotional and educational emails to users.</li>
          <li>Automated and optimised various workflows for internal teams to enhance time efficiency.</li>
        </ul>
        <div className="tech-stack">
          <div className="stack-title">Tech Stack:</div>
          <div className="stack-items">
            <span>HTML/CSS</span>
            <span>Materialize CSS</span>
            <span>Bootstrap</span>
            <span>MySQL</span>
            <span>Amazon DynamoDB</span>
            <span>JavaScript</span>
            <span>AJAX</span>
            <span>AWS</span>
          </div>
        </div>
      </ExperienceCard>
    </Section>
  );
};

export default ExperienceSection; 