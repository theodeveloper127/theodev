import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiCss3,
  DiWordpress,
  DiHtml5,
  DiPhp,
  DiPostgresql,
  DiMysql,
  DiPython,
  DiBootstrap,
  DiLaravel,
  DiJqueryLogo,
  DiAngularSimple,
} from "react-icons/di";
import {
  SiExpress,
  SiTailwindcss,
}
from 'react-icons/si';
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
       <DiBootstrap/>
     </Col>
     <Col xs={4} md={2} className="tech-icons">
       <SiTailwindcss/>
     </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
       <DiLaravel />
     </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJqueryLogo />
    </Col>
     <Col xs={4} md={2} className="tech-icons">
     <DiPostgresql />
   </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWordpress />
      </Col>

    </Row>
  );
}

export default Techstack;
