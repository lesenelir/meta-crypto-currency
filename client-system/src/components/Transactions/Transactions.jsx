import {useContext} from "react"

import {TransactionContext} from "../../context/TransactionContext"
// import dummyData from "../../utils/dummyData"
import shortenAddress from "../../utils/shortenAddress"
import useFetch from "../hooks/useFetch"

import './Transactions.css'


// Card 组件
const TransactionCard = (props) => {
  const {addressTo, addressFrom, timestamp, message, keyword, amount} = props

  const gifUrl = useFetch({keyword})

  return (
      <div className="transaction-card-box">
        {/* 文字 */}
        <div className="transaction-card-text-box">
          <a href={`https://rinkeby.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p>From: {shortenAddress(addressFrom)}</p>
          </a>
          <a href={`https://rinkeby.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
            <p>To: {shortenAddress(addressTo)}</p>
          </a>
          <p>Amount: {amount} ETH</p>
          {
            message ? (
                <p>Message: {message}</p>
            ) : (
                <p>Message: no message</p>
            )
          }
        </div>
        {/* 图片 */}
        <img
            src={gifUrl || 'https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284'}
            alt="gif"
            className="transaction-card-img"
        />

        {/* 时间戳 */}
        <div className="transaction-card-time-box">
          <p>{timestamp}</p>
        </div>

      </div>
  )
}


function Transactions() {

  const { currentAccount, transactions } = useContext(TransactionContext)

  // 渲染交易列表
  return (
      <div className="transaction-box">
        <div className="transaction-box-top">
          {
            currentAccount ? (
                <h3>Latest Transactions</h3>
            ) : (
                <h3>Connect your account to see the latest transactions</h3>
            )
          }
        </div>

        <div className="transaction-box-bottom">
          {
            transactions.reverse().map((item, index) => (
              <TransactionCard key={index} {...item} />
            ))
          }
        </div>
      </div>
  )
}

export default Transactions
