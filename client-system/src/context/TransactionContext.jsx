import {createContext, useEffect, useState} from "react"
import {ethers} from "ethers"

import {contractABI, contractAddress} from "../utils/constants"


export const TransactionContext = createContext()


// 解构window中的ethereum
const {ethereum} = window

// 连接合约函数
// 该函数可以去smart contract 进行交互连接
const getEthereumContract = () => {
  // 提供者
  const provider = new ethers.providers.Web3Provider(ethereum)
  // 签名者
  const signer = provider.getSigner()
  // 交易合约
  // console.log({
  //   provider,
  //   signer,
  //   transactionContract
  // })
  // 返回交易合约
  return new ethers.Contract(contractAddress, contractABI, signer)
}


// 组件
function TransactionProvider(props) {

  const [currentAccount, setCurrentAccount] = useState('')
  const [formData, setFormData] = useState({addressTo: '', amount: '', keyword: '', message: ''})
  const [isLoading, setIsLoading] = useState(false)
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'))

  // 修改formData函数
  const handleChange = (e, name) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: e.target.value
      }
    })
  }

  // 检查是否连接钱包函数
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert('please install metamask!')

      // ['0xedcb55e4a906054ca6e5a1fdc921867be5e4ed63']
      const accounts = await ethereum.request({method: 'eth_accounts'}) // 连接metamask的用户address

      if (accounts.length) {
        setCurrentAccount(accounts[0])
        // 获得所有交易的请求
        // getAllTransactions()
      } else {
        console.log('No accounts found')
      }
    } catch (error) {
      console.log(error)
      throw new Error('No ethereum object.')
    }
  }

  // 连接钱包函数
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('please install metamask!')

      const accounts = await ethereum.request({method: 'eth_requestAccounts'})

      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log(error)
      throw new Error('No ethereum object.')
    }
  }

  // 发送、存储交易函数
  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert('please install metamask!')
      // get the data from Form
      const { addressTo, amount, keyword, message } = formData
      // get the contract from the transaction. 可以利用该变量去调用smart contract中的函数
      const transactionContract = getEthereumContract()
      console.log(transactionContract)
      // ether amount change to wei
      const parsedAmount = ethers.utils.parseEther(amount)

      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: currentAccount,
          to: addressTo,
          gas: '0x5208', // 21000Wei
          value: parsedAmount._hex
        }]
      })

      // store transaction
      // async function: transactionContract.addToBlockchain . Needed some time to take this TX
      const transactionHash  = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword)

      setIsLoading(true)
      console.log(`Loading - ${transactionHash.hash}`)
      await transactionHash.wait()
      setIsLoading(false)
      console.log(`Success - ${transactionHash.hash}`)

      const transactionCount = await transactionContract.getTransactionCount()
      setTransactionCount(transactionCount.toNumber())

    } catch (error) {
      console.log(error)
      throw new Error('No ethereum object.')
    }
  }


  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  return (
      <TransactionContext.Provider value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        sendTransaction
      }}>
        {props.children}
      </TransactionContext.Provider>
  )
}


export default TransactionProvider




