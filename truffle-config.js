var HDWalletProvider = require("@truffle/hdwallet-provider");
const MNEMONIC = '';
module.exports = {
  networks: {

     mainnet: {
         provider: function() {
           return new HDWalletProvider(MNEMONIC, 'https://mainnet.infura.io/v3/')
         },
         network_id: '1',
         gas: 4500000,
         gasPrice: 10000000000,
       },

    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/")
      },
      network_id: 3,
      gas: 6800000
      //gas: 6800000      //make sure this gas allocation isn't over 4M, which is the max
    }
  },
  compilers: {
    solc: {
      version: "0.6.6",
    }
  },
};
