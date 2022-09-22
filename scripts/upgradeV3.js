const { ethers, upgrades } = require("hardhat");

const proxyAddress = "0x4Fb867b58809067419e10aAF309F54B63355B3D5";

async function main() {
  const BoxV3 = await ethers.getContractFactory("BoxV3");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, BoxV3);

  console.log(upgraded.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });