import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import "./Landing.css";
import landingImage from "../assets/guruji.webp";

const Landing = () => {
    const navigate = useNavigate();
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) navigate("/home", { replace: true });
        });
        return () => unsub();
    }, [navigate]);

    useEffect(() => {
        const disableRightClick = (e) => e.preventDefault();
        const disableInspectKeys = (e) => {
            if (e.key === "F12") e.preventDefault();
            if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) e.preventDefault();
            if (e.ctrlKey && e.key.toUpperCase() === "U") e.preventDefault();
        };
        document.addEventListener("contextmenu", disableRightClick);
        document.addEventListener("keydown", disableInspectKeys);
        return () => {
            document.removeEventListener("contextmenu", disableRightClick);
            document.removeEventListener("keydown", disableInspectKeys);
        };
    }, []);

    return (
        <div className={`lp-root${animate ? " lp-root--animate" : ""}`}>

            {/* decorative background orbs */}
            <div className="lp-orb lp-orb--1" />
            <div className="lp-orb lp-orb--2" />
            <div className="lp-orb lp-orb--3" />

            <div className="lp-card">

                {/* top accent line */}
                <div className="lp-card__accent" />

                {/* image */}
                <div className="lp-img-wrap">
                    <div className="lp-img-ring" />
                    <img src={landingImage} alt="Guruji spiritual website landing page" className="lp-img" />
                </div>

                {/* badge */}
                <span className="lp-badge">✦ Official Digital Platform ✦</span>

                {/* heading */}
                <h1 className="lp-title">Welcome</h1>
                <div className="lp-title-rule">
                    <span className="lp-title-rule__line" />
                    <span className="lp-title-rule__gem">❖</span>
                    <span className="lp-title-rule__line" />
                </div>

                {/* subtitle */}
                <p className="lp-subtitle">
                    Jai Gurubande — A Sacred Space for Seekers of Peace, Purpose &amp; Inner Growth
                </p>

                {/* paragraphs */}
                <div className="lp-body">
                    <p>
                        This platform brings devotees, seekers, and visitors closer to the divine teachings of Guruji
                        and the serene life of the ashram. Whether you are beginning your spiritual journey or
                        deepening your practice, Jai Gurubande offers a calm and welcoming place to learn, reflect,
                        and stay connected.
                    </p>
                    <p>
                        Experience soulful satsang sessions, devotional bhajans, and daily spiritual guidance that
                        uplift the heart and calm the mind. Stay updated with upcoming programs, special events,
                        sacred dates, and live spiritual gatherings.
                    </p>
                    <p>
                        Explore the beauty of ashram life and the global mission of Guruji — inspiring blogs, divine
                        moments, photo galleries, heartfelt testimonials, books, international centers, and community
                        initiatives that reflect devotion, service, and unity.
                    </p>
                    <p>
                        By creating an account, you can personalize your spiritual journey, follow meaningful updates,
                        participate actively in programs, and stay connected through one trusted and peaceful platform.
                    </p>
                </div>

                {/* divider */}
                <div className="lp-divider">
                    <span className="lp-divider__gem">✦</span>
                </div>

                {/* actions */}
                <div className="lp-actions">
                    <a href="/login" className="lp-btn lp-btn--login">
                        <span className="lp-btn__icon">🙏</span> Login
                    </a>
                    <a href="/register" className="lp-btn lp-btn--register">
                        <span className="lp-btn__icon">✨</span> Register
                    </a>
                </div>

                <p className="lp-footer-note">Jai Gurubande · Sanatan Dharma · Seva · Satsang</p>
            </div>
        </div>
    );
};

export default Landing;