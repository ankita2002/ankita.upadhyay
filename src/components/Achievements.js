const AchievementCard = ({ link, description, title }) => (
  <div className="achievement-container">
    <div className="instagram-post">
      <iframe
        src={`${link}embed/`}
        title="Instagram Post"
        width="400"
        height="400"
        frameBorder="0"
        scrolling="no"
        allowTransparency="true"
      />
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
    <div className="title-footer">
      <h3>{title}</h3>
    </div>
  </div>
);

export const Achievements = () => (
  <div className="Achievements">
    
    <AchievementCard className="achievement-card"
      link="https://eliza.school/people/ankita-upadhyay/"
      description="Recipient of the ELIZA Scholarship, an initiative that supports outstanding students in AI & Machine Learning with academic funding, industry exposure, and research guidance"
      title="ELIZA Scholarship Holder"
    />

    <AchievementCard
      link="https://www.instagram.com/p/CoTzZfRKqni/"
      description="Achieved 4th Rank at IIT Bombay Rescon 2023 with my team for our AI chatbot project Saathi."
      title="Rescon 2023 - 4th Rank, IIT Bombay"
    />

    <AchievementCard
      link="https://www.instagram.com/p/CipruHmqB1H/"
      description="Competitive coding event at SLRTCE"
      title="Codefair 4.1 - 3rd Rank"
    />

    <AchievementCard
      link="https://www.instagram.com/p/CdIqaJpsCuh/"
      description="Competitive coding event at SLRTCE"
      title="Top Female Coder - 1st Rank"
    />

    <AchievementCard
      link="https://www.instagram.com/p/CWOJIlYMLRc/"
      description="Competitive coding event at SLRTCE"
      title="Codeyantra - KnapSack 2.0 - 2nd Rank"
    />
    <AchievementCard className="achievement-card"
      link="https://slrtce.in/student#setup5"
      description="General Secretary of the Student Council 2022-23 at SLRTCE"
      title="General Secretary - Student Council 2022-23"
    />
  </div>
);