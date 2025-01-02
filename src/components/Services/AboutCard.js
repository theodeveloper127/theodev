import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Here there are common services and thier cost include <span className="purple" > Web App Dev , Mobile App Dev ,Database Management , Networking ,Graphic Design
             , Web Design , Marketing Skills , Innovation Creative , Web Deployement , Software Installation </span>
             and <span className="purple">Computing Skills.</span>
            <br />
            I can work with Remote and offline collaboration with Us . Always my inbox it's open 
            send me requerst and i'm happy to response you whenever . Try use my email andress at :
            <span className="purple" >  theoiradukunda81@gmail.com </span>or my  social media include in portfolio footer and  Call & WhatsApp
            <span className="purple" >  +250724935532 . </span>
            <span className="purple" >  call Me Developer in action. </span>
            </p>
            <br />
            <br />    
            <span className="purple" > Apart for  Web Development. </span>
            <br />
            <ul>
            <li className="about-activity">
              <ImPointRight /><span className="purple" >Static Website</span> with  Html,Css and Javascript at least
              start at  25,000Rwf to 60,000Rwf. cost can be reduce or increase 
              becouse of project size.
            </li><br />
            <li className="about-activity">
              <ImPointRight /><span className="purple" >Dynamic Website</span> With Back-end (express,php,django,etc)
              for small project  at least start at 50,000Rwf to  200,000Rwf and big project 
              start at 300,000Rwf to 900,000Rwf cost can be reduce or increase 
              becouse of project size.
            </li><br />
            <li className="about-activity">
              <ImPointRight /><span className="purple" >Personal and Company Portfolio </span>
               for Personal portfolio Website Build with React technology at least start at 20,000Rwf 
               and Company Portfolio Website Build With React technology at least start at 50,000Rwf
            </li><br />
            <li className="about-activity">
              <ImPointRight /> <span className="purple" >Web Design and analyze </span> Web Design
              for small project  at least start at 10,000Rwf to 40,000Rwf. and big project start by 
              using number of web pages.

            </li><br />
            <li className="about-activity">
              <ImPointRight /><span className="purple" >Web Tempelate </span>
              Static Web Tempelate price at least start at 10,000Rwf and Dynamic Web Tempelate 
              price at least start at 20,000Rwf.
            </li>
          </ul>
          <br />
          <br />
          <span className="purple" >Apart fro Software and Computing</span>
          <br />     
          <ul>
            <li className="about-activity">
              <ImPointRight /><span className="purple" >Software Installation </span>
              Os Installation such as (Linux,windows,MacOs,Unix,CUI,GUI) at least start 
              15,000Rwf With installation of program after such as (Driver's,Ant-virus,Office,etc)
              at least 25,000Rwf with Drivers Update.
            </li><br />
            <li className="about-activity">
              <ImPointRight /><span className="purple" >Microsoft Office online & offline course </span>
              at least 20,000Rwf every three in week expired in 30 Days
              Promotion can learn computer skills fro only 40,000Rwf.
            </li>
          </ul>
          <br />
          <br />
          <span className="purple" >Apart fro Marketing and Innovation Skills</span>
          <br />     
          <ul>
            <li className="about-activity">
              <ImPointRight /><span className="purple" >Marketing Strategies </span>
              in 2025 good Strategies of selling your products. good way is online 
              advertise by using Website and Social Media's such as (Instagram,Facebook,TikTok,YouTube,etc)
              I can Help you to achieve to them.
            </li><br />
            <li className="about-activity">
              <ImPointRight /><span className="purple" >Project Remote Collaboration and Ideas Share </span>
              Always my Inbox it's open when you have big project can remote with you work as team at least 
              big project you can pay me at least 30,000Rwf fro  one page (Bac-end) 10,000Rwf (Front-end).
            </li><br />
            <li className="about-activity">
              <ImPointRight /><span className="purple" >Computer skills fro Business </span>
              i Complete my computer skills for Business course in Atingi.org on 2024.
              now i'm able to share computer skills to others , when you need to get course of
               computer online at least 10,000Rwf only 30Days by using official Website but it under Develop
               and offline at least 30,000Rwf only 30Days.
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Share your skills with codeinrwanda.rw"{""}
          </p>
          <footer className="blockquote-footer">it's under develop can support this action  to be one in Us.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
