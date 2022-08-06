import Navbar from "./components/Navbar/Navbar"
import Welcome from "./components/Welcome/Welcome"
import Services from "./components/Services/Services"
import Transactions from "./components/Transactions/Transactions"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div>
      <div>
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  )
}

export default App;
