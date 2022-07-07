import React, {useContext, useState} from 'react';
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
import PopUp from "./components/popup/PopUp";
import ChangePassword from "./pages/changePassword/ChangePassword";
import ChangeEmail from "./pages/changeEmail/ChangeEmail";


function App() {
    const {isAuth} = useContext(AuthContext);
    const [popup, togglePopup] = useState(false);
    const [popupText, setPopupText] = useState('');

    return (
        <>
            <Header
                togglePopup={togglePopup}
                setPopupText={setPopupText}
            />

            <PopUp trigger={popup} setTrigger={togglePopup}>
                <h3>{popupText}</h3>
            </PopUp>

            <Wrapper>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>

                    <Route path="/barbeque-score">
                        {isAuth ? <BarbequeScore togglePopup={togglePopup} setPopupText={setPopupText}/> :
                            <Redirect to="/"/>}
                    </Route>

                    <Route path="/recepten">
                        {isAuth ? <Recepten/> : <Redirect to="/"/>}
                    </Route>

                    <Route path="/tips-tricks">
                        {isAuth ? <TipsTricks/> : <Redirect to="/"/>}
                    </Route>

                    <Route path="/changepassword">
                        {isAuth ? <ChangePassword/> : <Redirect to="/"/>}
                    </Route>

                    <Route path="/changeemail">
                        {isAuth ? <ChangeEmail/> : <Redirect to="/"/>}
                    </Route>

                    <Route path="/contact">
                        <Contact
                            togglePopup={togglePopup}
                            setPopupText={setPopupText}
                        />
                    </Route>

                    <Route path="/registratie">
                        <Registreren
                            togglePopup={togglePopup}
                            setPopupText={setPopupText}
                        />
                    </Route>

                    <Route path="/login">
                        <Login
                            togglePopup={togglePopup}
                            setPopupText={setPopupText}
                        />
                    </Route>


                </Switch>
            </Wrapper>
            <Logo/>

        </>
    );
}

export default App;
