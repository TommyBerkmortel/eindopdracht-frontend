import React, {useContext} from 'react';
import './App.css';
import Header from "./components/header/Header";
import Wrapper from "./components/wrapper/Wrapper";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import BarbequeScore from "./pages/barbeque-score/Barbeque-score";
import Recepten from "./pages/recepten/Recepten";
import TipsTricks from "./pages/Tips & Tricks/TipsTricks";
import Contact from "./pages/contact/Contact";
import Registreren from "./pages/registreren/Registreren";
import Login from "./pages/login/Login";
import Logo from "./components/logo/Logo";
import {AuthContext} from "./context/AuthContext";


function App() {
    const { isAuth } = useContext(AuthContext);
    return (
        <>
            <Header/>
            <Wrapper>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>

                    <Route path="/barbeque-score">
                        {isAuth ? <BarbequeScore/> : <Redirect to="/" />}
                    </Route>

                    <Route path="/recepten">
                        {isAuth ? <Recepten/> : <Redirect to="/" />}
                    </Route>

                    <Route path="/tips-tricks">
                        {isAuth ? <TipsTricks/> : <Redirect to="/" />}
                    </Route>

                    <Route path="/contact">
                        <Contact/>
                    </Route>

                    <Route path="/registratie">
                        <Registreren/>
                    </Route>

                    <Route path="/login">
                        <Login/>
                    </Route>
                </Switch>
            </Wrapper>
            <Logo/>

        </>
    );
}

export default App;
