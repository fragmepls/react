import React, {useRef} from "react";
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
                <ul className="social small">
                    <li><a target="_blank" href="https://www.linkedin.com/in/leonard-oberrauch-950553287/"><i
                        className="fab fa-linkedin-in icon"></i></a></li>
                    <li><a target="_blank" href="https://github.com/fragmepls"><i
                        className="fab fa-github icon"></i></a></li>
                </ul>
            </section>
        </div>
    );
};

export default Home;
