import React from "react";
import "../Styles/MoreAbout.css";
import { Row, Col } from "antd";
import windowDimensions from "../Components/ScreenDimHook";

export default function MoreAbout(props) {

  const {width} = windowDimensions;

  return (
    <>
      <section class="more-about" id={props.id}>
        <h2>More About Me</h2>
        <Row>
          <Col>
            <p style={{width:width}}>
              {" "}
              Hi, I'm a Jatin, 21 years old. I'm a Software Developer,
              Competitive Programmer, Technical Writer, and an Open Source
              Enthusiast who is highly passionate about building fast, creative
              applications and writing beautiful code.
              <br />
              I'm living the dream.
              <br />
              I've always been a great problem solver, an independent introvert,
              and a technophile obsessed with the latest devices. Today, I'm
              working as a Junior Software Developer at Tekgem Uk ltd, Net-park.
              I started learning to code when I was a secondary school grader
              with language like HTML, Visual Basic , C/C++, though it was
              always more of a hobby than a career focus. After a high school
              education in Non- Medical science stream, and continuing to pursue
              that hobby, I realised software engineering was the right field
              for me.
              <br />
              I'm familiar with a variety of programming languages, including C#
              .Net Core, Java,C/C++ {"("}basics{")"}, JavaScript, HTML, CSS,
              Python, Android, Powershell Scripting and ReactJS, but I'm always
              adding new skills to my repertoire.
              <br />
              Web/Android Development and Refactoring are my areas of interest
              and I've been working to enhance my skills.
              <br />
              Also, I'm a kid who loves to build and design Experiences which
              make people's life easier.
            </p>
          </Col>
          <Col>
            <div class="skill_main">
              <div class="skill_item">
                <h4>
                  {" "}
                  Creative Thinking{" "}
                  <i class="fa fa-search" aria-hidden="true"></i>{" "}
                  <span class="counter"> 90</span>%
                </h4>
                <div class="progress_br">
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{width:'90%'}}
                    ></div>
                  </div>
                </div>
              </div>
              <div class="skill_item">
                <h4>
                  {" "}
                  Micro services <i class="fa fa-microchip"></i>{" "}
                  <span class="counter"> 75</span>%
                </h4>
                <div class="progress_br">
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{width:'75%'}}
                    ></div>
                  </div>
                </div>
              </div>
              <div class="skill_item">
                <h4>
                  {" "}
                  System Designing {'&'} Architecture <i class="fa fa-desktop"></i>
                  <span class="counter"> 80</span>%{" "}
                </h4>
                <div class="progress_br">
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{width:'80%'}}
                    ></div>
                  </div>
                </div>
              </div>
              <div class="skill_item">
                <h4>
                  {" "}
                  Front-End Development <i class="fa fa-font-awesome"> </i>{" "}
                  <span class="counter">80</span>%
                </h4>
                <div class="progress_br">
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{width:'80%'}}
                    ></div>
                  </div>
                </div>
              </div>

              <div class="skill_item">
                <h4>
                  Backend Development <i class="fa fa-backward"></i>{" "}
                  <span class="counter">80</span>%
                </h4>
                <div class="progress_br">
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{width:'80%'}}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}
