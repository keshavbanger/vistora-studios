import React from 'react';
import useScrollReveal from './hooks/useScrollReveal';
import Background from './components/Background';
import Header from './components/Header';
import BrandIntro from './components/BrandIntro';
import BrandStatement from './components/BrandStatement';
import Services from './components/Services';
import SocialMedia from './components/SocialMedia';
import VideoEditing from './components/VideoEditing';
import AISection from './components/AISection';
import FinalCall from './components/FinalCall';

function App() {
    useScrollReveal();

    return (
        <div className="app-container">
            <Background />
            <Header />
            <main>
                <BrandIntro />
                <div className="section-divider"></div>
                <BrandStatement />
                <div className="section-divider"></div>
                <Services />
                <div className="section-divider"></div>
                <SocialMedia />
                <div className="section-divider"></div>
                <VideoEditing />
                <div className="section-divider"></div>
                <AISection />
                <div className="section-divider"></div>
                <FinalCall />
            </main>
        </div>
    );
}

export default App;
