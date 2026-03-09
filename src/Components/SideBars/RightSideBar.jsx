import React from 'react';
import { FaUsers } from 'react-icons/fa';
import profile_1 from '../../assets/profile_1.jpg';
import profile_2 from '../../assets/profile_2.jpg';
import profile_3 from '../../assets/profile_3.jpg';
import profile_4 from '../../assets/profile_4.jpg';
import contact_1 from '../../assets/contact_1.jpg';
import contact_2 from '../../assets/contact_2.jpg';
import contact_3 from '../../assets/contact_3.jpg';
import contact_4 from '../../assets/contact_4.jpg';
import groups from '../../assets/groups.jpg';
import './RightSideBar.css';

const RightSideBar = () => {
    const contacts = [
        { name: 'John', profile: profile_1 },
        { name: 'Dong', profile: profile_2 },
        { name: 'Jason', profile: profile_3 },
        { name: 'Jessica', profile: profile_4 },
        { name: 'Olivia', profile: contact_1 },
        { name: 'Emily', profile: contact_2 },
        { name: 'Sophia', profile: contact_3 },
        { name: 'Jacob', profile: contact_4 },
    ];

    return (
        <div className='right-sidebar'>
            <div className="right-sidebar-content">
                <div className='suggested-section'>
                    <h4 className='suggested-title'>suggested</h4>
                    <div className='suggested-image-container'>
                        <img className='suggested-image' src={groups} alt="suggested" />
                        <div className='suggested-overlay'>
                            <button className='groups-button'>
                                <span className='groups-icon'><FaUsers size={'1.5rem'} color='#73767b' /></span>
                                groups
                            </button>
                            <p className='groups-description'>New ways to find and join communities.</p>
                            <button className='find-groups-button disabled' disabled>find your groups</button>
                        </div>
                    </div>
                </div>

                <div className="contacts-section">
                    <h4 className='contacts-title'>contact</h4>
                    <div className="contacts-list">
                        {contacts.map((item, index) => (
                            <div key={index} className='contact-item'>
                                <img className='contact-avatar' src={item.profile} alt={item.name} />
                                <h4 className='contact-name'>{item.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;