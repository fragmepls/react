import React, {useRef} from "react";
import {Link} from "react-router-dom";
import "../styles/About.css";
import {useIntersectionObserver} from "../hooks/useIntersectionObserver.ts";

const About: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const section1Ref = useRef<HTMLElement>(null);
    const section2Ref = useRef<HTMLElement>(null);
    const section3Ref = useRef<HTMLElement>(null);
    const section4Ref = useRef<HTMLElement>(null);

    useIntersectionObserver([section1Ref, section2Ref, section3Ref, section4Ref], {threshold: 0.5});

    return (
        <div ref={containerRef} className="home-container">
            <section
                className="fade-in-section first-section"
                ref={section1Ref}
            >
                <h1>Welcome to the About Page</h1>
                <Link to="/">Home</Link>
                <ul className="social small">
                    <li><a href="#"><i className="fab fa-twitter icon"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in icon"></i></a></li>
                </ul>
            </section>
        </div>
    );
};

export default About;
