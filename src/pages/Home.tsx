import React from "react";
import {Link} from "react-router-dom";
import "../styles/Home.css";

const Home: React.FC = () => {
    return (
        <>
            <h1>Welcome to the Home Page</h1>
            <p>This is your React + TypeScript home page.</p>
            <Link to="/about">Zur About-Seite</Link>
        </>
    );
};

export default Home;
