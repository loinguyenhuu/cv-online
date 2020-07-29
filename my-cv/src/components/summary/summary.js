import React from "react";
import "./summary.scss";

const Summary = () => {
  return (
    <div className="summary">
      <span className="title">Summary</span>
      <div className="content">
          <div className="contentsummary">
        Hi, I'm Pham Van Khanh, a Front-end developer with 3 years of
        experience.
        <br />
        My main skills: ReactJS, Mobile-First Web Design
        <br />
        I especially like learning JavaScript (and it's libraries), TypeScript,
        finding ways to optimize and increase performance
        <br />
        I like (deep) talking and chilling with other people. I was excited by
        the colorful things.
        <br />
        My hobbies: reading, playing guitar, singing (but not really good)...
        </div>
      </div>
    </div>
  );
};

export default Summary;
