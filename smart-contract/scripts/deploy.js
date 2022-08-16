// responsible for deploying the contract

const main = async () => {

  // 生成ContractFactory
  const Transactions = await hre.ethers.getContractFactory("Transactions")
  const transactions = await Transactions.deploy() // 合约实例

  await transactions.deployed() // 合约实例部署

  console.log("Transactions deployed to : ", transactions.address) // 打印合约的地址
}


const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

runMain()
