//const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
//const PRIVATE_KEY = "YOUR_WALLET_PRIVATE_KEY"

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider([PRIVATE_KEY], "https://ropsten.infura.io/v3/YOUR_INFURA_KEY");
      },
      network_id: 3,
      gas: 5000000,
      skipDryRun: true,
      gasPrice: 20000000000
    }

   },
  compilers: {
    solc: {
      version: ">=0.6.0 <0.8.0"
    } 
  }
};