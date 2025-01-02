import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// project preview 
import quickrun from "../../Assets/Projects/quickrun.png";
import zamuka from "../../Assets/Projects/zamuka.png";
import orrapo from "../../Assets/Projects/orrapo.png";
import mbox from "../../Assets/Projects/mbox.png";




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
              imgPath={zamuka}
              isBlog={true}
              title="Zamuka"
              description="
               Online Platform for Subscriber,s ,like ,share and views buy for YouTube Channel 
               Aimed for rwandan content creator Build in HTML , CSS and JAVASCRIPT 
               Web development technology, is product of rwatek teams.
               But now is not working becouse of same reason. if you want to Download 
               Template Buy me a coffee and follow readme file.is available on google Driver
               and GitHub Platform.  
              "
              ghLink="https://github.com/theodeveloper127"
              demoLink="https://zamukatk.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quickrun}
              isBlog={false}
              title="Quickrunx"
              description="Platfrom for online code running without installation 
              of any software like vs code etc this platfrom can help you to test 
              and get output very easy and quickly it support only html , css and javascript
              web technology. if you need Platfrom like this send me request 
              and i happy to respons you."
              ghLink="https://github.com/theodeveloper127"
              demoLink="https://quickrunx.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={orrapo}
              isBlog={true}
              title="Orrapo"
              description="
              Website fro online  & offline programming and website development course work 
              like w3school aimed fro develoer , programmer even network section IT &CYbersecurity 
              to learn course is free fro every one. but this Webasite is under development if
              you have ideal fro them your ideal is best Try send me your ideal
              "   
              ghLink="https://github.com/theodeveloper127"     
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mbox}
              isBlog={true}
              title="Mbox"
              description="
               Platfroms fro movies streaming fro free translate into Kinyarwanda
               (Agasobanuye Films) this website it sell when you need more information 
               about them send me request price 40,000Rwf to 80,000Rwf. it Build in Html 
               , Css , javascript and Php and Database Mysql. summary build with content 
               management systems build in by using Php. Designed and Developed By Theo_dev 
               Me.
              "        
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
