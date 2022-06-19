import React from 'react';
import './Wrapper.css'

function Wrapper({children}) {
    return (
        <div className="outer-container">
            <div className="inner-container">
                {children}
            </div>
        </div>
    );
}

export default Wrapper;