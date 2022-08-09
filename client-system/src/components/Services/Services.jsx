import { BsShieldFillCheck } from "react-icons/bs"
import { BiSearchAlt } from "react-icons/bi"
import { RiHeart2Fill } from "react-icons/ri"


import './Services.css'

// 封装Card组件
const Card = (props) => {

  const {color, title, icon, subtitle} = props

  return (
      <div className="card-box">
        <div className="card-box-left">
          <div className="card-box-left-logo" style={{backgroundColor: color}}>
            {icon}
          </div>
        </div>
        <div className="card-box-middle">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        {/*右侧盒子来占位*/}
        <div className="card-box-right"/>
      </div>
  )
}


function Services() {
  return (
      <div className="services-box">

        <div className="services-box-left">
          <h1>
            Services that we
            <br/>
            continue to improve
          </h1>
          <p>
            The best choice for buying and selling your crypto assets,
            <br/>
            with the various super friendly services we offer.
          </p>
          <h5>
            LET'S GET STARTED
          </h5>
        </div>

        <div className="services-box-right">
          <Card
              color="#2952E3"
              title="Security gurantee"
              icon={<BsShieldFillCheck fontSize={30} color="#fff" />}
              subtitle="Security is guranteed.
                We always maintain privacy and maintain the quality of our products"
          />
          <Card
              color="#8945F8"
              title="Best exchange rates"
              icon={<BiSearchAlt fontSize={30} color="#fff" />}
              subtitle="Minimum Transaction Fee.
                We always maintain the best commission rates of our products"
          />
          <Card
              color="#F84550"
              title="Fastest transactions"
              icon={<RiHeart2Fill fontSize={30} color="#fff" />}
              subtitle="Fastest transactions speed.
                We always maintain the fastest transactions speed of our products"
          />
        </div>

      </div>
  )
}

export default Services
