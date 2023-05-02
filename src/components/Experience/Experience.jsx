import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsBag } from "react-icons/bs";
import "../Experience/experience.css";

const companies = [
  {
    duration: "Feb 2023 - Present · 3 mos",
    responsibilities:
      "Working on improving the coding efficiency of the Tononomy Foundation website and contributing to other open-source tools.",
    position: "FRONTEND DEVELOPER",
    Company: "Tonomy Foundation, Full-time",
  },
  {
    duration: "April 2022 - Sept 2022 · 6 mos",
    responsibilities:
      "Developed a responsive digital Marketing agency website. It was based on Metaverse, Web 2.0, offering reliable services with the best work experience and client feedback.",
    position: "FRONTEND DEVELOPER",
    Company: "Megnect Marketing Agency, Contract-based",
  },
  {
    duration: "July 2021 - December 2021 · 6 mos",
    responsibilities:
      "The food ordering website, a MERN Stack Application. Admin has all the authority to check the delivery status, customers can order food, and all the user's data will be saved on the dashboard. Users will add an item from the menu to the cart and place an order. And also did UI testing on different websites using Selenium.",
    position: "INTERN SOFTWARE ENGINEER",
    Company: "Perfekt Solutions · Internship",
  },
  {
    duration: "Jan 2020 - PRESENT · 3 years",
    responsibilities:
      "Developed different websites using MERN Stack, WordPress, and Wix. And also done Tasks on databases (MySQL, Oracle, MongoDB).",
    position: "FREELANCER",
    Company: "Upwork · Full-time",
  },
];
function Experience() {
  return (
    <div className="container_exp">
      <h1 id="experience">Experience</h1>
      <VerticalTimeline>
        {companies.map((Company) => {
          return (
            <>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background:
                    // "linear-gradient(0deg, rgba(218, 157, 167, 1) 0%, rgba(230, 45, 76, 1) 100%)",
                    "linear-gradient(0deg, rgba(230, 45, 76, 1) 0%, rgba(218, 157, 167, 1) 100%)",
                  color: "#fff",
                }}
                contentArrowStyle={{ borderRight: "7px solid  gray" }}
                date={Company.duration}
                iconStyle={{
                  background:
                    "radial-gradient(circle, rgba(218, 157, 167, 1) 0%, rgba(230, 45, 76, 1) 100%)",
                  color: "#fff",
                }}
                icon={<BsBag />}
              >
                <h3 className="vertical-timeline-element-title">
                  {Company.position}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {Company.Company}
                </h4>
                <p>{Company.responsibilities}</p>
              </VerticalTimelineElement>
            </>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
