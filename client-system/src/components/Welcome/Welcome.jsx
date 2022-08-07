import { SiEthereum } from "react-icons/si"
import { BsInfoCircle } from "react-icons/bs"

import Loader from "../Loader/Loader"

import './Welcome.css'


const Input = (props) => {
  return (
      <input
          className="welcome-input"
          placeholder={props.placeholder}
          type={props.type}
          step="0.0001"
          value={props.value}
          onChange={(e) => props.handleChange(e, props.name)}
      />
  )
}


function Welcome() {
  const isLoading = false

  const connectWallet = () => {

  }

  const handleChange = () => {

  }

  const handleSubmit = () => {

  }


  return (
      <div className="welcome-box">
        <div className="welcome-box-left">
          <div className="box-left-top">
           <h1 className="welcome-h1">Send Crypto <br/> around the world </h1>
           <p className="welcome-p">
             Explore the web3.0 world.
             Buy and sell crypto currencies easily.
             <br/>
             Lesenelir's Crypto App to be your crypto market partner.
           </p>
          </div>
          <button
             className="connect-btn"
             onClick={connectWallet}
          >
           <p>Connect Wallet</p>
          </button>
          <div className="box-left-bottom">
            <div className="l">
              <div className="l1">Reliability</div>
              <div className="l2">Web3.0</div>
            </div>
            <div className="m">
              <div className="m1">Security</div>
              <div className="m2">Ethereum</div>
            </div>
            <div className="r">
              <div className="r1">Low fees</div>
              <div className="r2">Blockchain</div>
            </div>
          </div>
        </div>

        <div className="welcome-box-right">
          <div className="welcome-card">
            <div className="welcome-card-top">
              <div className="card-logo">
                <SiEthereum fontSize={30} color="#444" />
              </div>
              <BsInfoCircle style={{marginRight: '10px'}} fontSize={20} color="#444" />
            </div>
            <div className="welcome-card-p">
              <p className="p1">Address</p>
              <p className="p2">Ethereum</p>
            </div>
          </div>

          <div className="welcome-right-form">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

            <div className="welcome-right-hr"/>

            {
              isLoading ? (
                  <Loader/>
              ) : (
                  <button
                      type="submit"
                      onClick={handleSubmit}
                      className="send-btn"
                  >
                    Send Now
                  </button>
              )
            }

          </div>

        </div>

      </div>
  )
}

export default Welcome
