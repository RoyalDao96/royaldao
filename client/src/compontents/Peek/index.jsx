import React from 'react';
import './peek.css';
import Mockup1 from '../../assets/webImages/mockup1.png';

const Peek = () => {
  return (
    <div className='container peek mb-5'>
        <div className="row">
            <div className="col-lg-6 col-md-6">
                <img className='mockup-img w-100' src={Mockup1} alt="Mockup Image" />
            </div>

            <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center align-items-center mt-md-0 mt-5">
                <h2 className='title'>RoyalDAO's Play To Earn Game</h2>
                <p className='desc mt-3'>We accumulate community, you accrue airdrop points. We consider this plan as 
                a mutually beneficial arrangement for both parties. Rather than squandering hundreds of thousands of dollars 
                on ineffective advertising, this game will generously reward players who are also early adopters 
                of our ecosystem.</p>

                <a className='launch-game-tag mt-3' href="https://t.me/rc_clicker_game_bot" target='_blank'>
                    <button className='launch-game-btn'>Farm Now</button>
                </a>
            </div>
        </div>
    </div>

  )
}

export default Peek