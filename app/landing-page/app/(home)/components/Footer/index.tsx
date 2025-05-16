import React from 'react';
import './Footer.css';
import Image from 'next/image';
import Link from 'next/link'; // Assuming you are using 'next/link' for routing

function Footer() {
    return (
        <div className='mt-40'>
            <div className='parent-footer'>
                {/* <h1 className='mx-auto text-center tracking-tight font-medium text-white mt-10' style={{ letterSpacing: "5px" }}>
                    No matter how the market performs, we provide redemption guarantee with 100% principal protection & always 
                    guarantees your high-yield fixed income.
                </h1> */}

                <img
                    src="/Logo.png"
                    height="500"
                    width="500"
                    className="object-cover rounded-xl group-hover/card:shadow-xl imgLogo"
                    alt="thumbnail"
                />

                <h1 className='mx-auto text-center tracking-tight font-medium text-white mt-10' style={{ letterSpacing: "2px" }}>
                    &copy; 2024 All Rights Reserved by RoyalDAO
                </h1>

                <div className='footer-links'>
                    <Link href="http://info.royaldao.io/" target="_blank">Information Site</Link>
                    <Link href="/#">Mirror.xyz</Link>
                    <Link href="https://t.me/Regalmining" target="_blank">Telegram</Link>
                    <Link href="#">Twitter</Link>
                    <a href="/media_kit.zip" download>
                        Download Media Kit
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
