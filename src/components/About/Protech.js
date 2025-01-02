import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  SiC,
  SiPerl,
  SiCsharp,
  SiCplusplus,
  SiPython,
}
from 'react-icons/si';
function Protech() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
       <SiCsharp/>
     </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPython />
    </Col>
     <Col xs={4} md={2} className="tech-icons">
     <SiPerl/>
   </Col>
    </Row>
  );
}

export default Protech;
