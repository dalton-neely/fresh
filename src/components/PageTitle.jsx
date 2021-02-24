import React from 'react';
import "./page-title.css";

export const PageTitle = props => {
    const {title} = props;

    return (
        <div className="well well-sm ds-title-well">
            {title}
        </div>
    );
};