import React from "react";

const Skills = () => {
  return (
    <div className="skills">
      <span className="title">Skills</span>
      <div className="content">
        <div className="skillfrontend">
          <p>Front-end</p>
          <ul>
            <li>
              Basic
              <ul>
                <li>HTML5, CSS3 (Flexbox, Grid...)</li>

                <li>CSS methodologies: BEM,...</li>

                <li>CSS preprocessor: SASS</li>

                <li>
                  Solid understanding of JavaScript concepts: Promise,
                  async/await, generator function, DOM manipulation...
                </li>

                <li>Mobile-First Web Design</li>

                <li>Have knowledge of color theory, typography</li>
              </ul>
            </li>

            <br />

            <li>
              ReactJS
              <ul>
                <li>
                  Solid understanding of React concepts: Virtual DOM, Component
                  lifecycle, PureComponent, Hooks,...
                </li>

                <li>Deep understanding about Immutability in Redux, React</li>

                <li>
                  Have experience optimizing React performance (by using
                  PureComponent, React.memo, memoization, restructuring
                  components...)
                </li>

                <li>
                  ReactJS middlewares &amp; libraries: redux-thunk, redux-saga,
                  styled-components,...
                </li>

                <li>Others: Gatsby...</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="contentwrapper">
          <div className="commonknowledge">
            <p>Common knowledge</p>
            <ul>
              <li>Understanding about OOP</li>

              <li>Agile, Scrum</li>

              <li>SOLID principles</li>

              <li>RESTful API</li>

              <li>Git</li>

              <li>Preferred editor: VSCode</li>
            </ul>
          </div>
          <div className="skillbackend">
            <p>Back-end</p>
            <ul>
              <li>java: JPA, MVC,...</li>

              <li>Database: MySQL, MongoDB</li>
            </ul>
          </div>
          <div className="softskill">
            <p>Soft skill</p>
            <ul>
              <li>Good at researching new technologies</li>

              <li>Good communication with teammates</li>

              <li>High responsibility</li>

              <li>Positive thinking</li>

              <li>English documents reading</li>

              <li>Basic English communication</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
