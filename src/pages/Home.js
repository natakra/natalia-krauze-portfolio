import React from "react";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Natalia !</h2>
        <div className="prompt">
          <p>A Computer Science student passionate about programming</p>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, Java Script, JQuery, BootStrap, ReactJS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              PHP, MySQL, Firebase
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
