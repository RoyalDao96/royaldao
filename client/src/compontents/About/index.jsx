import React, { useRef } from 'react';
import './about.css';
import img1 from '../../assets/webImages/whatis.png';
import img2 from '../../assets/webImages/purpose.png';
import img3 from '../../assets/webImages/sst.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const contentData = [
    {
      title: "What is RoyalDAO?",
      text: "RoyalDAO is a pioneering multi-chain project designed to address & fix crypto projects losing value due to market fluctuations and lack of backing assets. RoyalDAO introduced the 'semi-stable token (SST),' a unique asset offering safe passive yield, multiple use cases, and a 'non-zero guarantee' to investors.",
    //   image: img1
    },
    {
      title: "Purpose Of RoyalDAO",
      text: `RoyalDAO was established with two primary objectives. The first is to protect current web3 investors, ensuring they receive the protection they deserve.<br /><br />The second is to onboard individuals unfamiliar with web3 by offering stable assets that safeguard their investment principal with minimal to no dilution, while also allowing for significant profit potential.`,
    //   image: img2
    },
    {
        title: "What are Semi Stable Token(SST)",
        text: "Semi-Stable Tokens (SST) are regarded as the best inflation hedge in the industry, offering yield-bearing capabilities and multiple income sources from a single asset. These tokens are physically backed by rubies and jades in the RWA reserve. Holding an SST gives investors fractional ownership of these underlying rubies and jades.",
        // image: img3
    },
  ];

const About = () => {
    const sliderRef = useRef(null);

    const handleUserInteraction = () => {
        if (sliderRef.current) {
        sliderRef.current.slickPause();
        }
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        beforeChange: handleUserInteraction,
        afterChange: handleUserInteraction
    };

    return (
        <div className="about-app">
            <header className="about-app-header container">
                
                <Slider {...settings}>
                {contentData.map((content, index) => (
                    <div key={index}>
                        <h1>{content.title}</h1>
                        <div className="content">
                            <div className="text-section">
                            <p dangerouslySetInnerHTML={{ __html: content.text }}></p>
                            </div>
                            <div className="graphic-section">
                            <div className="graphic">
                                {/* <img src={content.image} alt="RoyalDAO Graphic" /> */}
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
                </Slider>
            </header>
        </div>
    );
}

export default About