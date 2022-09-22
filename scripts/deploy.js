const {ethers, upgrades} = require('hardhat')


async function main() {
  const Contract = await ethers.getContractFactory('BoxV1')
  const contract = await upgrades.deployProxy(Contract, [10,10])

  await contract.deployed()

  console.log(contract.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});