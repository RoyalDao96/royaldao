import React from 'react';
import './manymarkup.css';
import Mockup1 from '../../assets/webImages/mm.png';

const ManyMarkup = () => {
  return (
    <div className='container-fluid manymarkup' align='center'>
        <div className="row w-md-50">
            <div className="col-lg-12 col-md-12 d-flex flex-column justify-content-center align-items-center mt-md-0 mt-5">-
                <img className='mockup-img w-100' src={Mockup1} alt="Mockup Image" />
            </div>

            <div className="col-lg-12 col-md-12">
                <h2 className='title'>All Asset Tokenization Platform</h2>
                <p className='desc'>Unleash the true potential of every assets into world of liquidity.</p>

                <div className='row'>
                    <div className="col-lg-6 col-md-6">
                        <a className='launch-game-tag2 mt-5' href="https://manymarkup.com/" target='_blank'>
                            <button className='launch-game-btn'>Launch Web2 App</button>
                        </a>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <a className='launch-game-tag mt-5' href="#" target='_blank'>
                            <button className='launch-game-btn'>Launch Web3 App (Coming Soon)</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManyMarkup