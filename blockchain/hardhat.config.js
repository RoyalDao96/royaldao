require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20"
  },
  paths: {
    artifacts: "./client/src/artifacts"
  }
};
