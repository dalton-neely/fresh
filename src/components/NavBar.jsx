import React from 'react';
import {DEMO_STREAMING} from "../constants";
import {Link} from "react-router-dom";
import "./nav-bar.css";

export const NavBar = () => {

    return (
        <div className="navbar navbar-default ds-navbar">
            <div className="container-fluid ds-navbar-container">
                <div className="navbar-header">
                    <Link className="navbar-brand ds-brand" to="/">
                        {DEMO_STREAMING}
                    </Link>
                </div>
                <button type="button" className="btn btn-default navbar-btn navbar-right ds-free-trial-button">Start your free trial</button>
                <p className="navbar-text navbar-right ds-log-in">Log in</p>
            </div>
        </div>
    );
};