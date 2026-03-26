import Csharp from "../assets/img/csharp.svg";
import html from "../assets/img/html.png";
import javascript from "../assets/img/javascript.png";
import css from "../assets/img/css.png";
import react from "../assets/img/react.png";
import bootstrap from "../assets/img/bootstrap.png";
import mysql from "../assets/img/Mysql.png";
import python from "../assets/img/python.png";
import flask from "../assets/img/flask.jpg";
import pandas from "../assets/img/pandas.png";
import nltk from "../assets/img/nltk.png";
import opencv from "../assets/img/opencv.png";
import deeplearning from "../assets/img/deeplearning.jpg";
import Carousel from "react-multi-carousel";
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

  const skills = [
    { img: react, label: "React JS" },
    { img: react, label: "React Redux" },
    { img: javascript, label: "JavaScript" },
    { img: html, label: "HTML5" },
    { img: css, label: "CSS / Sass" },
    { img: bootstrap, label: "Bootstrap" },
    { img: Csharp, label: "C#" },
    { img: python, label: "Python" },
    { img: flask, label: "Flask" },
    { img: mysql, label: "MySQL" },
    { img: nltk, label: "NLTK" },
    { img: pandas, label: "Pandas" },
    { img: deeplearning, label: "TensorFlow & Keras" },
    { img: opencv, label: "OpenCV & OCR" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p className="skill-summary">
                <strong>Languages:</strong> C, C++, C#, Java, JavaScript, Python,
                PHP; React, Redux; HTML, CSS, Sass, Bootstrap; regular
                expressions (Regex); Flask, MySQL.
                <br />
                <strong>Machine learning &amp; AI:</strong> TensorFlow, Keras,
                Pandas, NLTK, OpenCV; OCR and deep learning (e.g. CRNN,
                keras-ocr); NLP and extractive text summarization.
                <br />
                <strong>Automation:</strong> Playwright
‚                <br />
                <strong>Environment &amp; platforms:</strong> Git, GitHub, AWS,
                Google Cloud
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map(({ img, label }, index) => (
                  <div className="item" key={`${label}-${index}`}>
                    <img src={img} alt={label} />
                    <h3>{label}</h3>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
