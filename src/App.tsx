import React, {useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ParticleBackground from "./components/ParticleBackground";
import "./App.css";
import Header from "./components/Header.tsx";

const ScrollToTop: React.FC = () => {
    const location = useLocation();
    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);
    }, [location]);
    return null;
};

const App: React.FC = () => (
    <Router>
        <ParticleBackground/>
        <Header/>
        <ScrollToTop/>
        <main className="app-content">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </main>
    </Router>
);

export default App;
