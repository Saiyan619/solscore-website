import { FaLock, FaBolt, FaGlobe, FaUserSecret } from 'react-icons/fa';
import './Features.scss';

const features = [
    {
        icon: <FaLock />,
        title: "100% On-Chain",
        description: "Every bet, outcome, and payout is recorded on the blockchain. Verifiable and immutable."
    },
    {
        icon: <FaBolt />,
        title: "Instant Payouts",
        description: "Smart contracts execute payouts immediately after match results are verified by oracles."
    },
    {
        icon: <FaGlobe />,
        title: "Global Access",
        description: "Bet from anywhere in the world. No restrictions, no KYC, just connect your wallet."
    },
    {
        icon: <FaUserSecret />,
        title: "Privacy First",
        description: "Your identity remains anonymous. Only your wallet address is visible on the ledger."
    }
];

const Features = () => {
    return (
        <section className="features">
            <h2>Why <span style={{ color: '#8a2be2' }}>SolScore?</span></h2>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <div className="icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
