import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGnometerminal,
  SiMui,
  SiLinux,
  SiBrave,
  SiNetlify,
  SiGithub,
  SiCodepen,
  SiFirebase,
  SiAndroidstudio,
  SiDuckduckgo,
  SiNamecheap,
  SiNodemon,
  SiTryhackme,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiKalilinux
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnometerminal />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBrave />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDuckduckgo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodepen />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMui />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodemon />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNamecheap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTryhackme />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
      </Col>
    </Row>
  );
}

export default Toolstack;
