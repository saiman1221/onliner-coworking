import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {FirstScreen} from "./components/FirstScreen/FirstScreen";
import {WhyWeSection} from "./components/WhyWeSection/WhyWeSection";

export const App = () => {
    return (
        <div className={'App'}>
            <Header/>
            <FirstScreen/>
            <WhyWeSection/>
        </div>
    );
}
