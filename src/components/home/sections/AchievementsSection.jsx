import { Section } from '../styles';
import { AchievementCard } from '../Cards';
import { achievementsData } from '../../../data/achievements';
const AchievementsSection = () => {
  return (
    <Section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h2>Achievements 🏆</h2>
      {achievementsData.map((achievement, index) => (
        <AchievementCard key={index} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <div className="content">
            <h3 data-icon={achievement.icon}>{achievement.category}</h3>
            <ul>
              {achievement.achievements.map((achievement, index) => (
                <li key={index}>
                  <span className="rank">{achievement.title}:</span> {achievement.description}
                </li>
              ))}
            </ul>
          </div>
        </AchievementCard>
      ))}
    </Section>
  );
};

export default AchievementsSection;
