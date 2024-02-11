import Csharp from "../assets/img/csharp.svg";
import cplusplus from '../assets/img/c++..png';
import html from "../assets/img/html.png";
import javascript from "../assets/img/javascript.png";
import css from "../assets/img/css.png";
import react from "../assets/img/react.png";
import bootstrap from "../assets/img/bootstrap.png";
import mysql from "../assets/img/Mysql.png";
import python from "../assets/img/python.png";
import flask from "../assets/img/flask.jpg";
import pandas from "../assets/img/pandas.png";
import numpy from "../assets/img/numpy.png";
import C from "../assets/img/c.png";
import nltk from "../assets/img/nltk.png";
import opencv from "../assets/img/opencv.png";
import deeplearning from "../assets/img/deeplearning.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={Csharp} alt="Image" />
                                <h3>C#</h3>
                            </div>
                            <div className="item">
                                <img src={cplusplus} alt="Image" />
                                <h3>C/C++</h3>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h3>HTML5</h3>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h3>CSS3</h3>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h3>JavaScript</h3>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" />
                                <h3>BootStrap</h3>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h3>React JS</h3>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h3>Python</h3>
                            </div>
                            <div className="item">
                                <img src={deeplearning} alt="Image" />
                                <h3>Deep Learning</h3>
                            </div>
                            <div className="item">
                                <img src={opencv} alt="Image" />
                                <h3>OpenCv</h3>
                            </div>
                            <div className="item">
                                <img src={flask} alt="Image"/>
                                <h3>Flask</h3>
                            </div>
                            <div className="item">
                                <img src={nltk} alt="Image" />
                                <h3>NLTK</h3>
                            </div>
                            <div className="item">
                                <img src={pandas} alt="Image"/>
                                <h3>Pandas</h3>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image"/>
                                <h3>MySQL</h3>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}