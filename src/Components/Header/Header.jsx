import React, { useState } from 'react';
import { CiBellOn, CiSearch } from 'react-icons/ci';
import { FaUsers } from 'react-icons/fa';
import { GoHomeFill, GoVideo } from 'react-icons/go';
import { IoMdSettings } from 'react-icons/io';
import { LuStore } from 'react-icons/lu';
import { PiMessengerLogoLight } from 'react-icons/pi';
import { logout } from '../../firebase';
import logo_facebook from '../../assets/logo_facebook.png';
import profile from '../../assets/profile.jpg';
import './Header.css';

const links = [
    <GoHomeFill size={'1.5rem'} />,
    <CiBellOn size={'1.5rem'} />,
    <GoVideo size={'1.5rem'} />,
    profile,
    <LuStore size={'1.5rem'} />,
    <FaUsers size={'1.5rem'} />,
    <PiMessengerLogoLight size={'1.5rem'} />
]

const Header = () => {

    const [active, setActive] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSignOut = () => {
        try {
            logout();
            console.log('Signing out...');
            setShowDropdown(false);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };
    return (
        <div className="header-container">

            {/* logo wrapper  */}
            <div className="logo-wrapper">
                <a href="/"><img className="logo-img" src={logo_facebook} alt="facebook logo" /></a>

                <form className="search-form">
                    <input className="search-input" type="text" placeholder='Search Facebook' />
                    <button className="search-button" type='submit'><CiSearch size={'1.5rem'} /></button>
                </form>
            </div>


            {/* navigation bar  */}
            <div className="nav-bar">
                {
                    links?.map((item, index) => {
                        if (index === 3) {
                            return <button key={index} onClick={() => setActive(index)} className="profile-button"><img className="profile-img" src={item} alt="profile" /></button>
                        } else {
                            return (
                                <button key={index} onClick={() => setActive(index)} className={`nav-button ${active === index ? 'active' : ''}`}>{item}</button>
                            )
                        }
                    })
                }
            </div>

            <div className="settings-dropdown">
                <button 
                    className="settings-button" 
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <IoMdSettings size={'1.5rem'} color='#73767b' />
                </button>
                
                {showDropdown && (
                    <div className="dropdown-menu">
                        <button className="dropdown-item" onClick={handleSignOut}>
                            Sign Out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;