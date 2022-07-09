import React, { useEffect, useState } from "react";
import "../Styles/Navbar.css";
import { DownloadOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-scroll";
import { Button, Row } from "antd";
import About from "./About";
import MoreAbout from "./MoreAbout";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import useWindowDimensions from "../Components/ScreenDimHook";

export default function Navbar() {
  const [colorChange, setColorchange] = useState(null);

  const { width } = useWindowDimensions();

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  const [checked, setChecked] = useState(false);
  const toggleChecked = () => setChecked(value => !value);

  
  useEffect(() => {
    if (width > 720) {
        setChecked(false);
    }
  }, [checked, width]);

  return (
    <>
      <nav className={colorChange ? "nav colorChange" : "nav"}>
        <h1>Jatin Aneja</h1>
        <ul className="navigation" style={checked === true ? {visibility : 'hidden'} : {visibility: 'visible'}}>
          <li >
            <Link
              class="nav-link"
              activeClass="active"
              to="homeSection"
              style={{ color: "#fff" }}
              spy={true}
              smooth={true}
              offset={-80}
              duration={700}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="aboutSection"
              style={{ color: "#fff" }}
              spy={true}
              smooth={true}
              offset={-80}
              duration={700}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              class="nav-link"
              activeClass="active"
              to="skillSection"
              style={{ color: "#fff" }}
              spy={true}
              smooth={true}
              offset={-80}
              duration={700}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              class="nav-link"
              activeClass="active"
              to="projectSection"
              style={{ color: "#fff" }}
              spy={true}
              smooth={true}
              offset={-80}
              duration={700}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              class="nav-link"
              to="contactSection"
              style={{ color: "#fff" }}
              spy={true}
              smooth={true}
              offset={-80}
              duration={700}
            >
              Contact Me
            </Link>
          </li>
          <li>
            <Row>
              <Button
                type="primary"
                variant="contained"
                icon={<DownloadOutlined style={{ marginRight: "10px" }} />}
                style={{
                  borderBlockStyle: "dotted",
                  color: "#ffffff",
                  background: "transparent",
                  borderColor: "#ffffff",
                }}
                href="JatinAneja-Resume.pdf"
                download
              >
                DownloadCV
              </Button>
            </Row>
          </li>
        </ul>
        {width < 720 && (
            
          <Button
            className="burger-menu"
            id="burger-menu"
            icon={<MenuOutlined />}
            style={{background:'transparent'}}
            onClick={width > 720 ? setChecked(false) : toggleChecked}
          >
          </Button>
        )}
      </nav>
      <About id={"homeSection"} />
      <MoreAbout id={"aboutSection"} />
      <Skills id={"skillSection"} />
      <Projects id={"projectSection"} />
      <ContactMe id={"contactSection"} />
      <Footer />
    </>
  );
}
