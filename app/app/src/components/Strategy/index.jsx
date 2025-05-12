import React, { useContext, useState } from 'react';
import { ActiveContext } from '../ActiveContext';
import './strategy.css';
import S1 from '../../images/s1.jpg';
import S2 from '../../images/s2.jpg';
import S3 from '../../images/s3.jpg';
import S4 from '../../images/s4.jpg';
import S5 from '../../images/s5.jpg';
import S6 from '../../images/s6.jpg';
import copy from '../../images/copy.png';
import base from '../../images/base.png';

const Strategy = () => {
    const { isActive } = useContext(ActiveContext);
    const parentVaultDetailStyle = {
        zIndex: isActive ? -1 : 9999,
    };

    const missions = [
        { id: 1, title: "Covered Calls (Cash-Secured Call)", 
            description: 
            (<>
                This strategy involves holding a stablecoin or low-risk asset and selling call options against it. The strategy generates premium income, providing a small return without risking the underlying principal. However, the yield will be relatively low, and your asset could be called away at the strike price if the price moves upward significantly. 
                <br /><br />
                Example: Selling covered calls on a tokenized asset like tokenized gold or USDC on a platform that offers option writing features (e.g., Ribbon Finance or Opyn). You maintain principal protection in a stable asset, while earning the premium.
            </>),
            backgroundImage: `url(${S1})`, APR: '10.95%', tag: 'Option Trading',
            usecases: ["Holding $10,000 in USDC. To generate extra income, you sell monthly covered calls on USDC at a slightly higher strike price than its current value. By selling call options, you collect premiums, adding to your returns without risking the principal USDC. This strategy is ideal for conservative investors who want to maximize stable returns on their assets."]
        },

        { id: 2, title: "Shark Fin", 
            description: 
            (<>
                USDC offers the perfect balance of stability and attractive returns. It is a 100% principal protected product that generates guaranteed yield for the investor. Additionally, users earn a bonus payout if the price of the underlying asset remains within a predetermined range.
                <br /><br />
                To generate yield, the Shark Fin strategy trades an exotic options structured product known in TradFi as the ‘Shark Fin’, which combines an option with a Bond (lending) component. Investors deposit their assets and accumulate a guaranteed yield, accrued daily on their capital, receivable after 27 days. Investors also receive a bonus yield payout if the price of the underlying asset (e.g., BTC) ends within the predetermined strike price and knock-out price range.
                <br /><br />
                This strategy is tailored for conservative investors with a moderately bullish sentiment towards the market and are looking to secure guaranteed returns.
            </>),
            backgroundImage: `url(${S2})`, APR: '19.19%', tag: 'Option Trading',
            usecases: ["You hold USDC and want to maintain your USDC upside potential while earning guaranteed yield.", "You want to generate yield on your USDC whilst maintaining 100% principal protection", "You want the opportunity to earn bonus yield up to 19.58% APY if market conditions are moderately bullish."]
        },

        { id: 3, title: "Concentrated Liquidity Provision", 
            description: 
            (<>
                Concentrated Liquidity Provision (CLP) is an advanced feature in automated market makers (AMMs) that allows liquidity providers to allocate their assets within specific price ranges rather than across the entire price spectrum. This targeted approach enhances capital efficiency, enabling providers to earn more fees with less capital by focusing liquidity where trading is most active.
            </>),
            backgroundImage: `url(${S3})`, APR: '15.20%', tag: 'CLP',
            usecases: ["Optimized Yield Farming: Allocate liquidity to narrow price ranges with high trading activity to maximize fee earnings using less capital.", "Active Market Making: Manage liquidity positions around the current market price to capture trading fees from frequent trades in volatile markets.", "Risk Management: Adjust or withdraw liquidity during periods of high volatility to mitigate exposure and reduce the risk of impermanent loss.", "Price Speculation: Concentrate liquidity in anticipated future price ranges to capitalize on market movements when the price reaches your set range.", "Passive Income Generation: Set broader price ranges for a hands-off approach, earning steady fees over time without constant management.", "Arbitrage Opportunities: Use CLP alongside other DeFi platforms to exploit price discrepancies and enhance overall profitability through strategic positioning."]
        },

        { id: 4, title: "Delta Neutral Strategy", 
            description: 
            (<>
                A Delta Neutral Strategy is an investment approach aimed at minimizing exposure to the price movements of underlying assets. By constructing a portfolio where the positive and negative deltas (price sensitivities) offset each other, the net delta becomes zero. This means that small price changes in the underlying asset have minimal impact on the portfolio's overall value.
            </>),
            backgroundImage: `url(${S4})`, APR: '13.72%', tag: 'Delta Neutral Strategy',
            usecases: ["Hedged Yield Farming: Simultaneously long the asset and short futures or perpetual contracts to earn yield farming rewards without exposure to price movements.", "Arbitrage Trading: Exploit price differences between markets or exchanges while maintaining a neutral net position to eliminate market risk.", "Options Strategies: Use options to create positions where the delta is neutral, profiting from time decay (theta) or changes in volatility (vega).", "Funding Rate Collection: Take offsetting positions in perpetual swaps to earn net positive funding rates without directional exposure.", "Statistical Arbitrage: Implement algorithms to identify mispricings between correlated assets, executing trades that neutralize market risk.", "Market Making: Provide liquidity by placing both buy and sell orders, profiting from the spread while keeping a delta-neutral inventory."]
        },

        { id: 5, title: "Basis Trading", 
            description: 
            (<>
                Basis Trading is a strategy that involves profiting from the price difference (the "basis") between the spot price of an asset and its futures or perpetual swap price. Traders execute this by taking offsetting positions in the spot and futures markets to lock in the price discrepancy. The goal is to capture the basis as profit when the futures contract expires, and the prices converge.
            </>),
            backgroundImage: `url(${S5})`, APR: '12.27%', tag: 'Basis Trading',
            usecases: ["Cash and Carry Arbitrage: Buy the asset in the spot market and sell futures contracts when futures trade at a premium, locking in profit upon convergence.", "Reverse Cash and Carry Arbitrage: Sell the asset short in the spot market and buy futures contracts when futures trade at a discount, profiting as prices align.", "Interest Rate Arbitrage: Exploit differences in implied interest rates between spot and futures markets by taking offsetting positions.", "Hedging Price Risk: Use basis trading to hedge against price volatility in the underlying asset by locking in future selling prices.", "Funding Rate Optimization: Capitalize on positive funding rates in perpetual futures by shorting the perpetual contract and holding a long position in the spot market.", "Speculative Basis Trading: Anticipate changes in the basis due to market events and position accordingly to profit from widening or narrowing spreads."]
        },

        { id: 6, title: "Lending", 
            description: 
            (<>
                Lending in DeFi allows individuals to provide their cryptocurrencies to others in exchange for interest payments, all facilitated through decentralized platforms without intermediaries. Smart contracts automate the lending process, handling interest calculations, collateral management, and repayments securely and transparently.
            </>),
            backgroundImage: `url(${S6})`, APR: '15.29%', tag: 'Lending',
            usecases: ["Passive Income Generation: Lend idle crypto assets to earn interest over time, creating a steady passive income stream.", "Liquidity Provision: Supply assets to lending pools, enhancing market liquidity while earning interest and sometimes additional platform rewards.", "Portfolio Diversification: Diversify investment returns by allocating a portion of assets to lending, balancing risk across different investment vehicles.", "Stablecoin Yield Farming: Lend stablecoins to earn higher interest rates compared to traditional savings accounts, benefiting from minimal price volatility.", "Leveraged Investment Strategies: Borrow against existing crypto holdings to invest in other assets without selling original holdings, aiming to amplify overall returns.", "Arbitrage Opportunities: Exploit differences in interest rates across multiple DeFi platforms by lending on platforms offering higher rates and borrowing where rates are lower."]
        },

        { id: 7, title: "Staking", 
            description: (<>
                Staking is the process of actively participating in transaction validation (similar to mining) on a proof-of-stake (PoS) blockchain. Individuals lock up their cryptocurrencies to support network operations such as block validation and consensus. In return for staking their assets and contributing to the network's security and efficiency, participants receive staking rewards, typically in the form of additional tokens of the same type.    
            </>), 
            backgroundImage: `url(${S2})`, APR: '14.1%', tag: 'Staking', 
            usecases: ["Passive Income Generation: Stake idle crypto assets to earn regular rewards, increasing overall holdings over time.", "Long-Term Investment Strategy: Commit to staking for extended periods to benefit from compounded returns and potential token appreciation.", "Supporting Network Security: Contribute to the health and security of preferred blockchain networks by staking tokens, enhancing decentralization.", "Participating in Governance: Use staked tokens to influence network decisions, proposals, and protocol upgrades through voting rights.", "taking-as-a-Service: Leverage third-party platforms or services to stake assets without the need for technical setup or maintenance.", "Staking Diverse Assets: Diversify staking across multiple networks or tokens to spread risk and maximize potential returns."]
        },
    ];

    const missions2 = [
        { id: 1, title: "Protective Put (Long Put)", 
            description: (<>
                This involves holding an asset (such as a DeFi token) and buying put options to insure against downside risk. This strategy allows you to participate in price gains, but limits your loss if the asset price falls below a certain level.
                <br /><br />
                Example: Buying a put option on $ETH or $BTC while yield farming or staking in volatile DeFi protocols. If the price drops significantly, the put option compensates for the losses, providing partial protection of your principal.
            </>),
            backgroundImage: `url(${S1})`, APR: '56.31%', tag: 'Option Trading',
            usecases: ["Suppose you're yield farming with $ETH in a liquidity pool that offers a 20% APR. However, to hedge against a potential drop in ETH's price, you buy protective puts on $ETH. The cost of the puts reduces your overall APR (netting around 5%-15%), but you protect yourself from significant downside, maintaining the ability to earn from farming yields."]
         },

        { id: 2, title: "Collar Strategy", 
            description: (<>
                A collar involves holding an asset, selling a call option (like a covered call) to generate income, and using that income to buy a put option for downside protection. This strategy provides limited upside in exchange for reducing downside risk.
                <br /><br />
                Example: If you are staking $SNX (Synthetix) tokens or providing liquidity in a partially volatile pool, you could sell calls and use the proceeds to buy puts on $SNX. This caps your upside but protects you from heavy downside losses.
            </>), 
            backgroundImage: `url(${S2})`, APR: '62.07%', tag: 'Option Trading',
            usecases: ["If you are staking $SNX, which has a 25% APR but is quite volatile, you decide to employ a collar strategy. You sell call options on $SNX to generate premium income and use part of this income to buy put options. This limits your maximum gains but provides downside protection. As a result, your net APR might average around 8%-20%, depending on market conditions."]
        },

        { id: 3, title: "Lending", 
            description: 
            (<>
                Lending in DeFi allows individuals to provide their cryptocurrencies to others in exchange for interest payments, all facilitated through decentralized platforms without intermediaries. Smart contracts automate the lending process, handling interest calculations, collateral management, and repayments securely and transparently.
            </>),
            backgroundImage: `url(${S3})`, APR: '56.89%', tag: 'Lending',
            usecases: ["Passive Income Generation: Lend idle crypto assets to earn interest over time, creating a steady passive income stream.", "Liquidity Provision: Supply assets to lending pools, enhancing market liquidity while earning interest and sometimes additional platform rewards.", "Portfolio Diversification: Diversify investment returns by allocating a portion of assets to lending, balancing risk across different investment vehicles.", "Stablecoin Yield Farming: Lend stablecoins to earn higher interest rates compared to traditional savings accounts, benefiting from minimal price volatility.", "Leveraged Investment Strategies: Borrow against existing crypto holdings to invest in other assets without selling original holdings, aiming to amplify overall returns.", "Arbitrage Opportunities: Exploit differences in interest rates across multiple DeFi platforms by lending on platforms offering higher rates and borrowing where rates are lower."]
        },

        { id: 4, title: "Market-Neutral Strategy", 
            description: (<>
                These are volatility-based strategies. A straddle involves buying both a call and a put option on the same asset, at the same strike price, while a strangle involves different strike prices. Both strategies profit from significant price movement in either direction, making them useful for assets expected to experience high volatility.
                <br /><br />
                Example: If you expect a DeFi token like $LINK to experience significant volatility due to an upcoming protocol upgrade, you can use a straddle or strangle. This protects against both upward and downward price swings, offering partial principal protection in case of adverse price movement.
            </>), 
            backgroundImage: `url(${S4})`, APR: '60.27%', tag: 'Option Trading', 
            usecases: ["Let's say you expect a significant price movement in $LINK due to an upcoming network upgrade, but you're unsure of the direction. This makes a straddle or strangle a suitable strategy to profit from large price movements, whether up or down."]
        },

        { id: 5, title: "FCN (Bond + Options)", 
            description: (<>
                This vault delivers a Bond + Options strategy by trading an exotic options structured product commonly known as a “fixed coupon note” (FCN) in traditional finance. FCNs are a type of exotic option that combines equity options and bond-like characteristics. Investors earn a high yield coming from the combination of (1) options premiums and (2) bond yields from a portion of deposits which are lent to the market maker counterparty. Investors accrue daily yield payments on their deposited capital and are paid when the vault option expires/matures.
                <br /><br />
                At expiry, the initial deposit is returned to investors in full if the price of an underlying asset (BTC, ETH) has not fallen below the Knock-In level during the 27 day trade. Bond + Options vaults are valuable investments for investors who seek superior yields and have positively or moderately bullish views on the price of the underlying crypto assets.
            </>), 
            backgroundImage: `url(${S5})`, APR: '61.27%', tag: 'Option Trading', 
            usecases: ["You hold USDC and want to earn safer, real yield in USDC at 12.69% APY.", "You are bullish on the price of BTC & ETH and believe their prices will not decrease by 90% over the next 27 days.", "You are comfortable with lending assets to earn interest income."]
        },

        { id: 6, title: "Staking", 
            description: (<>
                Staking is the process of actively participating in transaction validation (similar to mining) on a proof-of-stake (PoS) blockchain. Individuals lock up their cryptocurrencies to support network operations such as block validation and consensus. In return for staking their assets and contributing to the network's security and efficiency, participants receive staking rewards, typically in the form of additional tokens of the same type.    
            </>), 
            backgroundImage: `url(${S6})`, APR: '58.36%', tag: 'Staking', 
            usecases: ["Passive Income Generation: Stake idle crypto assets to earn regular rewards, increasing overall holdings over time.", "Long-Term Investment Strategy: Commit to staking for extended periods to benefit from compounded returns and potential token appreciation.", "Supporting Network Security: Contribute to the health and security of preferred blockchain networks by staking tokens, enhancing decentralization.", "Participating in Governance: Use staked tokens to influence network decisions, proposals, and protocol upgrades through voting rights.", "taking-as-a-Service: Leverage third-party platforms or services to stake assets without the need for technical setup or maintenance.", "Staking Diverse Assets: Diversify staking across multiple networks or tokens to spread risk and maximize potential returns."]
        },

        { id: 5, title: "Leverage Point Farming", 
            description: (<>
                Leverage Point Farming involves borrowing assets to increase the size of a position in yield farming or liquidity provision, aiming to amplify returns from farming rewards, trading fees, or protocol incentives. By using leverage, farmers can significantly boost their yield compared to using only their capital.
                <br /><br />
                This strategy is commonly used on DeFi platforms like Alpha Homora, Impermax, and others that allow users to borrow against their collateral and use those borrowed funds to provide additional liquidity or stake in farming pools. While this strategy can enhance returns, it also increases the risk of impermanent loss, liquidation, and market volatility.
            </>), 
            backgroundImage: `url(${S1})`, APR: '-2.01%', tag: 'Leverage Point Farming', 
            usecases: ["Suitable for moderate risk-tolerant investors who want to boost their returns on stable assets. This approach is ideal when you want to maximize your yield farming gains without exposure to high volatility, though you must monitor borrowing costs and pool dynamics to manage risk.", "Ideal for investors seeking high returns and who have a bullish outlook on the pool's assets. This strategy is suitable for those who can tolerate higher volatility and the risk of impermanent loss, as the leveraged position amplifies both gains and potential losses.", "Suitable for advanced users who understand impermanent loss and can actively manage leveraged positions. This strategy works well when the goal is to maximize returns while managing the downside risk associated with volatile assets in liquidity pools.", "Best for advanced DeFi users who have experience with multiple protocols and are comfortable managing complex leveraged positions. This strategy can yield high returns by exploiting various farming opportunities across DeFi platforms."]
        },
    ];

    const missions3 = [
        { id: 1, title: "Long Calls (Buying Call Options)", 
            description: (<>
                This is a pure bullish strategy where you buy call options on a volatile asset, betting on upward price movements. The loss is limited to the premium paid for the options, but the upside is potentially unlimited.
                <br /><br />
                Example: Buying call options on a volatile token like $AAVE or $UNI if you anticipate a large price movement upwards. If the price spikes, you realize significant gains without needing to hold the underlying volatile token.
            </>),
            backgroundImage: `url(${S1})`, APR: '98.1%', tag: 'Option Trading', 
            usecases: ["Assume you expect a significant price surge in $UNI due to an upcoming protocol upgrade. Instead of directly buying $UNI, you spend $1,000 on long call options with the potential to realize a high return if $UNI's price spikes. If $UNI's price increases significantly, the value of your call options could net a return of 100% to 200% or more. However, if the price does not move as anticipated, you lose the premium paid, hence the high risk and volatility."]
         },

        { id: 2, title: "Leveraged Calls (Bull Call Spread)", 
            description: (<>
                A bull call spread involves buying a call option and simultaneously selling a call option with a higher strike price. This reduces the initial cost (by collecting a premium from the sold call) but limits the upside. It is still a high-risk, high-reward strategy.
                <br /><br />
                Example: Using a bull call spread on a volatile DeFi token like $SUSHI. You expect a price increase, so you buy a call at a lower strike price and sell a call at a higher strike price to reduce cost while capping the potential profit.
            </>), 
            backgroundImage: `url(${S2})`, APR: '101.25%', tag: 'Option Trading',
            usecases: ["You believe $AAVE will rise but want to limit your risk. You buy $AAVE call options at a lower strike price and sell call options at a higher strike price to create a bull call spread. This reduces the upfront cost, and if $AAVE moves within the expected range, you earn a high APR (potentially 30% - 100%). However, this strategy caps your potential gains."]
         },

        { id: 3, title: "Liquidity Provision (LP)", 
            description: (<>
                Traditional Liquidity Provision (LP) involves supplying assets to liquidity pools on decentralized exchanges (DEXs) like Uniswap V2, SushiSwap, or Balancer. LPs provide an equal value of two assets to a pool (e.g., ETH/USDC), enabling traders to swap between these assets.
                <br /><br />
                In return, LPs earn a portion of the trading fees generated by the pool, proportional to their share of the total liquidity. This strategy allows for passive income through fee collection. However, it also exposes LPs to the risk of impermanent loss, which occurs when the relative prices of the pooled assets change compared to when they were deposited.
            </>), 
            backgroundImage: `url(${S3})`, APR: '98.99%', tag: 'LP',
            usecases: ["Ideal for conservative investors looking for steady income without exposure to significant price fluctuations. This strategy provides a reliable yield, making it suitable for those who prefer lower-risk DeFi investments.", "Suitable for investors who want to earn passive income on assets they already hold, while accepting some level of risk. This strategy is best for those with a moderate risk tolerance who believe in the long-term value of the assets in the pool.", "Best for risk-tolerant investors who are comfortable with the potential for significant impermanent loss. This approach can be lucrative if the pool experiences high trading volume and the LP believes in the long-term potential of both assets.", "Suitable for investors seeking diversification and willing to manage a slightly more complex portfolio. This strategy spreads risk across multiple assets, potentially offering a more stable yield compared to dual-asset pools.", "Ideal for speculative investors who are willing to take on higher risk for the chance of outsized returns. This strategy is for those who can tolerate volatility and believe in the long-term success of the new token."]
        },

        { id: 4, title: "Naked Puts (Selling Put Options)", 
            description: (<>
                Selling a naked put involves selling put options without owning the underlying asset. This strategy generates high premium income but exposes the seller to significant downside risk if the asset price falls below the strike price.
                <br /><br />
                Example: Selling puts on a volatile token like $COMP (Compound) when you expect it not to drop below a certain price. If the token price stays above the strike price, you collect the premium, but if it drops significantly, you're obligated to buy the token at a loss.
            </>), 
            backgroundImage: `url(${S4})`, APR: '107.01%', tag: 'Option Trading',
            usecases: ["You sell put options on $COMP, expecting it to remain above a specific price level. If $COMP stays above this strike price, you collect the premium, achieving an APR of 20% - 40%. However, if $COMP drops below the strike price, you're obligated to buy it, which could result in losses if the market continues downward."]
         },

        { id: 5, title: "Iron Condor", 
            description: (<>
                An iron condor involves selling both a call spread and a put spread on the same asset. This strategy is profitable in low volatility situations but can suffer losses if the price moves significantly in either direction.
                <br /><br />
                Example: You could employ an iron condor on a DeFi token like $MKR if you expect the token's price to stay within a certain range. You would sell a call spread and a put spread, aiming to collect premiums with limited risk on both sides.    
            </>), 
            backgroundImage: `url(${S5})`, APR: '89.71%', tag: 'Option Trading',
            usecases: ["You anticipate $MKR's price will remain range-bound in the short term. By setting up an iron condor, you sell a call spread and a put spread around the expected range. This strategy works well in low-volatility conditions, allowing you to collect premiums from both sides. If $MKR stays within the range, you realize an APR between 15% and 30%."]
        },

        { id: 6, title: "Looping", 
            description: (<>
                The Looping Strategy in money markets like Aave involves depositing an asset as collateral, borrowing against that collateral, and then redepositing the borrowed funds back into the protocol to increase the overall yield. This process can be repeated (looped) multiple times to amplify returns.
                <br /><br />
                For example, a user might deposit stablecoins like USDC, borrow additional USDC against it, and then redeposit the borrowed USDC to borrow even more, creating a loop. This strategy leverages the interest rate differential between the asset deposited and the asset borrowed. However, it carries risks such as liquidation if the collateral value drops or the borrowed asset's interest rate increases.
            </>), 
            backgroundImage: `url(${S6})`, APR: '91.47%', tag: 'Looping',
            usecases: ["Suitable for conservative investors looking to boost their stablecoin yields without exposure to volatile assets. This strategy works best when the borrowing rate is lower than the lending rate, allowing for a positive interest rate spread. However, it requires careful monitoring of interest rates to avoid the risk of liquidation if market conditions change.", "Suitable for investors seeking higher returns and who are comfortable with the complexities of managing a leveraged position. This approach is ideal for those who want to maximize their yield by not only earning interest but also by collecting additional protocol rewards.", "Best for investors with a bullish outlook on the collateral asset and a high tolerance for risk. This strategy is not recommended for conservative investors, as it involves significant market risk and the potential for rapid liquidation if the collateral value falls.", "Suitable for advanced DeFi users who can actively monitor interest rate changes across multiple platforms. This strategy requires a thorough understanding of market conditions and the agility to adjust positions quickly to avoid risks like liquidation or unfavorable rate shifts."]
        },

        { id: 7, title: "FCN (Pure Options)", 
            description: (<>
                This vault trades an exotic options structured product that delivers a Pure Options strategy. Investors accrue high, daily yield payments on their deposited capital which is paid when the vault expires/matures. At expiry, the initial deposit is returned to investors in full if the price of an underlying asset (BTC, ETH) has not fallen below the Knock-In level during the 27 day trade.
                <br /><br />
                Pure Options vaults are valuable investments for investors who seek superior yields, do not want exposure to bonds/lending, and have positively or moderately bullish views on the price of the underlying crypto assets.
            </>), 
            backgroundImage: `url(${S1})`, APR: '98.47%', tag: 'Option Trading',
            usecases: ["You hold USDC and want to earn safer, real yield in USDC at 18.40% APY.", "You are bullish on the price of BTC & ETH and believe their prices will not decrease by 30% over the next 27 days.", "You do not want exposure to lending/bonds, and prefer to earn yield solely through options premiums."]
        },
        
        { id: 7, title: "Concentrated Liquidity Provision (CLP)", 
            description: (<>
                Concentrated Liquidity Provision (CLP) involves providing liquidity to decentralized exchanges (DEXs) like Uniswap V3, SushiSwap, or Balancer with a specific price range. Unlike traditional liquidity provision, where liquidity is spread evenly across all possible prices, CLP allows liquidity providers (LPs) to concentrate their funds within a narrower price range where they expect most trading activity to occur.
                <br /><br />
                This concentration can lead to higher fee earnings when trades occur within the chosen range. However, it also increases exposure to price movements and the risk of impermanent loss if the asset price moves out of the specified range.
            </>), 
            backgroundImage: `url(${S2})`, APR: '121.47%', tag: 'CLP',
            usecases: ["Ideal for risk-averse investors looking to earn yield on stable assets while minimizing volatility and impermanent loss.", "Suitable for investors with a strong market view or technical analysis skills who can predict price movements and adjust their range dynamically to maximize fees.", "Best for active traders and investors who closely monitor market events and are willing to actively manage their liquidity positions to capitalize on short-term opportunities.", "Suitable for advanced DeFi users looking to optimize yield with minimal manual intervention by using automation to mitigate risks and enhance returns."]
        },

        { id: 8, title: "Leverage Trading", 
            description: (<>
                Leverage trading in DeFi involves using borrowed funds to open a position larger than the initial investment, allowing traders to potentially amplify their returns on price movements of cryptocurrencies. DeFi platforms like Aave, Compound, and decentralized perpetual swap exchanges like dYdX and GMX provide the infrastructure to facilitate leveraged trading without relying on centralized intermediaries.
                <br /><br />
                By using leverage, traders can gain more exposure to an asset's price movement than they could with their capital alone. However, leverage trading significantly increases risk, including the potential for liquidation if the market moves against the position.
            </>), 
            backgroundImage: `url(${S4})`, APR: '421.47%', tag: 'Leverage',
            usecases: ["Suitable for experienced traders who have a strong market outlook and are willing to accept high risk for the potential of high rewards. This strategy is best used in volatile markets where significant price movements are expected.", "Suitable for investors looking to protect their portfolio against market downturns without selling their long-term holdings. This strategy allows for risk management by balancing the portfolio's overall exposure to market movements.", "Ideal for yield farmers and liquidity providers looking to amplify their returns. However, this strategy involves the risks of both leverage and impermanent loss, making it suitable for those with a higher risk tolerance.", "Suitable for advanced traders who are comfortable with high volatility and have experience managing leveraged positions. This strategy provides opportunities for profit in both rising and falling markets, but it also requires careful management to avoid liquidation risks."]
        },
    ];

    const [selectedMission, setSelectedMission] = useState(missions[0]);
    const [selectedMission2, setSelectedMission2] = useState(missions2[0]);
    const [selectedMission3, setSelectedMission3] = useState(missions3[0]);

    const contractAddress = "0x0000000000000000000000000000000000000000";
    
    const [activeTab, setActiveTab] = useState('100% Protection');
    const tabs = ['100% Protection', 'Partial Protection', 'High Yield Volatile'];

    const copyToClipboard = () => {
        navigator.clipboard.writeText(contractAddress).then(() => {
          alert('Contract address copied to clipboard!');
        }).catch(err => {
          console.error('Failed to copy: ', err);
        });
    };

    const handleMissionSelect = (mission) => {
        setSelectedMission(mission);
    };

    const handleMissionSelect2 = (mission) => {
        setSelectedMission2(mission);
    };

    const handleMissionSelect3 = (mission) => {
        setSelectedMission3(mission);
    };

    // Function to group missions into rows of two
    const groupedMissions = missions.reduce((acc, mission, index) => {
        if (index % 2 === 0) acc.push([]); // start a new group every two missions
        acc[acc.length - 1].push(mission);
        return acc;
    }, []);

    const groupedMissions2 = missions2.reduce((acc, mission, index) => {
        if (index % 2 === 0) acc.push([]); // start a new group every two missions
        acc[acc.length - 1].push(mission);
        return acc;
    }, []);

    const groupedMissions3 = missions3.reduce((acc, mission, index) => {
        if (index % 2 === 0) acc.push([]); // start a new group every two missions
        acc[acc.length - 1].push(mission);
        return acc;
    }, []);

    return (
        <div className='bif-parent strategy-parent' style={parentVaultDetailStyle}>

            <div className="tabs tabs-strategy">
                {tabs.map(tab => (
                    <button 
                        key={tab} 
                        className={`tab-button tab-btn-strategy ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            
            {activeTab === '100% Protection' && (
                <div className="mission-select-container">
                    <div className="operations-panel">
                        <h1 className="quick-match-header">100% Principle Protection Strategies</h1>
                        {groupedMissions.map((group, index) => (
                            <div className="missions-row" key={index}>
                                {group.map(mission => (
                                    <div
                                        key={mission.id}
                                        className={`mission-card ${selectedMission.id === mission.id ? 'active' : ''}`}
                                        onClick={() => handleMissionSelect(mission)}
                                        style={{ backgroundImage: mission.backgroundImage }}
                                    >
                                        <div style={{ width: "100%" }}>
                                            <h1>{mission.title}</h1>
                                            <h1 style={{ fontSize: "26px" }}>{mission.APR} APR</h1>

                                            <div className='tag'>
                                                <h1>{mission.tag}</h1>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="mission-info">
                        <h2>{selectedMission.title}</h2>
                        <p>{selectedMission.description}</p>
                        <div className="mission-objectives">
                            <strong>Strategic Usecases</strong>
                            <ul>
                                {selectedMission.usecases.map((objective, index) => (
                                    <li key={index}>{objective}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <strong style={{ marginTop: "3%" }}>Token Parameters</strong>
                        <div className="structure-parameters">
                            <div className="parameter-box">Underlying Asset (1) <br /><strong>SST</strong></div>
                            <div className="parameter-box">Underlying Asset (2) <br /><strong>SST/USDT</strong></div>
                            <div className="parameter-box">Downside protection <br /><strong>30%</strong></div>
                            <div className="parameter-box">Deposit Asset <br /><strong>USDT</strong></div>
                            <div className="parameter-box">Settlement Asset <br /><strong>USDT</strong></div>
                            <div className="parameter-box">Knock-In Observation <br /><strong>Daily</strong></div>
                            <div className="parameter-box">Knock-In Observation Time <br /><strong>2pm UTC</strong></div>
                            <div className="parameter-box">Knock-In Logic <br /><strong>Worst of Basket</strong></div>
                            <div className="parameter-box">Auto-Rollover <br /><strong>Enabled</strong></div>
                        </div>

                        <strong style={{ marginTop: "3%" }}>Trade Parameters</strong>
                        <div className="structure-parameters">
                            <div className="parameter-box">Tenor <br /><strong>27 days</strong></div>
                            <div className="parameter-box">Deposit Closing Time <br /><strong>Thurs 10am UTC</strong></div>
                            <div className="parameter-box">Trading Time <br /><strong>Thurs 2pm UTC</strong></div>
                            <div className="parameter-box">Expiration Date <br /><strong>2pm UTC after expiry</strong></div>
                            <div className="parameter-box">Minimum Deposit <br /><strong>1.0 USDT</strong></div>
                            <div className="parameter-box">Minimum Withdrawal <br /><strong>0.5 vault tokens</strong></div>
                        </div>
                        
                        <strong style={{ marginTop: "3%" }}>Smart Contract Parameters</strong>
                        <div className="smart-contract-parameters">
                            <div className="product-contract">
                                <div className="contract-address">
                                <span>
                                    <img src={base} onClick={copyToClipboard} alt="Ethereum Logo" className="eth-logo" />
                                    0x0000000000000000000000000000000000000000
                                </span>
                                
                                <img src={copy} alt="Copy Icon" className="copy-icon" />
                                
                                </div>
                            </div>
                        </div>
                        
                        <strong style={{ marginTop: "3%" }}>Payoff Scenarios</strong>
                        <div className="payoff-scenarios">
                            <div className="scenario">
                                <div className="scenario-header">
                                <span>① Normal expiry, closing spot above 100%</span>
                                <span className="arrow">&#9662;</span>
                                </div>
                            </div>
                            
                            <div className="scenario">
                                <div className="scenario-header">
                                <span>② Knock-in event</span>
                                <span className="arrow">&#9662;</span>
                                </div>
                            </div>
                            
                            <div className="scenario">
                                <div className="scenario-header">
                                <span>③ Knock-in event, spot at expiry recovers above barrier</span>
                                <span className="arrow">&#9662;</span>
                                </div>
                            </div>
                        </div>

                        <strong style={{ marginTop: "3%" }}>Risks</strong>
                        <span>RoyalDAO vault strategies are sophisticated investment products that carry risks and are not suitable for investors who do not comprehend the product or are risk averse.</span>
                    
                        <strong style={{ marginTop: "3%" }}>Credit Risk</strong>
                        <span>If a market maker (MM) defaults, they may not pay the yield owed to depositors for the 27 day trade. However, there is no credit risk for the depositor’s invested capital because it is 100% collateralized on-chain and not engaged in lending. Cega has strong risk management practices including signing ISDA legal agreements with MMs, and choosing accredited MMs who pass KYC and who have a history of credit worthiness.</span>
                    
                        <strong style={{ marginTop: "3%" }}>Principal at Risk</strong>
                        <span>Pure Options investors are taking a bullish perspective towards crypto markets. However, if markets experience a significant downturn (eg. 30% decline) that exceeds the knock-in barriers, investors may lose some portion of their initial investment.</span>
                    
                        <strong style={{ marginTop: "3%" }}>Smart Contract Risk</strong>
                        <span>There is smart contract risk associated with depositing funds on-chain. To ensure security, Cega enlisted top firms to audit its code and has an ongoing retainer for new features. The Ethereum smart contract was double audited by Ottersec and Zellic. The Solana smart contract was audited by Ottersec and saw security consultation by Zellic during the development process.</span>
                    </div>
                </div>
            )}

            {activeTab === 'Partial Protection' && (
                <div className="mission-select-container">
                    <div className="operations-panel">
                        <h1 className="quick-match-header">Partial Principle Protection Strategies</h1>
                        {groupedMissions2.map((group, index) => (
                            <div className="missions-row" key={index}>
                                {group.map(mission => (
                                    <div
                                        key={mission.id}
                                        className={`mission-card ${selectedMission2.id === mission.id ? 'active' : ''}`}
                                        onClick={() => handleMissionSelect2(mission)}
                                        style={{ backgroundImage: mission.backgroundImage }}
                                    >
                                        <div style={{ width: "100%" }}>
                                            <h1>{mission.title}</h1>
                                            <h1 style={{ fontSize: "26px" }}>{mission.APR} APR</h1>

                                            <div className='tag'>
                                                <h1>{mission.tag}</h1>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="mission-info">
                        <h2>{selectedMission2.title}</h2>
                        <p>{selectedMission2.description}</p>
                        <div className="mission-objectives">
                            <strong>Strategic Usecases</strong>
                            <ul>
                                {selectedMission2.usecases.map((objective, index) => (
                                    <li key={index}>{objective}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <strong style={{ marginTop: "3%" }}>Token Parameters</strong>
                        <div className="structure-parameters">
                            <div className="parameter-box">Underlying Asset (1) <br /><strong>SST</strong></div>
                            <div className="parameter-box">Underlying Asset (2) <br /><strong>SST/USDT</strong></div>
                            <div className="parameter-box">Downside protection <br /><strong>30%</strong></div>
                            <div className="parameter-box">Deposit Asset <br /><strong>USDT</strong></div>
                            <div className="parameter-box">Settlement Asset <br /><strong>USDT</strong></div>
                            <div className="parameter-box">Knock-In Observation <br /><strong>Daily</strong></div>
                            <div className="parameter-box">Knock-In Observation Time <br /><strong>2pm UTC</strong></div>
                            <div className="parameter-box">Knock-In Logic <br /><strong>Worst of Basket</strong></div>
                            <div className="parameter-box">Auto-Rollover <br /><strong>Enabled</strong></div>
                        </div>

                        <strong style={{ marginTop: "3%" }}>Trade Parameters</strong>
                        <div className="structure-parameters">
                            <div className="parameter-box">Tenor <br /><strong>27 days</strong></div>
                            <div className="parameter-box">Deposit Closing Time <br /><strong>Thurs 10am UTC</strong></div>
                            <div className="parameter-box">Trading Time <br /><strong>Thurs 2pm UTC</strong></div>
                            <div className="parameter-box">Expiration Date <br /><strong>2pm UTC after expiry</strong></div>
                            <div className="parameter-box">Minimum Deposit <br /><strong>1.0 USDT</strong></div>
                            <div className="parameter-box">Minimum Withdrawal <br /><strong>0.5 vault tokens</strong></div>
                        </div>
                        
                        <strong style={{ marginTop: "3%" }}>Smart Contract Parameters</strong>
                        <div className="smart-contract-parameters">
                            <div className="product-contract">
                                <div className="contract-address">
                                <span>
                                    <img src={base} onClick={copyToClipboard} alt="Ethereum Logo" className="eth-logo" />
                                    0x0000000000000000000000000000000000000000
                                </span>
                                
                                <img src={copy} alt="Copy Icon" className="copy-icon" />
                                
                                </div>
                            </div>
                        </div>
                        
                        <strong style={{ marginTop: "3%" }}>Payoff Scenarios</strong>
                        <div className="payoff-scenarios">
                            <div className="scenario">
                                <div className="scenario-header">
                                <span>① Normal expiry, closing spot above 100%</span>
                                <span className="arrow">&#9662;</span>
                                </div>
                            </div>
                            
                            <div className="scenario">
                                <div className="scenario-header">
                                <span>② Knock-in event</span>
                                <span className="arrow">&#9662;</span>
                                </div>
                            </div>
                            
                            <div className="scenario">
                                <div className="scenario-header">
                                <span>③ Knock-in event, spot at expiry recovers above barrier</span>
                                <span className="arrow">&#9662;</span>
                                </div>
                            </div>
                        </div>

                        <strong style={{ marginTop: "3%" }}>Risks</strong>
                        <span>RoyalDAO vault strategies are sophisticated investment products that carry risks and are not suitable for investors who do not comprehend the product or are risk averse.</span>
                    
                        <strong style={{ marginTop: "3%" }}>Credit Risk</strong>
                        <span>If a market maker (MM) defaults, they may not pay the yield owed to depositors for the 27 day trade. However, there is no credit risk for the depositor’s invested capital because it is 100% collateralized on-chain and not engaged in lending. Cega has strong risk management practices including signing ISDA legal agreements with MMs, and choosing accredited MMs who pass KYC and who have a history of credit worthiness.</span>
                    
                        <strong style={{ marginTop: "3%" }}>Principal at Risk</strong>
                        <span>Pure Options investors are taking a bullish perspective towards crypto markets. However, if markets experience a significant downturn (eg. 30% decline) that exceeds the knock-in barriers, investors may lose some portion of their initial investment.</span>
                    
                        <strong style={{ marginTop: "3%" }}>Smart Contract Risk</strong>
                        <span>There is smart contract risk associated with depositing funds on-chain. To ensure security, Cega enlisted top firms to audit its code and has an ongoing retainer for new features. The Ethereum smart contract was double audited by Ottersec and Zellic. The Solana smart contract was audited by Ottersec and saw security consultation by Zellic during the development process.</span>
                    </div>
                </div>
            )}

            {activeTab === 'High Yield Volatile' && (
                <div className="mission-select-container">
                    <div className="operations-panel">
                        <h1 className="quick-match-header">High Yield Volatile Strategies</h1>
                        {groupedMissions3.map((group, index) => (
                            <div className="missions-row" key={index}>
                                {group.map(mission => (
                                    <div
                                        key={mission.id}
                                        className={`mission-card ${selectedMission3.id === mission.id ? 'active' : ''}`}
                                        onClick={() => handleMissionSelect3(mission)}
                                        style={{ backgroundImage: mission.backgroundImage }}
                                    >
                                        <div style={{ width: "100%" }}>
                                            <h1>{mission.title}</h1>
                                            <h1 style={{ fontSize: "26px" }}>{mission.APR} APR</h1>

                                            <div className='tag'>
                                                <h1>{mission.tag}</h1>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="mission-info">
                        <h2>{selectedMission3.title}</h2>
                        <p>{selectedMission3.description}</p>
                        <div className="mission-objectives">
                            <strong>Strategic Usecases</strong>
                            <ul>
                                {selectedMission3.usecases.map((objective, index) => (
                                    <li key={index}>{objective}</li>
                                 ))}
                            </ul>
                        </div>
                        
                        <strong style={{ marginTop: "3%" }}>Token Parameters</strong>
                        <div className="structure-parameters">
                            <div className="parameter-box">Underlying Asset (1) <br /><strong>SST</strong></div>
                            <div className="parameter-box">Underlying Asset (2) <br /><strong>SST/USDT</strong></div>
                            <div className="parameter-box">Downside protection <br /><strong>30%</strong></div>
                            <div className="parameter-box">Deposit Asset <br /><strong>USDT</strong></div>
                            <div className="parameter-box">Settlement Asset <br /><strong>USDT</strong></div>
                            <div className="parameter-box">Knock-In Observation <br /><strong>Daily</strong></div>
                            <div className="parameter-box">Knock-In Observation Time <br /><strong>2pm UTC</strong></div>
                            <div className="parameter-box">Knock-In Logic <br /><strong>Worst of Basket</strong></div>
                            <div className="parameter-box">Auto-Rollover <br /><strong>Enabled</strong></div>
                        </div>

                        <strong style={{ marginTop: "3%" }}>Trade Parameters</strong>
                        <div className="structure-parameters">
                            <div className="parameter-box">Tenor <br /><strong>27 days</strong></div>
                            <div className="parameter-box">Deposit Closing Time <br /><strong>Thurs 10am UTC</strong></div>
                            <div className="parameter-box">Trading Time <br /><strong>Thurs 2pm UTC</strong></div>
                            <div className="parameter-box">Expiration Date <br /><strong>2pm UTC after expiry</strong></div>
                            <div className="parameter-box">Minimum Deposit <br /><strong>1.0 USDT</strong></div>
                            <div className="parameter-box">Minimum Withdrawal <br /><strong>0.5 vault tokens</strong></div>
                        </div>
                        
                        <strong style={{ marginTop: "3%" }}>Smart Contract Parameters</strong>
                        <div className="smart-contract-parameters">
                            <div className="product-contract">
                                <div className="contract-address">
                                <span>
                                    <img src={base} onClick={copyToClipboard} alt="Ethereum Logo" className="eth-logo" />
                                    0x0000000000000000000000000000000000000000
                                </span>
                                
                                <img src={copy} alt="Copy Icon" className="copy-icon" />
                                
                                </div>
                            </div>
                        </div>
                        
                        <strong style={{ marginTop: "3%" }}>Payoff Scenarios</strong>
                        <div className="payoff-scenarios">
                            <div className="scenario">
                                <div className="scenario-header">
                                <span>① Normal expiry, closing spot above 100%</span>
                                <span className="arrow">&#9662;</span>
                                </div>
                            </div>
                            
                            <div className="scenario">
                                <div className="scenario-header">
                                <span>② Knock-in event</span>
                                <span className="arrow">&#9662;</span>
                                </div>
                            </div>
                            
                            <div className="scenario">
                                <div className="scenario-header">
                                <span>③ Knock-in event, spot at expiry recovers above barrier</span>
                                <span className="arrow">&#9662;</span>
                                </div>
                            </div>
                        </div>

                        <strong style={{ marginTop: "3%" }}>Risks</strong>
                        <span>RoyalDAO vault strategies are sophisticated investment products that carry risks and are not suitable for investors who do not comprehend the product or are risk averse.</span>
                    
                        <strong style={{ marginTop: "3%" }}>Credit Risk</strong>
                        <span>If a market maker (MM) defaults, they may not pay the yield owed to depositors for the 27 day trade. However, there is no credit risk for the depositor’s invested capital because it is 100% collateralized on-chain and not engaged in lending. Cega has strong risk management practices including signing ISDA legal agreements with MMs, and choosing accredited MMs who pass KYC and who have a history of credit worthiness.</span>
                    
                        <strong style={{ marginTop: "3%" }}>Principal at Risk</strong>
                        <span>Pure Options investors are taking a bullish perspective towards crypto markets. However, if markets experience a significant downturn (eg. 30% decline) that exceeds the knock-in barriers, investors may lose some portion of their initial investment.</span>
                    
                        <strong style={{ marginTop: "3%" }}>Smart Contract Risk</strong>
                        <span>There is smart contract risk associated with depositing funds on-chain. To ensure security, Cega enlisted top firms to audit its code and has an ongoing retainer for new features. The Ethereum smart contract was double audited by Ottersec and Zellic. The Solana smart contract was audited by Ottersec and saw security consultation by Zellic during the development process.</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Strategy;
