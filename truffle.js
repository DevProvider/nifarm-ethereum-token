/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

 var HDWalletProvider = require("truffle-hdwallet-provider");
 var mnemonic = "soft moral grass same outside hard anger secret silly tell choice jaguar found state control";

module.exports = {
  
    networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/2d24b86e8d884f5aa7a11e78dbb3c87d")
      },
      network_id: 3
    }
  },

   solc :{
      optimizer:{
        enable:true,
        runs: 200
      }
    }

  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  // networks: {
  //   development: {
  //     host: '127.0.0.1',
  //     port: '7545',
  //     network_id: "*"
  //   },
  // rinkeby:{
  //   host: "localhost",s
  //   port: 8545,
  //   network_id: 4,
  //   gas: 4700000
  // }
  //}

};
