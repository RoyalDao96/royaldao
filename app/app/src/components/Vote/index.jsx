import React, { useContext, useState } from 'react';
import './vote.css'; // Add custom CSS for styling
import { ActiveContext } from '../ActiveContext';

const Vote = () => {

    const { isActive } = useContext(ActiveContext);
    const parentVaultDetailStyle = {
        zIndex: isActive ? -1 : 9999,
    };
    
    const [activeTab, setActiveTab] = useState('Most Rewarded');

    const poolsData = {
        'Most Rewarded': [
        {
            pair: 'CL100-WETH/USDC',
            fees: '$1,432,724.65',
            incentives: '$7.25575',
            totalRewards: '$1,432,731.9',
            vAPR: '68.53%',
            votes: '89,502,024.23',
            tvl: '$28,701,351.7',
        },
        // Add more data as shown in the screenshot
        ],
        'Least Rewarded': [
        {
            pair: 'CL200-WETH/AERO',
            fees: '$370,076.9',
            incentives: '$0.78181',
            totalRewards: '$370,858.71',
            vAPR: '85.44%',
            votes: '18,094,154.2',
            tvl: '$9,151,259.61',
        },
        // Add more data
        ],
        'All Pools': [
        // Combine or add all pools data here
        ],
    };

    const renderTableRows = () => {
        return poolsData[activeTab].map((pool, index) => (
        <tr className='row-hover-color' key={index}>
            <td className='row-color'>{pool.pair}</td>
            <td className='row-color'>{pool.fees}</td>
            <td className='row-color'>{pool.incentives}</td>
            <td className='row-color'>{pool.totalRewards}</td>
            <td className='row-color'>{pool.vAPR}</td>
            <td className='row-color'>
                <button>Select</button>
            </td>
        </tr>
        ));
    };

    return (
        <div className="pool-parent-vote" style={parentVaultDetailStyle}>
            <div className="pools-voting">
                <div className="header">
                <div className="row">
                    <div className="left">
                    <span className="icon">⏰</span>
                    <p className="voting-round-text">
                        <strong>Current voting round</strong>
                        <span className="highlight">ends in 3 days</span>
                    </p>
                    </div>
                    <div className="right">
                    <p className="voting-round-text">
                        Voters earn a share of transaction fees and incentives for helping govern how emissions are distributed.
                    </p>
                    </div>
                </div>
        
                <div className="row">
                    <div className="left">
                    <p className="total-voting-power-text">
                        <strong>Total voting power available for this epoch:</strong>
                        <span className="highlight">692,731,983.19</span>
                    </p>
                    </div>
                    <div className="right-flex">
                    <div className="item">
                        <p className="total-voting-power-text">Total Fees</p>
                        <strong className="total-voting-power-text">~$5,993,663.0</strong>
                    </div>
                    <div className="item">
                        <p className="total-voting-power-text">Total Incentives</p>
                        <strong className="total-voting-power-text">~$1,040,350.83</strong>
                    </div>
                    <div className="item">
                        <p className="total-voting-power-text">Total Rewards</p>
                        <strong className="total-voting-power-text">~$7,034,013.83</strong>
                    </div>
                    <div className="item">
                        <p className="total-voting-power-text">New Emissions</p>
                        <strong className="total-voting-power-text">9,151,259.61</strong>
                    </div>
                    </div>
                </div>
                </div>
      
                {/* Add "Select Liquidity Pools for Voting" section */}
                <div className="select-liquidity-pools">
                    <h3>Select Liquidity Pools for Voting</h3>
                </div>
      
                <div className="tabs">
                    {['Most Rewarded', 'Least Rewarded', 'All Pools'].map((tab) => (
                        <button
                        key={tab}
                        className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                        >
                        {tab}
                        </button>
                    ))}
                </div>
      
                <table className="pools-table">
                    <thead>
                        <tr>
                        <th>POOLS</th>
                        <th>FEES</th>
                        <th>INCENTIVES</th>
                        <th>TOTAL REWARDS</th>
                        <th>vAPR</th>
                        <th>SELECT POOL</th>
                        </tr>
                    </thead>
                    <tbody>{renderTableRows()}</tbody>
                </table>
            </div>
        </div>
      );
      
}

export default Vote