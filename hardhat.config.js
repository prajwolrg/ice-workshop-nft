require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    frost: {
      url: `https://frost-rpc.icenetwork.io:9933`,
      accounts: [process.env.FROST_PRIVATE_KEY],
      blockGasLimit: 10^8,
      gas: 10^8 
    },
    ibriz: {
      url: `https://airdrop.ibriz.ai:9933`,
      accounts: [process.env.FROST_PRIVATE_KEY],
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/6951cd7364d4496eb69a6462be16a77a`,
      accounts: [process.env.ROPSTEN_PRIVATE_KEY]
    }

  }
};

