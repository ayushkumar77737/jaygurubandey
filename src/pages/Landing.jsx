import { useEffect, useState } from "react"; // ✅ add useState
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import "./Landing.css";
import landingImage from "../assets/landing.webp"; // ✅ image import

const Landing = () => {
    const navigate = useNavigate();
    const [animate, setAnimate] = useState(false); // ✅ animation state

    useEffect(() => {
        // ✅ trigger animation on mount
        setAnimate(true);

        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/home", { replace: true });
            }
        });

        return () => unsub();
    }, [navigate]);

    /* 🔒 SECURITY: Disable Inspect & Right Click */
    useEffect(() => {
        const disableRightClick = (e) => e.preventDefault();

        const disableInspectKeys = (e) => {
            if (e.key === "F12") e.preventDefault();

            if (
                e.ctrlKey &&
                e.shiftKey &&
                ["I", "J", "C"].includes(e.key.toUpperCase())
            ) {
                e.preventDefault();
            }

            if (e.ctrlKey && e.key.toUpperCase() === "U") {
                e.preventDefault();
            }
        };

        document.addEventListener("contextmenu", disableRightClick);
        document.addEventListener("keydown", disableInspectKeys);

        return () => {
            document.removeEventListener("contextmenu", disableRightClick);
            document.removeEventListener("keydown", disableInspectKeys);
        };
    }, []);

    return (
        <div className={`landing ${animate ? "animate" : ""}`}>
            <div className="landing-container">
                {/* ✅ Image added above Welcome */}
                <img
                    src={landingImage}
                    alt="Guruji spiritual website landing page"
                    className="landing-image"
                />
                <h1>Welcome</h1>

                <p>
                    Jai Gurubande is a sacred digital space created for seekers of peace, purpose, and inner growth.
                    This platform brings devotees, seekers, and visitors closer to the divine teachings of Guruji and the serene life of the ashram. Whether you are beginning your spiritual journey or deepening your practice, Jai Gurubande offers a calm and welcoming place to learn, reflect, and stay connected.
                </p><br></br>

                <p>
                    Through this website, you can experience soulful satsang sessions, devotional bhajans, and daily spiritual guidance that uplift the heart and calm the mind. Stay updated with upcoming programs, special events, sacred dates, and live spiritual gatherings, so you remain connected with the Guruji community wherever you are.
                </p><br></br>

                <p>
                    Explore the beauty of ashram life and the global mission of Guruji.
                    Discover inspiring blogs, divine moments, photo galleries, heartfelt testimonials, books, international centers, and community initiatives that reflect devotion, service, and unity across the world.
                </p><br></br>

                <p>
                    Jai Gurubande is designed to be simple, pure, and user-friendly for people of all age groups.
                    By creating an account, you can personalize your spiritual journey, follow meaningful updates, participate more actively in programs, and stay spiritually connected through one trusted and peaceful platform
                </p><br></br>

                <div className="landing-actions">
                    <a href="/login" className="login">Login</a>
                    <a href="/register" className="register">Register</a>
                </div>
            </div>
        </div>
    );
};

export default Landing;