import logo from '../../assets/images/logo.png'

import './Navbar.css'

const NavbarItem = (props) => {
  return (
    <li>{props.title}</li>
  )
}

const navbarArr = ["Market", "Exchange", "Tutorials", "Wallets"]

function Navbar() {
  return (
    <div className="navbar-box">
      <div className="img-box">
        <img src={logo} alt="" width={50} height={50}/>
        <h2>Lesenelir's Crypto Website</h2>
      </div>
      <ul>
        {navbarArr.map((item, index) => (
          <NavbarItem key={item + index} title={item}/>
        ))}
        <li className="login-li">Login</li>
      </ul>
    </div>
  )
}

export default Navbar
