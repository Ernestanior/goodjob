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


    return <section className="home-part5-container">
      <div className="content">
        <section className="col">
          <h4 className="title">ABOUT US</h4>
          <div className="item">Good Job Education Ptd. Ltd. (Brisbane, Australia)</div>
        </section>
        <section className="col">
          <h4 className="title">LINKS</h4>
          <div className="item">The Concept</div>
          <div className="item">The Framework</div>
          <div className="item">The Advantage</div>
          <div className="item">The Service</div>
        </section>
        <section className="col">
          <h4 className="title">CONTACT Us</h4>
          <div className="item">📫@empathytech666.com</div>
          <div className="item">📞86-17717571223</div>
        </section>
      </div>
      <div className="copyright-container">
        Copyright © goodjobedu.au
      </div>
      </section>
}
export default Part4;