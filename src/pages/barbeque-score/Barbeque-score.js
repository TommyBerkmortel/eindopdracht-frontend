import React, {useContext} from 'react';
import './Barbeque-score.css'
import {AuthContext} from "../../context/AuthContext";

function BarbequeScore() {
    const {user} = useContext(AuthContext);
    const apiKey ='aedc56390099fc6f9692b80ac58be0bb';
    console.log(user)
    return (
        <div>
            <section className="content">
                <h1>Barbeque-score</h1>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>ID: {user.id}</p>
            </section>
        </div>
    );
}

export default BarbequeScore;