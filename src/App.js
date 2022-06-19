import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";
import Wrapper from "./components/wrapper/Wrapper";
import {Link} from "react-router-dom";
import logo from'../src/assets/images/BBQ logo.png'


function App() {
    return (
        <>
            <div className="background-image">
                <div className="background-overlay">
                    <Wrapper>
                        <Header/>
                        <MainContent/>
                    </Wrapper>
                    <Link to="/">
                      <span className="logo-container"><img src={logo} alt="logo"/></span>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default App;
