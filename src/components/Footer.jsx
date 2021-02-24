import React from 'react';
import "./footer.css";
import {DEMO_STREAMING} from "../constants";
import facebook from "../social/facebook-white.svg";
import twitter from "../social/twitter-white.svg";
import instagram from "../social/instagram-white.svg";
import apple from "../store/app-store.svg";
import google from "../store/play-store.svg";
import microsoft from "../store/windows-store.svg";

export const Footer = () => {

    return (
        <div className='container-fluid ds-footer-container'>
            <div className='row ds-footer-nav-row'>
                <ul className='ds-footer-nav'>
                    <li>Home</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Collection Statement</li>
                    <li>Help</li>
                    <li>Manage Account</li>
                </ul>
            </div>
            <div className='row'>
                Copyright &#169; 2016 {DEMO_STREAMING}. All Rights Reserved.
            </div>
            <div className='row ds-footer-assets-row'>
                <div className='col-xs-6 ds-social'>
                    <img src={facebook}  alt="facebook logo"/>
                    <img src={twitter} alt="twitter logo"/>
                    <img src={instagram} alt="instagram logo"/>
                </div>
                <div className='col-xs-6 ds-store'>
                    <img src={apple}  alt="apple store logo"/>
                    <img src={google} alt="google store logo"/>
                    <img src={microsoft} alt="microsoft store logo"/>
                </div>
            </div>
        </div>
    );
};