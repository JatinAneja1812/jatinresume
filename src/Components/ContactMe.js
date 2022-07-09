import React from "react";
import "../Styles/Contact.css";

export default function ContactMe(props) {
  return (
    <>
      <section class="contact" id={props.id}>
        <h2>Get In Touch With Me</h2>
        <div class="contact-form-container">
          <div class="contact-form">
            <img
              src="Location.png"
              alt="expense-tracker"
              loading="lazy"
              class="project-pic"
              width={"100%"}
            />
            <p >
              <a
                href={
                  "https://www.bing.com/maps?osid=473c8896-ac96-4525-a834-6a8273a3a36c&cp=54.572322~-1.235052&lvl=16&v=2&sV=2&form=S00027"
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{fontSize:'20px', color:'#fff'}}
              >
                <i class="fa fa-location-arrow" aria-hidden="true"></i>{" "}
                Middlesbrough
              </a>
            </p>
            <p>
              <a href="mailto:jatinaneja2000@gmail.com" style={{fontSize:'20px', paddingLeft:'20px', borderLeftStyle: 'dotted'
                ,alignContent: 'flex-end'}}>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                Mail-Box : jatinaneja2000@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
