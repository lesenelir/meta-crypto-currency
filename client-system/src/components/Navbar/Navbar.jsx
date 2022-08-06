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
        <ul>
          {navbarArr.map((item, index) => (
              <NavbarItem key={index} title={item}/>
          ))}
          <li className="login-li">Login</li>
        </ul>
      </div>
  )
}

export default Navbar
