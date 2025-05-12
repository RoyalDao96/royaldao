import React from 'react';
import './cards.css';
import WP from '../images/WP.png';
import PD from '../images/PD.png';
import Media from '../images/Media.png';
import WhitePaper from './RoyalDAO_Whitepaper.pdf';
import PitchDeck from './RubyDAO_PitchDeck.pdf';
import MediaKit from './media_kit.zip';

const Cards = () => {
    return (
        <div className='cards-parent' align='center'>
            <a href={WhitePaper} download="RoyalDAO_WP.pdf" className='download-a-tag'>
                <div className='parent-article'>
                    <div className="article-card">
                        <div className="content">
                            <button>Download</button>
                        </div>
                        <img src={WP} alt="Whitepaper" />
                    </div>
                    <h1>Whitepaper</h1>
                </div>
            </a>

            <a href={PitchDeck} download="RoyalDAO_WP.pdf" className='download-a-tag'>
                <div className='parent-article'>
                    <div className="article-card">
                        <div className="content">
                            <button>Download</button>
                        </div>
                        <img src={PD} alt="Pitch Deck" />
                    </div>
                    <h1>Pitch Deck</h1>
                </div>
            </a>

            <a href={MediaKit} download="media_kit.zip" className='download-a-tag'>
                <div className='parent-article'>
                    <div className="article-card">
                        <div className="content">
                            <button>Download</button>
                        </div>
                        <img src={Media} className='media' alt="Pitch Deck" />
                    </div>
                    <h1>Media Kit</h1>
                </div>
            </a>
        </div>
    )
}

export default Cards