// require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-waffle')

const {privateKey} = require('./secrets/secrets.json')

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/SfHtz1_uP5sVwQfKspMI9fiJ-K1V7nFc',
      accounts: [privateKey]
    }
  }
};
