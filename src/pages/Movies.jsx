import React from 'react';
import {PageTitle} from "../components/PageTitle";
import "./movies.css";
import {Entries} from "../components/Entries";

export const Movies = () => {
    return (
        <>
            <PageTitle title="Popular Movies"/>
            <Entries filterBy="movie" />
        </>
    )
}

