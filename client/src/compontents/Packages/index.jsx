import React from 'react';
import './package.css';
import Carousel from './Carousel/carousel';
import { Link } from 'react-router-dom';

const Packages = () => {
  return (
    <div className='w-100 vh-100 packages d-flex align-items-center'>
        <div className='container'>
            <h1>Treasury Vault</h1>
            <section className='about about1'>
                <div className="about-image">
                    <Carousel /><br />
                    <p>These are the real-world assets (RWAs) that are reserved for tokenization</p>
                </div>
                <div className="about-content">
                    <h1 className='text-white mb-5'>Exquisite Burmese Jade</h1>
                    <h4 className='text-white'>Package Redeem Price</h4>
                    <div className='package-redeem-child mt-3'>
                        <span className='text-white child1'>700,000</span>
                        <span className='child2'>Tokens</span>
                    </div>
                    <h4 className='text-white mt-4'>Current Token Price</h4>
                    <div className='package-redeem-child mt-3'>
                        <span className='text-white child1'>$10</span>
                        <span className='child2'>Per Tokens</span>
                    </div>
                    <div className='buttons mt-3'>
                        <Link to='/details' className='btnViewDetails' style={{ textDecoration: 'none', color: '#000' }}>
                            <button className='viewDetailsBTN'>
                               View Details
                            </button>
                        </Link>
                        <button className='redeemPackageBTN'>Redeem Package</button>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Packages