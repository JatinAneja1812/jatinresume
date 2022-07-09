import React from "react";
import "../Styles/Footer.css";
import { animateScroll as scroll } from "react-scroll";

export default function Footer() {

const scrollToTop = () => {
        scroll.scrollToTop();
      };
  return (
    <>
      <footer>
        <p class="copy" style={{ color: "#fff" }}>
          &copy; Copyright 2022
        </p>
        <p class="copy" style={{ color: "#fff" }}>
          Built with &#x2661; by
          <a
            href="#https://www.linkedin.com/in/jatin-aneja-b931651a3/"
            target="_blank"
            style={{ color: "#7fff00" }}
          >
            Jatin Aneja
          </a>
    
        </p>
        
      </footer>
      <i class="scroll-up" id="scroll-up" >
          <img 
            src="https://media3.giphy.com/media/MEuyrVS3UMe7DHm4Rq/source.gif"
            class="socicon up-arrow"
            alt="scroll-up"
            onClick={scrollToTop}
            style={{ display:'-ms-flexbox'}}
          />
        </i>
    </>
  );
}
