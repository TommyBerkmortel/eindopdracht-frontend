import React from 'react';
import './PopUp.js.css'
import closingIcon from '../../assets/icon/close.png'

function PopUp(props) {

    function onClickHandler() {
        props.setTrigger(false);
        console.clear();
    }

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                {props.children}
                <button className="close-button" type="button" onClick={() => onClickHandler()}>
                    <img className="closing-icon" src={closingIcon} alt="closing icon"/>
                </button>
            </div>
        </div>
    ) : "";
}

export default PopUp;