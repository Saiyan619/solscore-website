import { FaTwitter, FaDiscord, FaTelegram, FaGithub } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="brand">
                    <h3>Sol<span>Score</span></h3>
                    <p>The future of sports betting is on-chain.</p>
                </div>

                <div className="social-links">
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaDiscord /></a>
                    <a href="#"><FaTelegram /></a>
                    <a href="#"><FaGithub /></a>
                </div>
            </div>
            <div className="copyright">
                &copy; {new Date().getFullYear()} SolScore. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
