import React from 'react';
import {PageTitle} from "../components/PageTitle";
import {Entries} from "../components/Entries";

export const Series = () => {
    return (
        <>
            <PageTitle title="Popular Series"/>
            <Entries filterBy="series" />
        </>
    )
}