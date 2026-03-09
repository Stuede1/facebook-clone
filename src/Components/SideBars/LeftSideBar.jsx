import React from 'react';
import profile from '../../assets/profile.avif';
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

const LeftSideBar = ({ user }) => {
    const getDisplayName = () => {
        if (user?.displayName) return user.displayName;
        if (user?.email) {
            const emailName = user.email.split('@')[0];
            return emailName.charAt(0).toUpperCase() + emailName.slice(1);
        }
        return 'User';
    };

    const services = [
        { name: getDisplayName(), image: profile },
        { name: 'friends', image: friends, disabled: true },
        { name: 'saved', image: saved, disabled: true },
        { name: 'memories', image: memories, disabled: true },
        { name: 'video', image: video, disabled: true },
        { name: 'events', image: events, disabled: true },
        { name: 'marketplace', image: marketplace, disabled: true },
        { name: 'gaming video', image: gaming_video, disabled: true },
        { name: 'support', image: support, disabled: true },
        { name: 'see more', image: down_arrow, disabled: true },
    ];

    return (
        <div className="sidebar-container">
            <div className="sidebar-content">
                <div className="sidebar-section">
                    <div className="services-section">
                        {services.map((item, index) => (
                            <div key={index} className={`service-item ${item.disabled ? 'disabled' : ''}`}>
                                <img className="service-icon" src={item.image} alt={item.name} />
                                <button className="service-button" disabled={item.disabled}>{item.name}</button>
                            </div>
                        ))}
                    </div>

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
                        Meta &copy; {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideBar;