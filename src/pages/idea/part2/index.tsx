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


    return <section className="idea-part2-container">
        <div className="title">THAT IS WHY WE ARE HERE</div>
        <div className="desc">
          Good job education consistent approach —— empathy.
        </div>
        <div className="desc">
          Good job education requires us to think from the customer's point of view, to put ourselves in the customer's perspective to provide the best solution to his problem.
        </div>
        <div className="desc">
          Good job education does not exist to solve the current supply and demand relationship.
        </div>
        <div className="desc">
          Every customer's needs change in the time and space, how to capture the future of customers is the subject of all members of Good job education
        </div>
      </section>
}
export default Part4;