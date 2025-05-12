import React, { useContext, useState } from 'react';
import { ActiveContext } from '../ActiveContext';
import './pools.css';
import Logo from '../../images/Logo.png';
import SolLogo from '../../images/solLogo.png';
import USDTLogo from '../../images/usdtLogo.png';
import ethLogo from '../../images/ethLogo.png';
import btcLogo from '../../images/btcLogo.png';
import baseLogo from '../../images/base.png';
import aeroLogo from '../../images/aero.png';

const Pools = () => {

    const { isActive } = useContext(ActiveContext);
    const parentVaultDetailStyle = {
        zIndex: isActive ? -1 : 9999,
    };

    const [data, setData] = useState([
        {
            pool: 'Greenrock/USDT',
            tokens: [
                { name: 'GR', img: Logo },
                { name: 'USDT', img: USDTLogo },
            ],
            exchange: { name: 'Aerodrome', img: aeroLogo }, // Example exchange
            chain: { name: 'BASE', img: baseLogo }, // Example chain
            feesAPR: 113.64,
            tvl: 4670000,
            avgFees: 12200,
            avgVolume: 24400000,
            volumeTVL: 522.97,
            pointBoost: '4x',
        },
        {
            pool: 'Grimstone/USDT',
            tokens: [
                { name: 'GS', img: Logo },
                { name: 'USDT', img: USDTLogo },
            ],
            exchange: { name: 'Aerodrome', img: aeroLogo }, // Example exchange
            chain: { name: 'BASE', img: baseLogo }, // Example chain
            feesAPR: 142.29,
            tvl: 1910000,
            avgFees: 4062,
            avgVolume: 81240,
            volumeTVL: 83.25,
            pointBoost: '4x',
        },
        {
            pool: 'BTC/USDT',
            tokens: [
                { name: 'BTC', img: btcLogo },
                { name: 'USDT', img: USDTLogo },
            ],
            exchange: { name: 'Aerodrome', img: aeroLogo }, // Example exchange
            chain: { name: 'BASE', img: baseLogo }, // Example chain
            feesAPR: 27.58,
            tvl: 1670000,
            avgFees: 2190,
            avgVolume: 4380000,
            volumeTVL: 262.92,
            pointBoost: '2x',
        },
        {
            pool: '3kIETH/USDT',
            tokens: [
                { name: '3kIETH', img: Logo },
                { name: 'USDT', img: USDTLogo },
            ],
            exchange: { name: 'Aerodrome', img: aeroLogo }, // Example exchange
            chain: { name: 'BASE', img: baseLogo }, // Example chain
            feesAPR: 75.45,
            tvl: 3540000,
            avgFees: 5030,
            avgVolume: 2850000,
            volumeTVL: 207.51,
            pointBoost: '2x',
        },
        {
            pool: '6kIETH/USDT',
            tokens: [
                { name: '6kIETH', img: Logo },
                { name: 'USDT', img: USDTLogo },
            ],
            exchange: { name: 'Aerodrome', img: aeroLogo }, // Example exchange
            chain: { name: 'BASE', img: baseLogo }, // Example chain
            feesAPR: 62.89,
            tvl: 2890000,
            avgFees: 4020,
            avgVolume: 1930000,
            volumeTVL: 175.21,
            pointBoost: '2x',
        },
        {
            pool: 'SOL/USDT',
            tokens: [
                { name: 'SOL', img: SolLogo },
                { name: 'USDT', img: USDTLogo },
            ],
            exchange: { name: 'Aerodrome', img: aeroLogo }, // Example exchange
            chain: { name: 'BASE', img: baseLogo }, // Example chain
            feesAPR: 65.32,
            tvl: 2430000,
            avgFees: 3120,
            avgVolume: 2070000,
            volumeTVL: 189.34,
            pointBoost: '2x',
        },
        {
            pool: '10kIETH/USDT',
            tokens: [
                { name: '10kIETH', img: Logo },
                { name: 'USDT', img: USDTLogo },
            ],
            exchange: { name: 'Aerodrome', img: aeroLogo }, // Example exchange
            chain: { name: 'BASE', img: baseLogo }, // Example chain
            feesAPR: 58.14,
            tvl: 3120000,
            avgFees: 3250,
            avgVolume: 2230000,
            volumeTVL: 194.85,
            pointBoost: '2x',
        },
        {
            pool: '60kIBTC/USDT',
            tokens: [
                { name: '60kIBTC', img: Logo },
                { name: 'USDT', img: USDTLogo },
            ],
            exchange: { name: 'Aerodrome', img: aeroLogo }, // Example exchange
            chain: { name: 'BASE', img: baseLogo }, // Example chain
            feesAPR: 71.43,
            tvl: 2760000,
            avgFees: 4170,
            avgVolume: 2030000,
            volumeTVL: 182.37,
            pointBoost: '2x',
        },
        {
            pool: '80kIBTC/USDT',
            tokens: [
                { name: '80kIBTC', img: Logo },
                { name: 'USDT', img: USDTLogo },
            ],
            exchange: { name: 'Aerodrome', img: aeroLogo }, // Example exchange
            chain: { name: 'BASE', img: baseLogo }, // Example chain
            feesAPR: 69.37,
            tvl: 2380000,
            avgFees: 3760,
            avgVolume: 1880000,
            volumeTVL: 169.28,
            pointBoost: '2x',
        },
        {
            pool: '100kIBTC/USDT',
            tokens: [
                { name: '100kIBTC', img: Logo },
                { name: 'USDT', img: USDTLogo },
            ],
            exchange: { name: 'Aerodrome', img: aeroLogo }, // Example exchange
            chain: { name: 'BASE', img: baseLogo }, // Example chain
            feesAPR: 55.29,
            tvl: 3140000,
            avgFees: 4420,
            avgVolume: 2320000,
            volumeTVL: 193.42,
            pointBoost: '2x',
        },
        {
            pool: 'ETH/USDT',
            tokens: [
                { name: 'ETH', img: ethLogo },
                { name: 'USDT', img: USDTLogo },
            ],
            exchange: { name: 'Aerodrome', img: aeroLogo }, // Example exchange
            chain: { name: 'BASE', img: baseLogo }, // Example chain
            feesAPR: 89.06,
            tvl: 1580000,
            avgFees: 4340,
            avgVolume: 1740000,
            volumeTVL: 109.66,
            pointBoost: '2x',
        },
        {
            pool: '100ISOL/USDT',
            tokens: [
                { name: '100ISOL', img: Logo },
                { name: 'USDT', img: USDTLogo },
            ],
            exchange: { name: 'Aerodrome', img: aeroLogo }, // Example exchange
            chain: { name: 'BASE', img: baseLogo }, // Example chain
            feesAPR: 68.17,
            tvl: 2930000,
            avgFees: 3980,
            avgVolume: 2110000,
            volumeTVL: 181.94,
            pointBoost: '2x',
        },
        {
            pool: '150ISOL/USDT',
            tokens: [
                { name: '150ISOL', img: Logo },
                { name: 'USDT', img: USDTLogo },
            ],
            exchange: { name: 'Aerodrome', img: aeroLogo }, // Example exchange
            chain: { name: 'BASE', img: baseLogo }, // Example chain
            feesAPR: 47.85,
            tvl: 2740000,
            avgFees: 3620,
            avgVolume: 1920000,
            volumeTVL: 164.52,
            pointBoost: '2x',
        },
        {
            pool: '200ISOL/USDT',
            tokens: [
                { name: '200ISOL', img: Logo },
                { name: 'USDT', img: USDTLogo },
            ],
            exchange: { name: 'Aerodrome', img: aeroLogo }, // Example exchange
            chain: { name: 'BASE', img: baseLogo }, // Example chain
            feesAPR: 63.92,
            tvl: 2560000,
            avgFees: 3840,
            avgVolume: 2040000,
            volumeTVL: 173.67,
            pointBoost: '2x',
        },
    ]);
    
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

    const sortedData = [...data];
    if (sortConfig.key) {
        sortedData.sort((a, b) => {
        if (sortConfig.key === 'exchange' || sortConfig.key === 'chain') {
            const aValue = a[sortConfig.key].name.toLowerCase();
            const bValue = b[sortConfig.key].name.toLowerCase();
            if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
            if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
            return 0;
        } else {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];
            if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
            if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
            return 0;
        }
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
        <div className="pool-parent" style={parentVaultDetailStyle}>
            <div className="custom-table-container">
                <table className="custom-table">
                    <thead>
                    <tr>
                        <th onClick={() => requestSort('pool')}>POOL {getSortIcon('pool')}</th>
                        <th onClick={() => requestSort('feesAPR')}>FEES APR {getSortIcon('feesAPR')}</th>
                        <th onClick={() => requestSort('tvl')}>TVL {getSortIcon('tvl')}</th>
                        <th onClick={() => requestSort('avgFees')}>24H AVG FEES {getSortIcon('avgFees')}</th>
                        <th onClick={() => requestSort('avgVolume')}>24H AVG VOLUME {getSortIcon('avgVolume')}</th>
                        <th onClick={() => requestSort('exchange')}>Exchange {getSortIcon('exchange')}</th>
                        <th onClick={() => requestSort('chain')}>Chain {getSortIcon('chain')}</th>
                        <th onClick={() => requestSort('pointBoost')}>Point Boost {getSortIcon('pointBoost')}</th>
                        <th></th>
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
                        <td>{row.feesAPR.toFixed(2)}%</td>
                        <td>${(row.tvl / 1000000).toFixed(2)}m</td>
                        <td>${(row.avgFees / 1000).toFixed(2)}k</td>
                        <td>${(row.avgVolume / 1000).toFixed(2)}k</td>
                        <td>
                            <div className="exchange">
                            <img src={row.exchange.img} alt={row.exchange.name} className="exchange-icon" />
                            <span>{row.exchange.name}</span>
                            </div>
                        </td>
                        <td>
                            <div className="chain">
                            <img src={row.chain.img} alt={row.chain.name} className="chain-icon" />
                            <span>{row.chain.name}</span>
                            </div>
                        </td>
                        <td>{row.pointBoost}</td>
                        <td><button className="simulate-btn">Provide LP</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Pools