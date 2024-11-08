import { FC } from "react"
import './index.less'
import image from './2.jpg'
import {CheckOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
const Part2: FC = ()=>{
  const navigate = useNavigate();
  const toPage = (e:string)=>{
    navigate(e)
  }

    return <div className="home-window-container">
      <section className="left">
        <h1 className="title">Our Concept -- Empathy</h1>
        <div className="desc">
          Empathy requires us to think from the customer's point of view, to put ourselves in the customer's perspective to provide the best solution to his problem. 
        </div>
        <section className="block">
          <div className="item">
            <div className="label">
              <CheckOutlined /> 
              <h2>Self-motivation</h2>
            </div>
            <div className="desc">
              Helping customers solve their needs is not as good as providing solutions to their needs. 
            </div>
          </div>
        </section>
      </section>
      <section className="right">
        <img className="image" src={image}></img>
      </section>
          
      </div>
}
export default Part2;