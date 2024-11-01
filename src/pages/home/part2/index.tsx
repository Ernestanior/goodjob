import { FC } from "react"
import './index.less'
import Seal1 from "./1.png";
import Seal2 from "./2.png";
import Seal3 from "./3.png";
import { useNavigate } from "react-router-dom";
const Part2: FC = ()=>{
  const navigate = useNavigate();
  const toPage = (e:string)=>{
    navigate(e)
  }

    return <div className="home-window-container">
                <div  className="home-window-col-left">
                    <div className="home-window-image-container">
                      <img src={Seal1} className="home-window-image"></img>
                      <div className="mask"/>
                      <button onClick={()=>toPage('concept')}  className="btn">View</button>
                    </div>
                    <div className="home-window-content">
                      <h2 className="home-window-content-title">The Framework</h2>
                      <span className="home-window-content-desc">Build the model of "service providers - platform supervision sytem -users", and cooperate with users to select services and products with both cost-effective and competitive.</span>
                    </div>
                </div>
                <div  className="home-window-col-mid">
                <div className="home-window-image-container">
                      <img src={Seal2} className="home-window-image"></img>
                      <div className="mask"></div>
                      <button onClick={()=>toPage('idea')}  className="btn">View</button>
                    </div>
                    <div className="home-window-content">
                      <h2 className="home-window-content-title">The Concept</h2>
                      <span className="home-window-content-desc">
                        Good job education's consistent approach —— empathy.
                      </span>
                      <span className="home-window-content-desc">
                        Empathy requires us to think from the customer's point of view,
                      </span>
                      <span className="home-window-content-desc">
                         to put ourselves in the customer's perspective to provide the best solution to his problem.
                      </span>
                    </div>
                </div>
                <div  className="home-window-col-right">
                <div className="home-window-image-container">
                      <img src={Seal3} className="home-window-image"></img>
                      <div className="mask"></div>
                      <button onClick={()=>toPage('idea')}  className="btn">View</button>
                    </div>
                    <div className="home-window-content">
                      <h2 className="home-window-content-title">The Service</h2>
                      <span className="home-window-content-desc">
                        Full coverage of study abroad services
                      </span>
                      <span className="home-window-content-desc">
                        1v1 service
                      </span>
                      <span className="home-window-content-desc">
                      Product agency ＆ system
                      </span>
                      <span className="home-window-content-desc">
                      ......
                      </span>
                    </div>
                </div>
          
        </div>
}
export default Part2;