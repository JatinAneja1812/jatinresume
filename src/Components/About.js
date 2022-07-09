import React from "react";
import "../Styles/About.css";
import { Layout } from "antd";
const { Content } = Layout;

export default function About(props) {
  return (
    <>
      <section class="hero" id={props.id}>
        {/* <img
          src="assets/images/wfh_1.svg"
          alt="jane-doe"
          loading="lazy"
          class="hero-img"
        /> */}
        <Layout>
          <Content>
            <div
              className="site-layout-outer-main-background"
              style={{
                marginTop: "125px",
                display: "flex",
                position: "relative",
              }}
            >
              <Layout>
                <Content
                  style={{
                    margin: "14px 16px 0",
                  }}
                >
                  <div
                    className="site-layout-background"
                    style={{
                      padding: 24,
                      minHeight: 360,
                    }}
                  >
                    <Layout>
                      <Content
                        style={{
                          margin: "24px 16px 0",
                        }}
                      >
                        <div
                          className="site-layout-innerbackground"
                          style={{
                            padding: 24,
                            minHeight: 360,
                          }}
                        ></div>
                      </Content>
                    </Layout>
                    
                  <ul className="icons">
                        <a
                          href="https://twitter.com/JatinAneja01"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            class="fa fa-twitter"
                            style={{ fontSize: "30px" }}
                          ></i>
                        </a>
                        <br />
                        <a
                          href="https://www.facebook.com/jatin.aneja.10/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            class="fa fa-facebook"
                            style={{ fontSize: "30px" }}
                          ></i>
                        </a>
                        <br />
                        <a
                          href="https://www.instagram.com/jatinaneja2000/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            class="fa fa-instagram"
                            style={{ fontSize: "30px" }}
                          ></i>
                        </a>
                        <br />
                        <a
                          href="https://www.linkedin.com/in/jatin-aneja-b931651a3/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            class="fa fa-linkedin"
                            style={{ fontSize: "30px" }}
                          ></i>
                        </a>
                        <br />
                        <a
                          href="https://github.com/JatinAneja2000"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            class="fa fa-github"
                            style={{ fontSize: "30px" }}
                          ></i>
                        </a>
                        <br />
                        <a
                          href="https://github.com/JatinAneja1812"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            class="fa fa-github"
                            style={{ fontSize: "30px" }}
                          ></i>
                        </a>
                      </ul>
                  </div>

                </Content>
              </Layout>
            </div>
          </Content>
        </Layout>

        <div class="bio animate__animated animate__shakeX">
          <div class="media-body">  
          <h5>Hello everyone, I'm</h5>
          <div>
            {" "}
            <h2 class="bio-title">Jatin Aneja</h2>
          </div>
          <h4>Software Designer {"&"} Developer</h4>
          </div>
         

          <p class="bio-text">
            I design and develop experiences.
            <br />
            <br />
            Web Designer with the passion of designing clean and functional
            Websites {"&"} User Interfaces. <br /> <br /> Back End|Front End
            Developer with experiences coding in C# .NET Core, HTML, React.js. I
            Focus on writing Clean, Elegant and Efficient Code.{" "}
          </p>
        </div>
      </section>
    </>
  );
}
