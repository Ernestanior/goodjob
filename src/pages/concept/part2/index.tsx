import { FC } from "react"
import './index.less'
import Pad from './assets/pad.png'
import Phone from './assets/phone.png'
import desktop from './assets/desktop.png'

import icon1 from './icons/1.png'
import icon2 from './icons/2.png'
import icon3 from './icons/3.png'
import { Col, Row } from "antd"

const Part4: FC = ()=>{


    return <section className="concept-part2-container">
        <div className="title">THAT  IS  HOW  EMPATHY  CONNECT</div>
        <div className="desc">
        Empathy Group is not a traditional intermediary, but more like a service provider.
        </div>
        <div className="desc">
        The poor information of the overseas study industry comes from the asymmetry of price and service content.
        </div>
        <div className="desc">
        The Times require that we should break away from the role of traditional intermediaries and become the leader of new trends in the industry.
        </div>
        <div className="desc">
          Build the model of "service providers - platform supervision system - users", and cooperate with users to select services and products with both cost-effective and competitive.
          </div>
      </section>
}
export default Part4;