import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
export default function NavLink(props) {
    return (
        <div className={props.specialBtn ? 'nav-links bl-button' : 'nav-links'}>
            <Link to={props.path} >{props.title}</Link>
        </div>
    )
}
