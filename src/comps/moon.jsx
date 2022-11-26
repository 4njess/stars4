import React from "react";
import './Sky.css';
import {ReactComponent as IconMoon} from '../icons/moon.svg';


function Moon() {
    return(
        <div className="Moon">
            <IconMoon height={100} width={100} fill={'#f7f5bc'}></IconMoon>
        </div>
    );
}

export default Moon;