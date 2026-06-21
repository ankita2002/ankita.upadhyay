import python from "../assets/img/python.png";
import pandas from "../assets/img/pandas.png";
import cpp from "../assets/img/c++..png";
import Carousel from "react-multi-carousel";
import cst from "../assets/img/CST-logo.webp";
import excel from "../assets/img/Excel_logo.png";
import powerpoint from "../assets/img/PowerPoint.png";
import matlab from "../assets/img/Matlab_Logo.png"; 
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // ONLY language / tool based skills in carousel
  const tools = [
    { img: python, label: "Python" },
    { img: pandas, label: "NumPy & Pandas" },
    { img: matlab, label: "MATLAB" },
    { img: matlab, label: "MATLAB Simulink" },
    { img: cpp, label: "C++" },
    { img: cst, label: "CST Studio" },
    { img: excel, label: "Excel" },
    { img: powerpoint, label: "PowerPoint" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>

              {/* 🔹 TECHNICAL SKILLS */}
              <div className="skills-section">
                <h4>Technical Skills</h4>
                <ul className="skills-list">
                  <li>RF & Mixed Signal Measurement (Spectrum Analyzer, VNA, Oscilloscope basics)</li>
                  <li>Wireless Systems: 4G, 5G, OFDM, MIMO</li>
                  <li>Modulation Behaviour, Digital Modulation & Signal Analysis</li>
                  <li>SDR Experimentation & Waveform Analysis</li>
                  <li>Data Analysis, Automation & Signal Processing</li>
                  <li>Modelling & Simulation (MATLAB Simulink, CST - Basics)</li>
                </ul>
              </div>

              {/* 🔹 TOOLS CAROUSEL */}
              <div className="skills-section">
                <h4>Programming & Tools</h4>

                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  {tools.map(({ img, label }, index) => (
                    <div className="item" key={`${label}-${index}`}>
                      <img src={img} alt={label} />
                      <h3>{label}</h3>
                    </div>
                  ))}
                </Carousel>
              </div>

              {/* 🔹 SOFT SKILLS */}
              <div className="skills-section">
                <h4>Soft Skills</h4>
                <ul className="skills-list">
                  <li>Analytical Thinking & Problem Solving</li>
                  <li>Clear Communication & Team Collaboration</li>
                  <li>Structured and Reliable Working Style</li>
                  <li>Fast Learning Ability</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};