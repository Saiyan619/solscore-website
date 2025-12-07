import { motion } from 'framer-motion';
import './HowItWorks.scss';

const steps = [
    {
        id: 1,
        title: "Choose Market",
        description: "Select from the Big 5 leagues. Premier League, La Liga, Bundesliga, Serie A, or Ligue 1."
    },
    {
        id: 2,
        title: "Place Bet",
        description: "Connect your wallet and stake USDC on your predicted winner. Smart contracts lock your funds securely."
    },
    {
        id: 3,
        title: "Claim Winnings",
        description: "When the market resolves, winners automatically claim their share of the pool instantly."
    }
];

const HowItWorks = () => {
    return (
        <section className="how-it-works" id="how-it-works">
            <div className="section-header">
                <h2>A Smarter Way To <span className="highlight">Make Bets!</span></h2>
            </div>

            <div className="steps-container">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        className="step-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <div className="step-number">{step.id}</div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
