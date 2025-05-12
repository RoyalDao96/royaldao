import React from 'react';
import './ruby_packages.css';
import CarouselRuby from './carousel/carousel_ruby';
import { Link } from 'react-router-dom';

const RubyPackages = () => {
  return (
    <div className='w-100 packages d-flex align-items-center'>
        <div className='container'>
            <section className='about about1'>
                <div className="about-image">
                    <CarouselRuby /><br />
                    <p>These are the real-world assets (RWAs) that are reserved for tokenization</p>
                </div>
                <div className="about-content">
                    <h1 className='text-white mb-5'>Exquisite Burmese Ruby</h1>
                    <h4 className='text-white'>Package Redeem Price</h4>
                    <div className='package-redeem-child mt-3'>
                        <span className='text-white child1'>3,200,000</span>
                        <span className='child2'>Tokens</span>
                    </div>
                    <h4 className='text-white mt-4'>Current Token Price</h4>
                    <div className='package-redeem-child mt-3'>
                        <span className='text-white child1'>$10</span>
                        <span className='child2'>Per Tokens</span>
                    </div>
                    <div className='buttons mt-3'>
                        <Link to='/details_ruby' className='btnViewDetails' style={{ textDecoration: 'none', color: '#000' }}>
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

export default RubyPackages