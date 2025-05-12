import React from 'react';
import './faq.css';

const FAQs = () => {
  return (
    <div className='w-100 vh-90 faqs d-flex align-items-center text-white container-fluid'>
        <ul className='accordion'>
            <div className='row'>
                <div className='mb-5' align="center">
                    <h1>FAQs</h1>
                </div>
                <div class="col-lg-6">
                    <li>
                        <input type='radio' name='accordion' id='first' />
                        <label htmlFor="first">Is $Grimstone Inflationary Token?</label>
                        <div className="content">
                            <p>
                                No, only 1,000,000,000 (1 Billion) $Grimstone tokens will ever be minted. It is expected to appreciate in value as RoyalDAO introduces more utilities and the community engages with the increasing demand and utility.
                            </p>
                        </div>
                    </li> 
                    <li>
                        <input type='radio' name='accordion' id='second' />
                        <label htmlFor="second">Is there any fees do I have to pay for trading the token?</label>
                        <div className="content">
                            <p>There is no trading fees for PreTGE token</p>
                        </div>
                    </li>
                    <li>
                        <input type='radio' name='accordion' id='third' />
                        <label htmlFor="third">How you can claim PoR RWA asset packages?</label>
                        <div className="content">
                            <p>Read "How To Redeem RWA Packages" Section</p>
                        </div>
                    </li>
                    <li>
                        <input type='radio' name='accordion' id='seventh' />
                        <label htmlFor="seventh">What token will I receive for participating in this funding round?</label>
                        <div className="content">
                            <p>You will receive the pre-TGE version of our utility token $Grimstone, which is redeemable at a 1:1 ratio with $Grimstone.</p>
                        </div>
                    </li>
                </div>

                <div class="col-lg-6">
                    <li>
                        <input type='radio' name='accordion' id='fourth' />
                        <label htmlFor="fourth">What is $Grimstone and what can I do with it?</label>
                        <div className="content">
                            <p>
                            $Grimstone is the exclusive utility token within the RoyalDAO ecosystem, primarily utilized for staking, participation in RWA jade stone auctions, and involvement in RoyalDAO's SubDAO program. This program offers free airdrops and presale opportunities for forthcoming high-potential projects that will develop within the RoyalDAO community by indie trustworthy talented developers.</p>
                        </div>
                    </li>
                    <li>
                        <input type='radio' name='accordion' id='fifth' />
                        <label htmlFor="fifth">How can I receive free extra $Grimstone airdrop?</label>
                        <div className="content">
                            <p>
                                Start playing the game and keep tapping and upgrading as much as possible from now on. Stay tune for official crystal-clear airdrop announcement.
                            </p>
                        </div>
                    </li>
                    <li>
                        <input type='radio' name='accordion' id='sixth' />
                        <label htmlFor="sixth">How many type of tokens in RoyalDAO ecosystem?</label>
                        <div className="content">
                            <p>
                                There are only two main tokens: $Greenrock, which is 100% fully backed by RWA rubies and jades and designated as a Semi-Stable Token (SST), and $Grimstone, the special utility token of the RoyalDAO ecosystem with its own unique use cases.
                            </p>
                        </div>
                    </li>
                    <li>
                        <input type='radio' name='accordion' id='eighth' />
                        <label htmlFor="eighth">Can I redeem RWA treasure packages with $Grimstone?</label>
                        <div className="content">
                            <p>
                            You can redeem our RWA treasure packages exclusively with $Greenrock at predefined prices. $Greenrock can be minted on demand for both retail and institutional backers at the later stage. Stay tune for announcement!
                            </p>
                        </div>
                    </li>
                </div>
            </div>
        </ul>
    </div>
  )
}

export default FAQs