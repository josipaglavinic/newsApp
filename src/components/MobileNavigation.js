import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import GeneralIcon from '../icons/news.svg';
import BusinessIcon from '../icons/business.svg';
import HealthIcon from '../icons/health.svg';
import ScienceIcon from '../icons/science.svg';
import SportsIcon from '../icons/sports.svg';
import TvIcon from '@material-ui/icons/Tv';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import './styles/mobileNavigation.scss';


const MobileNavigation = () => {

    return (
        <div className="mobile_nav">
            <div >
                <button
                    className="navigation_button"
                >
                    <HomeIcon alt="home_icon" className="navigation_icon" />
                    Home
                </button>
            </div>
            <div className="navigation_icons">
                <button className="navigation_button">
                    <img src={GeneralIcon} alt="general_icon" className="navigation_icon" />
                    General
                </button>
            </div>
            <div className="navigation_icons">
                <button className="navigation_button">
                    <img src={BusinessIcon} alt="bussine_icon" className="navigation_icon" />
                    Business
                </button>
            </div>
            <div className="navigation_icons" >

                <button className="navigation_button">
                    <img src={HealthIcon} alt="health_icon" className="navigation_icon" />
                    Health
                </button>
            </div>
            <div className="navigation_icons" >

                <button className="navigation_button">
                    <img src={ScienceIcon} alt="science_icon" className="navigation_icon" />
                    Science
                </button>
            </div>
            <div className="navigation_icons">

                <button className="navigation_button">
                    <img src={SportsIcon} alt="sports_icon" className="navigation_icon" />
                    Sports
                </button>
            </div>
            <div className="navigation_icons">

                <button className="navigation_button">
                    <TvIcon className="navigation_icon" />
                    Technology
                </button>
            </div>
            <div className="navigation_icons">
                <button className="navigation_button">
                    <BookmarkBorderIcon className="navigation_icon" />
                    Bookmarked
                </button>

            </div>
        </div>

    )
}

export default MobileNavigation;
