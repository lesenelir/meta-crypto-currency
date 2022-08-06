
import './Welcome.css'


const Input = () => {

}


function Welcome() {

  const connectWallet = () => {

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
         Right
       </div>
      </div>
  )
}

export default Welcome
