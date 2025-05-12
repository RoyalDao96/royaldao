import React, { useContext, useState } from 'react';
import './MTPools.css';
import { ActiveContext } from '../ActiveContext';
import Logo from '../../images/Logo.png';
import SolLogo from '../../images/solLogo.png';
import USDTLogo from '../../images/usdtLogo.png';
import ethLogo from '../../images/ethLogo.png';
import btcLogo from '../../images/btcLogo.png';
import arrowImg from '../../images/right-arrow.png';
import { Link } from 'react-router-dom';

const MultiTokensPools = () => {

    const { isActive } = useContext(ActiveContext);
    const parentVaultDetailStyle = {
        zIndex: isActive ? -1 : 9999,
    };

    const [data, setData] = useState([
        {
            pool: 'Greenrock-3Pool',
            tokens: [
                { name: 'GS', img: Logo },
                { name: 'BTC', img: btcLogo },
                { name: 'SOL', img: SolLogo },
            ],
            type: ['Multi-token'],
            tvl: 5200000,
            avgFees: 185000, // Updated to hundreds of thousands
            avgVolume: 31500000,
            yieldTVL: '0.07%',
            lmAPR: 'N/A',
        },
        {
            pool: 'Greenrock-2Pool',
            tokens: [
                { name: 'GR', img: Logo },
                { name: 'USDT', img: USDTLogo },
            ],
            type: ['Non-pegged', 'Multi-token'],
            tvl: 4670000,
            avgFees: 222000, // Updated
            avgVolume: 24400000,
            yieldTVL: '0.04%',
            lmAPR: '< 0.01%',
        },
        {
            pool: 'BTC-2Pool',
            tokens: [
                { name: 'BTC', img: btcLogo },
                { name: 'ETH', img: ethLogo },
            ],
            type: ['Non-pegged'],
            tvl: 7200000,
            avgFees: 175000, // Updated
            avgVolume: 27500000,
            yieldTVL: '0.08%',
            lmAPR: '< 0.01%',
        },
        {
            pool: 'Greenrock-4Pool',
            tokens: [
                { name: 'GR', img: Logo },
                { name: 'GS', img: Logo },
                { name: 'USDT', img: USDTLogo },
                { name: 'SOL', img: SolLogo },
            ],
            type: ['Non-pegged', 'Multi-token'],
            tvl: 8300000,
            avgFees: 193000, // Updated
            avgVolume: 32500000,
            yieldTVL: '0.05%',
            lmAPR: 'N/A',
        },
        {
            pool: 'Grimstone-2Pool',
            tokens: [
                { name: 'GS', img: Logo },
                { name: 'USDT', img: USDTLogo },
            ],
            type: ['Non-pegged'],
            tvl: 4650000,
            avgFees: 164000, // Updated
            avgVolume: 18400000,
            yieldTVL: '0.06%',
            lmAPR: '< 0.02%',
        },
        {
            pool: 'ETH-2Pool',
            tokens: [
                { name: 'ETH', img: ethLogo },
                { name: 'SOL', img: SolLogo },
            ],
            type: ['Multi-token'],
            tvl: 5400000,
            avgFees: 198000, // Updated
            avgVolume: 24800000,
            yieldTVL: '0.04%',
            lmAPR: 'N/A',
        },
        {
            pool: 'BTC-3Pool',
            tokens: [
                { name: 'BTC', img: btcLogo },
                { name: 'GS', img: Logo },
                { name: 'GR', img: USDTLogo },
            ],
            type: ['Multi-token'],
            tvl: 6150000,
            avgFees: 268000, // Updated
            avgVolume: 26800000,
            yieldTVL: '0.09%',
            lmAPR: 'N/A',
        },
        {
            pool: 'SOL-2Pool',
            tokens: [
                { name: 'SOL', img: SolLogo },
                { name: 'USDT', img: USDTLogo },
            ],
            type: ['Non-pegged'],
            tvl: 3580000,
            avgFees: 157000, // Updated
            avgVolume: 15700000,
            yieldTVL: '0.03%',
            lmAPR: '< 0.01%',
        },
        {
            pool: 'Greenrock-2Pool',
            tokens: [
                { name: 'GR', img: Logo },
                { name: 'ETH', img: ethLogo },
            ],
            type: ['Non-pegged', 'Multi-token'],
            tvl: 4950000,
            avgFees: 206000, // Updated
            avgVolume: 20600000,
            yieldTVL: '0.07%',
            lmAPR: 'N/A',
        },
        {
            pool: 'ETH-4Pool',
            tokens: [
                { name: 'ETH', img: ethLogo },
                { name: 'USDT', img: USDTLogo },
                { name: 'GR', img: Logo },
                { name: 'SOL', img: SolLogo },
            ],
            type: ['Multi-token'],
            tvl: 7800000,
            avgFees: 310000, // Updated
            avgVolume: 31000000,
            yieldTVL: '0.05%',
            lmAPR: 'N/A',
        },
    ]);

    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

    const sortedData = [...data];
    if (sortConfig.key) {
        sortedData.sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];
            if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
            if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
            return 0;
        });
    }

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const getSortIcon = (key) => {
        if (sortConfig.key === '') {
            return '▼';
        }
        if (sortConfig.key === key) {
            return sortConfig.direction === 'ascending' ? '▲' : '▼';
        }
        return '';
    };

    return (
        <div className='pool-parent mtPool-parent' style={parentVaultDetailStyle}>
            <div className="custom-table-container">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th onClick={() => requestSort('pool')}>POOL {getSortIcon('pool')}</th>
                            <th onClick={() => requestSort('type')}>TYPE {getSortIcon('type')}</th>
                            <th onClick={() => requestSort('tvl')}>TVL {getSortIcon('tvl')}</th>
                            <th onClick={() => requestSort('avgFees')}>24H VOLUME {getSortIcon('avgFees')}</th>
                            <th onClick={() => requestSort('yieldTVL')}>365D YIELD/TVL {getSortIcon('yieldTVL')}</th>
                            <th onClick={() => requestSort('lmAPR')}>LM APR {getSortIcon('lmAPR')}</th>
                            <th></th> {/* Placeholder for button */}
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((row, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="token-pair">
                                        {row.tokens.map((token, i) => (
                                            <img key={i} src={token.img} alt={token.name} className="token-icon" />
                                        ))}
                                        <span className="pool-name">{row.pool}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="type-tags">
                                        {row.type.map((type, i) => (
                                            <span key={i} className="type-tag">{type}</span>
                                        ))}
                                    </div>
                                </td>
                                <td>${(row.tvl / 1000000).toFixed(2)}m</td>
                                <td>${(row.avgFees / 1000).toFixed(2)}k</td> {/* 24H Volume now shows in thousands */}
                                <td>{row.yieldTVL}</td>
                                <td>{row.lmAPR}</td>
                                <td>
                                    <Link to='/multi-token-pools-details'>
                                    <button className="right-arrow-btn">
                                        <img src={arrowImg} alt="Arrow" className="arrow-icon" />
                                    </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MultiTokensPools;
