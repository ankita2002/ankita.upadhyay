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
      title:
        "Crowdfunding for Engineering Startups using Blockchain and Smart Contracts",
      type: "Research Paper",
      year: "April 2022",
      publication:
        "International Journal of Research and Analytical Reviews",
      link: "https://www.ijrar.org/papers/IJRAR22B1545.pdf",
    },
    {
      title: "Face Mask Detection and Attendance System",
      type: "Research Paper",
      year: "June 2021",
      publication:
        "International Research Journal of Engineering and Technology",
      link: "https://www.irjet.net/archives/V8/i6/IRJET-V8I6601.pdf",
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