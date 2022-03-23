import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import chatify from "../../Assets/calculator.png";
import editor from "../../Assets/errandlr.jpg";
import leaf from "../../Assets/greenbrain.png";
import Weather from "../../Assets/my-weather-app.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Calculator"
              description="Build this persnal calculator with javaScripts and hosted with GitHub hosting."
              link="https://yusluv1234.github.io/Calculator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Green Brain"
              description="I build this web app with React using style-component and some other React component it's a task given to me while applying for a job and i build this website in 2 days"
              link="https://ecstatic-clarke-2b3a4b.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ErrandLR"
              description="This website is a Logistic web app build with React, TypeScript, Tailwind-CSS E.T.C i work in Errandlr as a Frontend Developer and a very user friendly interface with a very great responsiveness"
              link="https://errandlr.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather App"
              description="I build this web app with React using Typecript, Axios, React-redux, Redux-thunk, Bulma, Redux and Bootstrap for the styling "
              link="https://verdant-bubblegum-6c30c6.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
