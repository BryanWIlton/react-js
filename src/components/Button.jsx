import React from "react";
import "./stylebutton.css";

export default (props) => {
    return (
        <button id={props.id} className={props.class}>{props.children}</button>
    )
};