import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsBag } from 'react-icons/bs';
import '../Experience/experience.css';

const companies = [
  {
    duration: 'Feb 2023 - Aug 2023',
    responsibilities:
      "Developed and managed the company's dashboard, overseeing projects, analytics, and timelines. Developed the Aqary website emphasizing design, code reusability, and efficiency, utilizing various libraries for enhanced functionality.",
    position: 'FRONTEND DEVELOPER',
    Company: 'Fine Home Real Estate, UAE',
  },
  {
    duration: 'March 2022 - Jan-2023',
    responsibilities:
      'Working on improving the coding efficiency of the Tonomy Foundation website. Redesigned the Website, added Meta tags, Matomo analytics, and so on.',
    position: 'FRONTEND DEVELOPER',
    Company: 'Tonomy Foundation, Netherlands',
  },
  {
    duration: 'Jan 2022 - March 2022',
    responsibilities:
      'Developed a responsive Megnect Marketing agency website (React.js, Node.js, Express.js, MongoDB). Another website was fashion designing, where users can book an appointment for parlor stuff such as hair cutting, makeup, facials, etc.',
    position: 'MERN StACK DEVELOPER',
    Company: 'Megnect Marketing Agency, Karachi',
  },
  {
    duration: 'July 2021 - Dec 2021',
    responsibilities:
      "The food ordering website allowed users to order multiple food items. Whereas Admin has the full authority to check the delivery status, users can order food, and all the user's data will be saved on the dashboard. Done UI testing on various websites using Selenium, such as, Daraz.pk, Breakout.pk, Khaadi",
    position: 'SOFTWARE ENGINEER',
    Company: 'Perfekt Solutions · Internship',
  },
  {
    duration: 'Mar 2016 - Jan 2023',
    responsibilities:
      'Developed Movie Nation Website, Traveling website, Restaurant website, and Break-Bricks Game. Done Tasks on databases. Relational model, ER-Diagrams, Simple and Complex Queries.',
    position: 'REMOTE DEVELOPER',
    Company: 'Upwork | Fiverr, USA',
  },
];
function Experience() {
  return (
    <div className="container_exp">
      <h1 id="experience" data-aos="fade-up" data-aos-delay="200">
        Experience
      </h1>
      <VerticalTimeline>
        {companies.map((Company) => {
          return (
            <>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background:
                    'linear-gradient(0deg, #F9629F 0%, rgba(218, 157, 167, 1) 100%)',
                  color: '#fff',
                }}
                contentArrowStyle={{ borderRight: '7px solid  gray' }}
                date={Company.duration}
                iconStyle={{
                  background:
                    'radial-gradient(circle, rgba(218, 157, 167, 1) 0%, rgba(230, 45, 76, 1) 100%)',
                  color: '#fff',
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
