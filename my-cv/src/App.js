import React from "react";
import "./App.scss";
import  SectionInformation  from './components/sectionInformation/sectionInfomation.js'
import  Summary from './components/summary/summary.js'
import Skills from './components/skills/skills'
import Experiences from './components/experiences/experiences'
import Education from './components/education/education'

function App() {
  return (
    <>
    <SectionInformation/>
    <Summary/>
    <Skills/>
    <Experiences/>
    <Education/>
    </>
  );
}

export default App;
