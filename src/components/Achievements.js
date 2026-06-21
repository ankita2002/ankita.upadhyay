import { useEffect } from "react";

const InstagramEmbed = ({ url }) => {
  useEffect(() => {
    const scriptId = "instagram-embed-script";

    if (document.getElementById(scriptId)) {
      window.instgrm?.Embeds.process();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => window.instgrm?.Embeds.process();

    document.body.appendChild(script);
  }, [url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
    />
  );
};

const AchievementCard = ({
  link,
  embedUrl,
  description,
  title,
  className = "",
}) => (
  <div className={`achievement-container ${className}`}>
    <div className="instagram-post">
      {link.includes("instagram.com") ? (
        <InstagramEmbed url={link} />
      ) : embedUrl ? (
        <iframe
          src={embedUrl}
          title={title}
          width="400"
          height="400"
          frameBorder="0"
          scrolling="no"
          allowTransparency="true"
        />
      ) : (
        <a href={link} target="_blank" rel="noreferrer">
          View achievement
        </a>
      )}

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
    <AchievementCard
      className="achievement-card"
      link="https://www.linkedin.com/posts/eliza-konrad-zuse-school-of-excellence-in-ai_human-centered-ai-moving-beyond-automation-activity-7473279772568211457"
      embedUrl="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7473279772568211457?collapsed=1"
      description="Got featured in Women in Eliza 2026"
      title="Women in Eliza 2026."
    />

    <AchievementCard
      className="achievement-card"
      link="https://eliza.school/people/ankita-upadhyay/"
      embedUrl="https://eliza.school/people/ankita-upadhyay/"
      description="Recipient of the ELIZA Scholarship, an initiative that supports outstanding students in AI & Machine Learning with academic funding, industry exposure, and research guidance"
      title="ELIZA Scholarship Holder"
    />

    <AchievementCard
      className="achievement-card"
      link="https://www.instagram.com/p/CoTzZfRKqni/"
      description="Achieved 4th Rank at IIT Bombay Rescon 2023 with my team for our AI chatbot project Saathi."
      title="Rescon 2023 - 4th Rank, IIT Bombay"
    />

    <AchievementCard
      className="achievement-card"
      link="https://www.instagram.com/p/CipruHmqB1H/"
      description="Competitive coding event at SLRTCE"
      title="Codefair 4.1 - 3rd Rank"
    />

    <AchievementCard
      className="achievement-card"
      link="https://www.instagram.com/p/CdIqaJpsCuh/"
      description="Competitive coding event at SLRTCE"
      title="Top Female Coder - 1st Rank"
    />

    <AchievementCard
      className="achievement-card"
      link="https://www.instagram.com/p/CWOJIlYMLRc/"
      description="Competitive coding event at SLRTCE"
      title="Codeyantra - KnapSack 2.0 - 2nd Rank"
    />

    <AchievementCard
      className="achievement-card"
      link="https://slrtce.in/student#setup5"
      embedUrl="https://slrtce.in/student#setup5"
      description="General Secretary of the Student Council 2022-23 at SLRTCE"
      title="General Secretary - Student Council 2022-23"
    />
  </div>
);