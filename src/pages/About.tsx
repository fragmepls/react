import React from "react";
import {Link} from "react-router-dom";
import "../styles/About.css";

const About: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the About Page</h1>
            <p>This is your React + TypeScript about page.</p>
            <Link to="/">Zur Home-Seite</Link>
        </div>
    );
};

export default About;
