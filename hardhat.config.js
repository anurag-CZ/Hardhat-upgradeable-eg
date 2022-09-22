require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades")
require("@nomiclabs/hardhat-etherscan");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",

  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/441a81632bd64082a568a2d992c345ac`,
      accounts: ['b191b1348b71e4a55425eefd7cef1e69a2a18456cabca4a12af77d396986bcf8']
    },
    localhost: {
      url: "http:127.0.0.1:7545"
    }
  },
  etherscan: {
    apiKey:  "F6RX2N81GMURI1STC5GAWS15Y55QMXSPQA",
  }


}
