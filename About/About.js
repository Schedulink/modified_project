import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="ab">
      {}
      <div className="about-container">
        <h1>ABOUT</h1>
        <div className="point">
          <p>
            <h1>Welcome to the Schedulink!</h1> Our application is designed
            to help you efficiently create and manage your schedules.
            A timetable management system for colleges and universities.
            It helps schedule their organization's timetable.
            Using Schedulink, you can easily view and compare
            different schedules to find the one that works best for you.
            With our application, you can input your preferences,
            constraints, and courses, and we'll do the hard work of generating
            timetables for you.
            Schedulink started off as a solution to help
            organizations generate their timetable with ease and maximum
            efficiency, thus saving valuable time.
            We're committed to providing you with a seamless
            scheduling experience. If you have any questions or feedback, please
            feel free to contact us.
          </p>
        </div>
        <h2>Contact Us</h2>
        <div className="contact-section">
          <div className="contact-box">
            <h1>ADDRESS</h1>
            <p>Sardar Patel Road</p>
            <p>Anna University</p>
            <p>Chennai - 600 025</p>
            <p>Tamil Nadu</p>
          </div>
          <div className="contact-box">
            <h1>EMAIL</h1>
            <p>Admissions: dircfa@annauniv.edu</p>
            <p>Administration: registrar@annauniv.edu</p>
            <p>Examinations: acoeud@annauniv.edu</p>
            <p>Student Affairs: dsa@annauniv.edu</p>
          </div>
          <div className="contact-box">
            <h1>PHONE</h1>
            <p>Admissions: 044 - 2235 8314</p>
            <p>Examinations: 044 - 2235 7295</p>
            <p>Examinations: 044 - 2235 7853 (ACoE)</p>
            <p>Student Affairs: 044 - 2235 7080</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;