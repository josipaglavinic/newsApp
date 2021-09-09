import React from 'react';
import '../components/styles/header.scss';

const Header = () => {
    return (
        <div className="header_container">
                <div className="header_text">
                    <span className="header_title1">Make MyNews your homepage</span>
                    <span className="header_titile2">Everyday discover what's trending on the internet</span>
                </div>
                <span className="header_buttons">
                    <button className="get_button"><span className="get_button_text">GET</span></button>
                    <button className="noThanks_button"> <span className="noThanks_button_text">No, thanks </span></button>
                </span>
            </div>
    )
}

export default Header;
