import React from 'react';
import './Button.css'

function Button({children, type, clickAction}) {
    return (
        <button
        type={type}
        onClick={clickAction}
        >
            {children}
        </button>
    );
}

export default Button;