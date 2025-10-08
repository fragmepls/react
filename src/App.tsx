import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ParticleBackground from "./components/ParticleBackground";
import "./App.css";

const App: React.FC = () => {
    return (
        <Router>
            <ParticleBackground/>
            <main className="app-content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </main>
        </Router>
    );
};

export default App;
