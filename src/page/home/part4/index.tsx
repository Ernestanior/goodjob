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


    return <section className="home-part4-container">
        <section className="left-container">
        <img src={desktop} className="image desktop"></img>
          <img src={Pad} className="image pad"></img>
          <img src={Phone} className="image phone"></img>
        </section>
        <section className="right-container">
          <h1 className="title">Good job education`s cooperation. </h1>
          <div className="item">
              <Col><img src={icon1} className="icon"/></Col>
              <Col>
                <div className="sub-title">
                  first-level co-creation system
                </div>
                <div className="desc">Merge into Good job education's upstream and downstream. Unified market flow channels to achieve self-transformation within the system.</div>
              </Col>
          </div>
          <div className="item">
              <Col><img src={icon2} className="icon"/></Col>
              <Col>
                <div className="sub-title">
                  Secondary co-creation system
                </div>
                <div className="desc">Overseas product design, operation, resale.
                Fit the transformation system of Good job education, enrich the service chain of Good job education.</div>
              </Col>
          </div>
          <div className="item">
              <Col><img src={icon3} className="icon"/></Col>
              <Col>
                <div className="sub-title">
                  Three-level co-creation system
                </div>
                <div className="desc">Share Good job education's users.
                On the premise of non-conflict business formats, the study abroad service ecology is replenishment.</div>
              </Col>
          </div>
        </section>
      </section>
}
export default Part4;