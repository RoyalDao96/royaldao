const express = require("express");
const Moralis = require("moralis").default;
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/tokenPrice", async (req, res) => {

    const {query} = req;

    const wBTCPrice = await Moralis.EvmApi.token.getTokenPrice({
        address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
    })

    const wETHPrice = await Moralis.EvmApi.token.getTokenPrice({
        address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
    })

    const wSOLPrice = await Moralis.EvmApi.token.getTokenPrice({
        address: "0xD31a59c85aE9D8edEFeC411D448f90841571b89c"
    })

    const usdPrices = {
        tokenOne: wBTCPrice.raw.usdPrice,
        tokenTwo: wETHPrice.raw.usdPrice,
        tokenThree: wSOLPrice.raw.usdPrice,
    }

    return res.status(200).json(usdPrices);
});

Moralis.start({
    apiKey: process.env.MORALIS_KEY,
}).then(() => {
    app.listen(port, () => {
        console.log(`Listening for API Calls`);
    });
});