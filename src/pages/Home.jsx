import React from 'react';
import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <>
            Home
            <Link to='/movies'>Movies</Link>
            <Link to='/series'>Series</Link>
        </>
    )
}