import { FaArrowRight, FaFutbol } from 'react-icons/fa';
import './MarketPreview.scss';

const markets = [
    { id: 1, league: "Premier League", country: "England", pool: "$1.2M", participants: "12.5k" },
    { id: 2, league: "La Liga", country: "Spain", pool: "$850k", participants: "8.2k" },
    { id: 3, league: "Bundesliga", country: "Germany", pool: "$620k", participants: "5.1k" },
    { id: 4, league: "Serie A", country: "Italy", pool: "$540k", participants: "4.8k" },
    { id: 5, league: "Ligue 1", country: "France", pool: "$300k", participants: "2.3k" },
    { id: 6, league: "Champions League", country: "Europe", pool: "$2.5M", participants: "25k" },
];

const MarketPreview = () => {
    return (
        <section className="market-preview" id="markets">
            <div className="section-header">
                <h2>Active <span style={{ color: '#8a2be2' }}>Markets</span></h2>
                <a href="https://solscore-v2.vercel.app/markets" className="view-all">View All <FaArrowRight /></a>
            </div>

            <div className="markets-grid">
                {markets.map((market) => (
                    <div key={market.id} className="market-card">
                        <div className="status-badge">LIVE</div>
                        <div className="card-header">
                            <div className="league-icon">
                                <FaFutbol />
                            </div>
                            <div className="league-info">
                                <h3>{market.league}</h3>
                                <span>{market.country}</span>
                            </div>
                        </div>
                        <div className="card-stats">
                            <div className="stat">
                                <span className="label">Total Pool</span>
                                <span className="value" style={{ color: '#8a2be2' }}>{market.pool}</span>
                            </div>
                            <div className="stat">
                                <span className="label">Participants</span>
                                <span className="value">{market.participants}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MarketPreview;
