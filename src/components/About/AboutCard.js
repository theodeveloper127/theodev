import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Theogene Iradukunda  </span>
             from <span className="purple">Kigali, Rwanda.</span>
            <br />
            I am student  as a software developer in software development section at Tumba Tss. 
            Rulindo Disctrict , north .
            <br />
            I have completed Front-end and Back-end Web development (Full Stack) in 2024 and Computing as Theo_it. 
            <br />
            <br />
            Try Connect With Me: eMail:theoiradukunda81@gmail.com
            <br />
            <br />
            Apart from coding, some other activities that I do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Network Configration and OS installation (All software)
            </li>
            <li className="about-activity">
              <ImPointRight />Thinking About innovation and daily creative
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphic Design and Web Design (Blueprint)
            </li>
            <li className="about-activity">
              <ImPointRight />Web Testing and Error handlering Service.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Theo_dev</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
