import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jolayemi Yusuf Olaitan </span>
            from <span className="purple"> Lagos, Nigeria.</span>
            <br />I am Computer Science Student Currently in Kwara State Polytechnic
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Interior Decorator
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Skits
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jolayemi Yusuf</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
