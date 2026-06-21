export const ResearchPublications = () => {
  const researchData = [
    {
      title: "Saathi - An AI Chatbot",
      type: "Research Paper",
      year: "June 2023",
      publication:
        "IEEE National Student’s Conference on Innovation in Rural Development, SSGMCE",
      link: "https://ssgmjournal.in/index.php/ssgm/article/view/79",
    },
    {
      title: "Face Mask Detection and Attendance System",
      type: "Survey Paper",
      year: "March 2021",
      publication:
        "International Journal of Scientific and Research Publications",
      link: "https://www.ijsrp.org/research-paper-0321.php?rp=P11111091",
    },
  ];

  return (
    <section className="research" id="research">
      <div className="container">
         {/* 🔹 EDUCATION SECTION */}
         <div className="education-section">
          <h2>Education</h2>

          <div className="education-card">
            <h3>Master’s in Electrical Engineering and Information Technology</h3>
            <p><strong>Major:</strong> Communication Systems</p>
            <p><strong>University:</strong> Hochschule Darmstadt, Germany</p>
            <p><strong>Duration:</strong> September 2024 – Present</p>
            <p className="edu-modules">
              <strong>Modules:</strong> Wireless and Mobile Communication, Antenna & Microwave Systems, Advanced DSP, Advanced Modulation, System & Hardware Design
            </p>
          </div>

          <div className="education-card">
            <h3>Bachelor of Engineering in Electronics and Telecommunication</h3>
            <p><strong>University:</strong> Pillai College of Engineering, India</p>
            <p><strong>Duration:</strong> June 2019 – February 2023</p>
            <p><strong>Grade:</strong> 1.6 (Sehr Gut)</p>
          </div>
        </div>
        <div className="research-header">
          <h2>Research Publications</h2>

          <a
            href="https://scholar.google.com/citations?user=EAKww08AAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
            className="scholar-btn"
          >
            Google Scholar
          </a>
        </div>

        <div className="research-table-wrapper">
          <table className="research-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Type</th>
                <th>Year</th>
                <th>Publication</th>
                <th>Link</th>
              </tr>
            </thead>

            <tbody>
              {researchData.map((paper, index) => (
                <tr key={index}>
                  <td>{paper.title}</td>
                  <td>{paper.type}</td>
                  <td>{paper.year}</td>
                  <td>{paper.publication}</td>
                  <td>
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};