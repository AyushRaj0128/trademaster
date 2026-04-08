import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/ayush.png"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Ayush Raj</h4>
          <h6>Founder & CEO, Trademaster</h6>
        </div>
        <div className="col-6 p-3">
          <p>
           Passionate Computer Science student and Full Stack MERN Developer focused on building impactful, scalable, and user-centric digital platforms. Dedicated to creating innovative fintech and AI-driven solutions, while actively contributing to open-source projects and collaborating with the global developer community.
          </p>
          <p>
             Member of the Open Source Connect India (OSCI) and the Open Source Software for India (OSSI) communities, contributing to various open-source projects and initiatives. Additionally, I am an active participant in the Student Mentorship and Advisory Committee
            
          </p>
                   
                 
            <p> Connect on <a href="www.linkedin.com/in/
ayush-raj-14075931b
">LinkeDln</a> / <a href="https://github.com/AyushRaj0128">Github</a> /{" "}
            <a href="https://drive.google.com/file/d/10d5y0OB4BtoYZrzc69hszWhVD3hsF8iL/view?usp=sharing">Resume</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;