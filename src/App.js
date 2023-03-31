import React from "react";
import './App.css';
import {Header} from "./components/Header";
import {FirstScreen} from "./components/FirstScreen";
import {WhyWeSection} from "./components/WhyWeSection";
import {WhatIsIt} from "./components/WhatIsIt";
import {AboutSkills} from "./components/AboutSkills";
import {ComparisonSection} from "./components/ComparisonSection";
import {PlusesOfWorking} from "./components/PlusesOfWorking";
import {Benefits} from "./components/Benefits";
import {TargetAudience} from "./components/TargetAudience";
import {Calculation} from "./components/Calculation";
import {Rates} from "./components/Rates";
import {Steps} from "./components/Steps";
import {Result} from "./components/Result";
import {Reviews} from "./components/Reviews";
import {Footer} from "./components/Footer";

export const App = () => {
    return (
        <div className={'App'}>
            <Header/>
            <FirstScreen/>
            <WhyWeSection/>
            <WhatIsIt/>
            <AboutSkills/>
            <ComparisonSection/>
            <PlusesOfWorking/>
            <Benefits/>
            <TargetAudience/>
            <Calculation/>
            <Rates/>
            <Steps/>
            <Result/>
            <Reviews/>
            <Footer/>
        </div>
    );
}
