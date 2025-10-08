import React, {useRef} from "react";
import {Link} from "react-router-dom";
import "../styles/Pages.css";
import "../styles/Home.css";
import {useIntersectionObserver} from "../hooks/useIntersectionObserver";

const Home: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const section1Ref = useRef<HTMLElement>(null);
    const section2Ref = useRef<HTMLElement>(null);
    const section3Ref = useRef<HTMLElement>(null);
    const section4Ref = useRef<HTMLElement>(null);

    useIntersectionObserver([section1Ref, section2Ref, section3Ref, section4Ref], {threshold: 0.5});

    return (
        <div ref={containerRef} className="home-container content-container">
            <section
                className="fade-in-section first-section"
                ref={section1Ref}
            >
                <h1>Welcome to the Home Page</h1>
                <Link to="/about">About</Link>
                <ul className="social small">
                    <li><a href="#"><i className="fab fa-twitter icon"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in icon"></i></a></li>
                </ul>
            </section>
            <section className="fade-in-section" ref={section2Ref}>
                <h2>Section 2</h2>
                <p>This content will fade in as you scroll down.</p>
            </section>
            <section className="fade-in-section" ref={section3Ref}>
                <h2>Section 3</h2>
                <p>More content to demonstrate the scrolling and fade-in effect.</p>
            </section>
            <section className="fade-in-section" ref={section4Ref}>
                <h2>Section 4</h2>
                <p>This is the final section on this page.</p>
            </section>
        </div>
    );
};

export default Home;
