import React, { useState, useEffect } from 'react';
import './CommitteeMembers.css';
import member1Image from '../assets/photo5.jpg';
import member2Image from '../assets/photo6.jpg';
import member3Image from '../assets/photo5.jpg';
import member4Image from '../assets/photo6.jpg';
import member5Image from '../assets/photo5.jpg';
import member6Image from '../assets/photo6.jpg';

const members = [
    { name: "Shri Guru Prakash Ji", role: "Founder & Head", phone: "+91 98765 43210", email: "guruprakash@example.com", image: member1Image },
    { name: "Shri Member 2", role: "Co-Founder", phone: "+91 91234 56789", email: "member2@example.com", image: member2Image },
    { name: "Shri Member 3", role: "Secretary", phone: "+91 99887 66554", email: "member3@example.com", image: member3Image },
    { name: "Shri Member 4", role: "Treasurer", phone: "+91 90123 45678", email: "member4@example.com", image: member4Image },
    { name: "Shri Member 5", role: "Event Coordinator", phone: "+91 92345 67890", email: "member5@example.com", image: member5Image },
    { name: "Shri Member 6", role: "Volunteer Head", phone: "+91 93456 78901", email: "member6@example.com", image: member6Image },
    { name: "Shri Member 7", role: "Community Outreach", phone: "+91 94567 89012", email: "member7@example.com", image: member1Image },
    { name: "Shri Member 8", role: "Cultural Coordinator", phone: "+91 95678 90123", email: "member8@example.com", image: member2Image },
    { name: "Shri Member 9", role: "Technical Support", phone: "+91 96789 01234", email: "member9@example.com", image: member3Image },
    { name: "Shri Member 10", role: "Public Relations", phone: "+91 97890 12345", email: "member10@example.com", image: member4Image },

];

const CommitteeMembers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [animate, setAnimate] = useState(false);
    const cardsPerPage = 6;

    const totalPages = Math.ceil(members.length / cardsPerPage);
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentMembers = members.slice(indexOfFirstCard, indexOfLastCard);

    const goToNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    // ✅ Fix Option 3 – Add lightweight delay for smoother transition
    useEffect(() => {
        const delay = setTimeout(() => {
            setAnimate(true);
            const timer = setTimeout(() => setAnimate(false), 500); // matches CSS animation duration
            return () => clearTimeout(timer);
        }, 200); // 0.2s delay to let container fade first

        return () => clearTimeout(delay);
    }, [currentPage]);

    return (
        <div className="committee-container">
            <h1 className="committee-title">Committee Members</h1>
            <p className="committee-subtitle">🪔 Dedicated to Seva and Samarpan 🪔</p>

            <div className={`members-wrapper ${animate ? 'fade-page' : ''}`}>
                {currentMembers.map((member, index) => (
                    <div className="member-card" key={index}>
                        <img src={member.image} alt={member.name} className="member-photo" />
                        <h2 className="member-name"><strong>Name :</strong> {member.name}</h2>
                        <p className="member-role"><strong>Role :</strong> {member.role}</p>
                        <p className="member-phone"><strong>Phone :</strong> {member.phone}</p>
                        <p className="member-email"><strong>Email :</strong> {member.email}</p>
                    </div>
                ))}
            </div>

            {/* Prev / Next Pagination */}
            <div className="pagination">
                <button className="page-btn" onClick={goToPrev} disabled={currentPage === 1}>
                    ← Prev
                </button>
                <span className="page-info">
                    Page {currentPage} of {totalPages}
                </span>
                <button className="page-btn" onClick={goToNext} disabled={currentPage === totalPages}>
                    Next →
                </button>
            </div>
        </div>
    );
};

export default CommitteeMembers;
