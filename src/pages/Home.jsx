import React from 'react';
import {Link} from "react-router-dom";
import {PageTitle} from "../components/PageTitle";
import "./home.css"
import placeholder from "../placeholder.png";

export const Home = () => {
    return (
        <>
            <PageTitle title="Popular Titles"/>
            <div className="ds-home-page">
                <PlaceHolder title="MOVIES" subtitle="Popular Movies" to="/movies"/>
                <PlaceHolder title="SERIES" subtitle="Popular Series" to="/series"/>
            </div>
        </>
    )
}

const PlaceHolder = props => {
    const {title, subtitle, to} = props;

    return (
        <Link className="ds-placeholder-container-outer" to={to}>
            <div className="ds-placeholder-container">
                <img src={placeholder} alt="placeholder image" className="ds-placeholder-image"/>
                <p className="ds-placeholder-text">{title}</p>
            </div>
            <p>{subtitle}</p>
        </Link>
    );
};