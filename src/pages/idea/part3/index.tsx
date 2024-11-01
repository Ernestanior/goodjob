import { FC } from "react"
import './index.less'
import Pad from './assets/pad.png'
import Phone from './assets/phone.png'
import desktop from './assets/desktop.png'

import icon1 from './icons/1.png'
import icon2 from './icons/2.png'
import icon3 from './icons/3.png'
import { Col, Row } from "antd"
import { NotificationOutlined,NodeIndexOutlined,ShareAltOutlined } from '@ant-design/icons';

const Part4: FC = ()=>{


    return <section className="idea-part3-container">
      <div className="content">
        <section className="col">
          <span className="icon"><NodeIndexOutlined /></span>
          <h4 className="title">Independence</h4>
          <div className="item">How to better serve customers?</div>
          <div className="item">The best understanding of customer needs must be the customer itself.</div>
          <div className="item">In the service relationship, let the customer control the initiative.</div>
          <div className="item">Customize your own service system.</div>
        </section>
        <section className="col">
        <span className="icon"><NotificationOutlined /></span> 
          <h4 className="title">How to better serve customers?</h4>
          <div className="item">Give a man a fish, and you feed him for a day. Teach a man to fish, and you feed him for a lifetime.</div>
          <div className="item">Helping customers solve their needs is not as good as providing solutions to their needs.</div>
        </section>
        <section className="col">
        <span className="icon"><ShareAltOutlined /></span>
          <h4 className="title">How to make him realize and develop his potential?</h4>
          <div className="item">The renewal of self-knowledge comes from "trying".</div>
          <div className="item">Trying means breaking the old approaches again and again and experiencing new ones.</div>
          <div className="item">Experience, feel new feelings, know new cognition.</div>
        </section>
      </div>
      </section>
}
export default Part4;