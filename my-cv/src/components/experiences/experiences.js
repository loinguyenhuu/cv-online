import React from "react";

const Experiences = () => {
  return (
    <div className="experiences">
      <span className="title">Experiences</span>
      <div className="content">
        <div className="NTTDATA">
          <p>NTTDATA VIETNAM Co., Ltd</p>
          <ul>
            <li>Time: 05/2019 - Present</li>

            <li>Role: Front-end developer</li>

            <li>Technologies: ReactJS, HTML, CSS</li>

            <li>
              Project:
              <ul>
                <li>
                  AEON project (main project): UI banking card system with over
                  1000 pages.
                </li>
                <li>
                  DAIWA project: create component and complete page UI about
                  Banking system.
                </li>
                <li>
                  SHIGIRA project: introduction resort and hotel website at
                  Japan with reactJS .
                </li>
                <li>
                  INFINI project: booking and management the flight with redux,
                  ABEM, styled-component technical.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="ZAMO">
          <p>ZAMO LLC Company</p>
          <ul>
            <li>Time: 10/2018 - 04/2019</li>

            <li>Role: Fullstack developer </li>

            <li>Technologies: Java </li>

            <li>
              Project:
              <ul>
                <li>
                  Banking system: complete Front-end and Back-end for admin page
                  from design to API.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="ORIENT">
          <p>Orient Software Development Corp. Vietnam</p>
          <ul>
            <li>Time: 03/2018 - 06/2018</li>

            <li>Role: Intern Fullstack developer </li>

            <li>Technologies: Angular 4 and .NET Core</li>

            <li>
              project:
              <ul>
                <li>
                  HR system: management system CV between candidate and company,
                  management status for interview process.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
