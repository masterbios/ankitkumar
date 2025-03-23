import { Section } from '../styles';
import { AchievementCard } from '../Cards';

const AchievementsSection = () => {
  return (
    <Section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h2>Achievements 🏆</h2>
      <AchievementCard
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="icon">⚡</div>
        <div className="content">
          <h3>Competitive Programming</h3>
          <p>
            <span className="rank">CodeChef:</span> Achieved highest rating of 1837 (4 star)
          </p>
          <p>
            <span className="rank">ACM ICPC:</span> Two-time National Regional Qualifier
          </p>
          <p>
            <span className="rank">Google Code Jam 2020:</span> Successfully qualified first round
          </p>
          <p>
            <span className="rank">Snackdown 2018:</span> Ranked 854th among 15,850+ teams in 3rd round
          </p>
        </div>
      </AchievementCard>

      <AchievementCard
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="icon">💻</div>
        <div className="content">
          <h3>Programming Contests</h3>
          <p>
            <span className="rank">TCS CodeVita:</span> Secured 3,462nd rank among 55,654 participants
          </p>
          <p>
            <span className="rank">JAVA Programming Contest:</span> 2nd prize winner in College Annual Tech Fest
          </p>
          <p>
            <span className="rank">Fork JAVA (GeeksForGeeks):</span> Secured 26th rank among 1,100+ students
          </p>
        </div>
      </AchievementCard>

      <AchievementCard
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="icon">🎓</div>
        <div className="content">
          <h3>Other Accomplishments</h3>
          <p>
            <span className="rank">Placement 100 Scholarship Test:</span> Secured 28th rank among 831 participants
          </p>
        </div>
      </AchievementCard>
    </Section>
  );
};

export default AchievementsSection; 