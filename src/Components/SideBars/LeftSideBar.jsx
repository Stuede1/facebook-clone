import React from 'react';
import './LeftSideBar.css';


const services = [
    {
        name: 'minsara vithangage',
        image: '/profile.jpg',
    },
    {
        name: 'friends',
        image: '/friends.png',
    },
    {
        name: 'saved',
        image: '/saved.png',
    },
    {
        name: 'memories',
        image: '/memories.png',
    },
    {
        name: 'video',
        image: '/video.png',
    },
    {
        name: 'events',
        image: '/events.png',
    },
    {
        name: 'marketplace',
        image: '/marketplace.png',
    },
    {
        name: 'gaming video',
        image: '/gaming_video.png',
    },
    {
        name: 'support',
        image: '/support.png',
    },
    {
        name: 'see more',
        image: '/down_arrow.png',
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
                            <img className="community-avatar" src={'/group_1.jpg'} alt="figma designers community" />
                            <h4 className="community-name">figma designers community</h4>
                        </div>
                        <div className="community-item">
                            <img className="community-avatar" src={'/group_2.png'} alt="java q and a" />
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