export const Achievements = () => (
  <div className="Achievements container">

    <h2 className="section-title">Certificates & Leadership</h2>

    {/* CERTIFICATES */}
    <div className="achievement-block">
      <h3>Certificates</h3>
      <ul className="clean-list">
        <li>MATLAB Onramp</li>
        <li>SolidWorks CSWA</li>
        <li>Introduction to IoT & Embedded Systems (Coursera)</li>
      </ul>
    </div>

    {/* LEADERSHIP */}
    <div className="achievement-block">
      <h3>Leadership</h3>
      <ul className="clean-list">
        <li>
          Coordinated technical events and editorial activities for IEEE PCE
        </li>
        <li>
          Led Hyperion Racing as Team Captain, overseeing the electronics
          subteam, managing PCB design, testing workflows, and full system integration
        </li>
      </ul>
    </div>

    {/* LANGUAGE */}
    <div className="achievement-block">
      <h3>Language Skills</h3>
      <ul className="clean-list">
        <li><strong>English:</strong> C1</li>
        <li><strong>German:</strong> B1.2 (Improving towards professional fluency)</li>
      </ul>
    </div>

  </div>
);