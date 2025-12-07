import { motion } from 'framer-motion';
import { FaArrowRight, FaEthereum } from 'react-icons/fa';
import './Hero.scss';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    The Future of Football Is <span className="highlight">Onchain</span> 
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Bet USDC on who wins Premier League, La Liga, and Europe's top leagues. Simple picks, transparent odds, instant USDC payouts.
                </motion.p>

                <motion.div
                    className="cta-group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <button className="btn-primary">
                        Start Betting <FaArrowRight style={{ marginLeft: '8px' }} />
                    </button>
                </motion.div>
            </div>

            <div className="hero-visuals">
                {/* Decorative floating elements simulating bets */}
                <motion.div className="floating-card card-1">
                    <div className="icon"><FaEthereum size={24} color="#bfff00" /></div>
                    <div className="info">
                        <h4>Arsenal</h4>
                        <p>+250% Yield</p>
                    </div>
                </motion.div>

                <motion.div className="floating-card card-2">
                    <div className="icon"><FaEthereum size={24} color="#8a2be2" /></div>
                    <div className="info">
                        <h4>Real Madrid</h4>
                        <p>2.5x Multiplier</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
