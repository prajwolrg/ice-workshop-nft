// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    console.log(`Deployed with ${owner.address}`)

    const MyToken = await ethers.getContractFactory("MyToken");
    let mytoken = await MyToken.deploy("MyToken", "MTK");
    await mytoken.deployed();
    console.log(`Deployed NFT at ${mytoken.address}`)

    const MarketPlace = await ethers.getContractFactory("MarketPlace");
    let market = await MarketPlace.deploy();
    await market.deployed();
    console.log(`Deployed MarketPlace at ${market.address}`)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
