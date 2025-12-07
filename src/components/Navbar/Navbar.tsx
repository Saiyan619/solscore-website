import { useState, useEffect } from 'react';
import './Navbar.scss';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">
               <img className='navbar_logo' src="./solscore-logo.jpg" alt="img" />
                Sol<span>Score</span>
            </div>

            <div className="nav-links">
                <a href="#markets">Markets</a>
                <a href="#how-it-works">How It Works</a>
            </div>

            <div className="nav-actions">
                <button className="btn-launch">Launch App</button>
            </div>
        </nav>
    );
};

export default Navbar;
