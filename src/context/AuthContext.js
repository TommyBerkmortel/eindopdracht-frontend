import React, {createContext, useState} from "react";
import {useHistory} from "react-router-dom";


export const AuthContext = createContext({});


function AuthContextProvider({children}) {
    const history = useHistory()
    const [auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
    });

    function login() {
        console.log("Je bent ingelogd")
        toggleAuth({isAuth: true, user: null});
        history.push("/barbeque-score")
    }

    function logout() {
        console.log("Je bent uitgelogd")
        toggleAuth({isAuth: false, user: null});
    }


    const contextData = {
        isAuth: auth.isAuth,
        login: login,
        logout: logout,
        user: auth.user,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;