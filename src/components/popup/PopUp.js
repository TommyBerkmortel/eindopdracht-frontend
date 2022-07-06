import React from 'react';
import './PopUp.js.css'

function PopUp(props) {
    return (props.trigger) ? (
        <div className="popup" >
            <div className="popup-inner">
                { props.children }
                <button className="close-button" type="button" onClick={() => props.setTrigger(false)}>
                    Sluit
                </button>
            </div>
        </div>
    ) : "";
}

export default PopUp;