import React from 'react';
import './CommitteeMembers.css';
import gurujiImage from '../assets/photo5.jpg';
import member2Image from '../assets/photo5.jpg';
import member3Image from '../assets/photo5.jpg';

const CommitteeMembers = () => {
    return (
        <div className="committee-container">
            <h1 className="committee-title">Committee Members</h1>
            <p className="committee-subtitle">🪔 Dedicated to Seva and Samarpan 🪔</p>

            <div className="members-wrapper">
                <div className="member-card">
                    <img src={gurujiImage} alt="Shri Guru Prakash Ji" className="member-photo" />
                    <h2 className="member-name">Shri Guru Prakash Ji</h2>
                    <p className="member-role">Founder & Head</p>
                    <p className="member-phone">+91 98765 43210</p>
                    <p className="member-email">guruprakash@example.com</p>
                </div>

                <div className="member-card">
                    <img src={member2Image} alt="Shri Member 2" className="member-photo" />
                    <h2 className="member-name">Shri Member 2</h2>
                    <p className="member-role">Co-Founder</p>
                    <p className="member-phone">+91 91234 56789</p>
                    <p className="member-email">member2@example.com</p>
                </div>

                <div className="member-card">
                    <img src={member3Image} alt="Shri Member 3" className="member-photo" />
                    <h2 className="member-name">Shri Member 3</h2>
                    <p className="member-role">Secretary</p>
                    <p className="member-phone">+91 99887 66554</p>
                    <p className="member-email">member3@example.com</p>
                </div>
            </div>
        </div>
    );
};

export default CommitteeMembers;
