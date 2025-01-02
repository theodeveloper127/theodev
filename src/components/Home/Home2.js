import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube
} from "react-icons/ai";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
             My name's Theogene Iradukunda I am software developer in Tumba Tss. I have complete 
             Front-end and Back-end only L3 and L4 on 2023-2024  have complete html , css ,javascript,
             php , Mysql ,MongoDB , Web Deploy and etc.Now i am able to make Full stack 
             website by using web technology such as Reactjs ,vue , angular and express
             and i still learn Wordpress web technology on goskills.rw
             start to learn software in 2023. 
              <br />
              <br />Language's I like to use daily life 
              <i>
                <b className="purple">  HTML , CSS , Javascript , and PHP. </b>
              </i>
              <br />
              <br />Frameworks I like to use daily life 
              <i>
                <b className="purple">  Reactjs , Boostrap , Laravel , and Tailwind. </b>
              </i>
              <br />
              <br />Database's I like to use daily life 
              <i>
                <b className="purple">  Nosql and Sql , MariaDB , Mysql , and MongoDB. </b>
              </i>
              <br />
              <br />
              Here there are common my skills comes from &nbsp;
              <i>
                <b className="purple"> YouTube Tutorials (Great Stack & Easy Tutorials) AI and google 
                  Reseach,Collaboration with indian developer in GitHub (Muhillan) and expreince from project i do every day.  </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/theodeveloper127"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/tg_iran127"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@rwatech"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tg_iran_official"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
