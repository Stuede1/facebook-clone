import React from 'react';
import { FcGallery } from 'react-icons/fc';
import { GrEmoji } from 'react-icons/gr';
import { MdVideoCall } from 'react-icons/md';
import stories_1 from '../../assets/stories_1.jpg';
import stories_2 from '../../assets/stories_2.jpg';
import stories_3 from '../../assets/stories_3.jpg';
import stories_4 from '../../assets/stories_4.jpg';
import stories_5 from '../../assets/stories_5.jpg';
import profile from '../../assets/profile.jpg';
import profile_1 from '../../assets/profile_1.jpg';
import profile_2 from '../../assets/profile_2.jpg';
import profile_3 from '../../assets/profile_3.jpg';
import profile_4 from '../../assets/profile_4.jpg';
import content_1 from '../../assets/content_1.jpg';
import content_2 from '../../assets/content_2.jpg';
import content_3 from '../../assets/content_3.jpg';
import content_4 from '../../assets/content_4.jpg';
import './MiddleContent.css';

const stories = [
    {
        name: 'albert frank',
        story: stories_1,
    },
    {
        name: 'jenny marzia',
        story: stories_2,
    },
    {
        name: 'maria watt',
        story: stories_3,
    },
    {
        name: 'john carls',
        story: stories_4,
    },
    {
        name: 'Dong',
        story: stories_5,
    },
];

const contents = [
    {
        profile: profile_1,
        name: 'John Snow',
        title: 'Winter is Coming',
        content: content_1
    },
    {
        profile: profile_2,
        name: 'Dong',
        title: 'Summer is Coming',
        content: content_2
    },
    {
        profile: profile_3,
        name: 'Jason',
        title: 'Fall is Coming',
        content: content_3
    },
    {
        profile: profile_4,
        name: 'Jessica',
        title: 'Spring is Coming',
        content: content_4
    },
]

const MiddleContent = ({ user }) => {
    const date = new Date().getFullYear();
    
    return (
        <div className='middle-content-container'>
            <div className="content-wrapper">
                <div className="main-content">
                    <div className="stories-section">
                        <div className="stories-header">
                            <h4 className='stories-title'>stories</h4>
                            <button className='see-all-btn'>see all</button>
                        </div>
                        <div className="stories-wrapper">
                            {stories.map((item, index) => (
                                <div key={index} className='story-item'>
                                    <img className='story-image' src={item.story} alt={item.name} />
                                    <h4 className='story-name'>{item.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="post-creation">
                        <div className="post-input-wrapper">
                            <img className='profile-image' src={profile} alt="profile image" />
                            <form className='post-input-form'>
                                <input className='post-input' type="text" placeholder={`What is on your mind, ${user?.displayName || 'there'}?`} />
                            </form>
                        </div>
                        <div className="post-actions">
                            <button className='action-btn disabled' disabled><MdVideoCall size={'2rem'} color='orange' /> live video</button>
                            <button className='action-btn disabled' disabled><FcGallery size={'2rem'} color='orange' /> photo/video</button>
                            <button className='action-btn disabled' disabled><GrEmoji size={'2rem'} color='orange' /> felling/activity</button>
                        </div>
                    </div>

                    <div className='posts-section'>
                        {contents.map((item, index) => (
                            <div key={index} className='post-item'>
                                <div className="post-header">
                                    <div className="post-author-info">
                                        <img className='post-author-image' src={item.profile} alt={item.name} />
                                        <div className="post-author-details">
                                            <h4 className='post-author-name'>{item.name}</h4>
                                            <span className='post-time'>{5 + index} min</span>
                                        </div>
                                    </div>
                                    <h3 className='post-title'>{item.title}</h3>
                                </div>
                                <img className='post-content-image' src={item.content} alt={item.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleContent;