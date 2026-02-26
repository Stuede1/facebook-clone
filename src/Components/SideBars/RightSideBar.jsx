import React from 'react';
import { FaUsers } from 'react-icons/fa';
import './RightSideBar.css';

const contacts = [
    {
        name: 'Olivia johnson',
        profile: '/contact_1.jpg'
    },
    {
        name: 'Emily brown',
        profile: '/contact_2.jpg'
    },
    {
        name: 'sophia mortinez',
        profile: '/contact_3.jpg'
    },
    {
        name: 'Jocob Harries',
        profile: '/contact_4.jpg'
    },
    {
        name: 'Olivia johnson',
        profile: '/contact_1.jpg'
    },
    {
        name: 'Emily brown',
        profile: '/contact_2.jpg'
    },
    {
        name: 'sophia mortinez',
        profile: '/contact_3.jpg'
    },
    {
        name: 'Jocob Harries',
        profile: '/contact_4.jpg'
    },
]

const RightSideBar = () => {
    return (
        <div className='right-sidebar'>

            <div className="right-sidebar-content">
                {/* suggested  */}
                <div className='suggested-section'>
                    <h4 className='suggested-title'>suggested</h4>
                    <div className='suggested-image-container'>
                        <img className='suggested-image' src="/groups.jpg" alt="suggested" />
                        <div className='suggested-overlay'>

                            <button className='groups-button'><span className='groups-icon'><FaUsers size={'1.5rem'} color='#73767b' /></span> groups</button>
                            <p className='groups-description'>New ways to find and join communities.</p>
                            <button className='find-groups-button'>find your groups</button>
                        </div>
                    </div>
                </div>


                {/* contacts wrapper  */}
                <div className="contacts-section">
                    <h4 className='contacts-title'>contact</h4>

                    <div className="contacts-list">
                        {
                            contacts?.map((item, index) => (
                                <div key={index} className='contact-item'>
                                    <img className='contact-avatar' src={item?.profile} alt={item?.name} />
                                    <h4 className='contact-name'>{item?.name}</h4>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RightSideBar;