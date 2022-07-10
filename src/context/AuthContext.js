import React, {createContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import validityToken from "../helpers/validityToken";
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const history = useHistory()
    const [auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending'
    });

    useEffect(() => {
        const jwt = localStorage.getItem("token")
        if (jwt && validityToken(jwt)) {
            async function getUserData(jwt) {
                try {
                    const userData = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${jwt}`,
                            }
                        })
                    toggleAuth({
                        isAuth: true,
                        user: {
                            username: userData.data.username,
                            email: userData.data.email,
                            id: userData.data.id,
                        },
                        status: 'done'
                    });
                } catch (e) {
                    console.error(e)
                    localStorage.clear();
                }
            }
            getUserData(jwt);
        } else {
            toggleAuth({
                isAuth: false,
                user: null,
                status: 'done'
            })
        }
    }, []);

    function login(jwtToken) {
        localStorage.setItem('token', jwtToken);
        getData(jwtToken);
    }

    function logout() {
        localStorage.clear();
        toggleAuth({isAuth: false, user: null, status: 'done'});
        history.push('/');
    }

    async function getData(token) {
        try {
            const userData = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                })
            toggleAuth({
                isAuth: true,
                user: {
                    username: userData.data.username,
                    email: userData.data.email,
                    id: userData.data.id,
                },
                status: 'done'
            });
            history.push("/barbeque-score");
        } catch (e) {
            console.error();
            localStorage.clear();
        }
    }

    const contextData = {
        isAuth: auth.isAuth,
        login: login,
        logout: logout,
        user: auth.user,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === "done" && children}
            {auth.status === "pending" && <p>Loading.....</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;