import React from "react";
import './App.css';
import {Header} from "./components/Header";
import {FirstScreen} from "./components/FirstScreen";
import {WhyWeSection} from "./components/WhyWeSection";
import {WhatIsIt} from "./components/WhatIsIt";
import {AboutSkills} from "./components/AboutSkills";
import {ComparisonSection} from "./components/ComparisonSection";

export const App = () => {
    return (
        <div className={'App'}>
            <Header/>
            <FirstScreen/>
            <WhyWeSection/>
            <WhatIsIt/>
            <AboutSkills/>
            <ComparisonSection/>
        </div>
    );
}
