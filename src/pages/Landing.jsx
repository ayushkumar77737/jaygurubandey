import { useEffect, useState } from "react"; // ✅ add useState
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import "./Landing.css";

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

    return (
        <div className={`landing ${animate ? "animate" : ""}`}>
            <div className="landing-container">
                <h1>Welcome</h1>

                <p>
                    This is a comprehensive spiritual website designed to bring devotees,
                    seekers, and visitors closer to the teachings, activities, and values
                    associated with Guruji and the ashram. This platform serves as a central
                    digital space where users can explore spiritual content, stay informed,
                    and remain connected with ongoing events and initiatives.
                </p><br></br>

                <p>
                    Through the Guruji website, users can access satsang sessions, devotional
                    bhajans, daily teachings, and spiritual messages that promote inner growth
                    and positive living. The site also provides detailed information about
                    programs, special events, important dates, and spiritual gatherings,
                    helping users stay updated at all times.
                </p><br></br>

                <p>
                    In addition to spiritual content, the website offers insights into ashram
                    life, published books, international centers, committee members, and
                    various community initiatives. Dedicated sections allow users to explore
                    blogs, galleries, testimonials, and live updates, making the platform both
                    informative and engaging.
                </p><br></br>

                <p>
                    Guruji is built to be simple, structured, and user-friendly, ensuring that
                    visitors of all age groups can easily navigate and find what they are
                    looking for. By creating an account, users can personalize their
                    experience, participate more actively, and stay connected with the Guruji
                    community through a single, trusted platform.
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