import React from 'react';
import profile from '../../assets/profile.jpg';
import friends from '../../assets/friends.png';
import saved from '../../assets/saved.png';
import memories from '../../assets/memories.png';
import video from '../../assets/video.png';
import events from '../../assets/events.png';
import marketplace from '../../assets/marketplace.png';
import gaming_video from '../../assets/gaming_video.png';
import support from '../../assets/support.png';
import down_arrow from '../../assets/down_arrow.png';
import group_1 from '../../assets/group_1.jpg';
import group_2 from '../../assets/group_2.png';
import './LeftSideBar.css';


const services = [
    {
        name: 'minsara vithangage',
        image: profile,
    },
    {
        name: 'friends',
        image: friends,
    },
    {
        name: 'saved',
        image: saved,
    },
    {
        name: 'memories',
        image: memories,
    },
    {
        name: 'video',
        image: video,
    },
    {
        name: 'events',
        image: events,
    },
    {
        name: 'marketplace',
        image: marketplace,
    },
    {
        name: 'gaming video',
        image: gaming_video,
    },
    {
        name: 'support',
        image: support,
    },
    {
        name: 'see more',
        image: down_arrow,
    },
];

let date = new Date();
date = date.getFullYear();

const LeftSideBar = () => {
    return (
        <div className="sidebar-container">

            <div className="sidebar-content">
                <div className="sidebar-section">

                    {/* services  */}
                    <div className="services-section">
                        {
                            services?.map((item, index) => (
                                <div key={index} className="service-item">
                                    <img className="service-icon" src={item?.image} alt={item?.name} />
                                    <button className="service-button">{item?.name}</button>
                                </div>
                            ))
                        }
                    </div>

                    {/* community  */}
                    <div className="community-section">
                        <h4 className="section-title">your shortcuts</h4>
                        <div className="community-item">
                            <img className="community-avatar" src={group_1} alt="figma designers community" />
                            <h4 className="community-name">figma designers community</h4>
                        </div>
                        <div className="community-item">
                            <img className="community-avatar" src={group_2} alt="java q and a" />
                            <h4 className="community-name">java q and a</h4>
                        </div>
                    </div>


                </div>


                <div className="footer-text">
                    <div className="footer-links">
                        <span className="footer-link">Privacy</span>
                        <span className="footer-link">Terms</span>
                        <span className="footer-link">Advertising</span>
                        <span className="footer-link">Ad Choices</span>
                        <span className="footer-link">Cookies</span>
                        <span className="footer-link">More</span>
                    </div>
                    <div className="footer-copyright">
                        Meta &copy; {date}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideBar;