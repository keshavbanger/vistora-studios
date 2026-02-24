import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo" onClick={() => scrollToSection('s1')}>VISTORA</div>
      <nav>
        <ul>
          <li onClick={() => scrollToSection('s1')}>Intro</li>
          <li onClick={() => scrollToSection('s3')}>Services</li>
          <li onClick={() => scrollToSection('s5')}>Motion</li>
          <li onClick={() => scrollToSection('s6')}>AI</li>
          <li className="btn-cta" onClick={() => scrollToSection('s7')}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
