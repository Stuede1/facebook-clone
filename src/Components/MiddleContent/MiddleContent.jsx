import React from 'react';
import { FcGallery } from 'react-icons/fc';
import { GrEmoji } from 'react-icons/gr';
import { MdVideoCall } from 'react-icons/md';
import stories_1 from '../../assets/stories_1.jpg';
import stories_2 from '../../assets/stories_2.jpg';
import stories_3 from '../../assets/stories_3.jpg';
import stories_4 from '../../assets/stories_4.jpg';
import stories_5 from '../../assets/stories_5.jpg';
import profile_1 from '../../assets/profile_1.jpg';
import profile from '../../assets/profile.jpg';
import content_1 from '../../assets/content_1.jpg';
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
        profile: profile,
        name: 'Dong',
        title: 'Summer is Coming',
        content: content_1
    },
    {
        profile: profile_1,
        name: 'Jason',
        title: 'Fall is Coming',
        content: content_1
    },
    {
        profile: profile,
        name: 'Jessica',
        title: 'Spring is Coming',
        content: content_1
    },
]

const MiddleContent = () => {
    return (
        <div className='middle-content-container'>

            <div className="content-wrapper">

                <div className="main-content">

                    {/* top  */}
                    <div className="stories-section">
                        <div className="stories-header">
                            <h4 className='stories-title'>stories</h4>
                            <button className='see-all-btn'>see all</button>
                        </div>

                        {/* stories wrapper  */}
                        <div className="stories-wrapper">
                            {
                                stories?.map((item, index) => (
                                    <div key={index} className='story-item'>
                                        <img className='story-image' src={item?.story} alt={item?.name} />
                                        <h4 className='story-name'>{item?.name}</h4>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* middle  */}
                    <div className="post-creation">
                        <div className="post-input-wrapper">
                            <img className='profile-image' src={profile} alt="profile image" />
                            <form className='post-input-form'>
                                <input className='post-input' type="text" placeholder='What is on your mind, Minsara?' />
                            </form>
                        </div>

                        <div className="post-actions">
                            <div>
                                <button className='action-btn'><MdVideoCall size={'2rem'} color='orange' /> live video</button>
                            </div>
                            <div>
                                <button className='action-btn'><FcGallery size={'2rem'} color='orange' /> photo/video</button>
                            </div>
                            <div>
                                <button className='action-btn'><GrEmoji size={'2rem'} color='orange' /> felling/activity</button>
                            </div>
                        </div>
                    </div>



                    {/* bottom  */}
                    <div className='posts-section'>
                        {
                            contents?.map((item, index) => (
                                <div key={index} className='post-item'>
                                    <div>
                                        <div className="post-header">
                                            <div className="post-author-info">
                                                <img className='post-author-image' src={item?.profile} alt={item?.name} />
                                                <div className="post-author-details">
                                                    <h4 className='post-author-name'>{item?.name}</h4>
                                                    <span className='post-time'>{5 + index} min</span>
                                                </div>
                                            </div>
                                            <h3 className='post-title'>{item?.title}</h3>
                                        </div>

                                        <div>
                                            <img className='post-content-image' src={item?.content} alt={item?.title} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MiddleContent;