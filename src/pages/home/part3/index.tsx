import { FC } from "react"
import './index.less'
import { Button, MenuProps, Row ,Dropdown, Space, Col} from "antd";
import { BarChartOutlined, DesktopOutlined, DownOutlined, FormOutlined, MobileOutlined, SmileOutlined, UndoOutlined, UnorderedListOutlined } from '@ant-design/icons';
const Part3: FC = ()=>{


    return <div className="home-function-conatiner">
        <div className="mask"></div>
        <div className="content">
          <h1 className="title">Good Job Education`s Advantage </h1>
          <div className="sub-title">Empathy is our name and our weapon. </div>
          <Row gutter={[16, 24]} className="item-container">
            <Col xs={12} md={12} lg={8} className="item">
              <Row className="item-label">
                <span className="item-icon"><DesktopOutlined /></span>
                <span style={{marginLeft:10}}>Matrix Operation</span>
              </Row>
              <div className="item-content">
                <div className="item-content-row">international students group:500+</div>
                <div className="item-content-row">overseas students users:20w+</div>
                <div className="item-content-row">public account platform:10+</div>
              </div>     
            </Col>
            <Col xs={12} md={12} lg={8} className="item">
              <Row className="item-label">
                <span className="item-icon"><UnorderedListOutlined /></span>
                <span style={{marginLeft:10}}>Partnerships experience</span>
              </Row>
              <div className="item-content">
                <div className="item-content-row">Effective relationships and experience with overseas partners.</div>
              </div>     
            </Col><Col xs={12} md={12} lg={8} className="item">
              <Row className="item-label">
                <span className="item-icon"><MobileOutlined /></span>
                <span style={{marginLeft:10}}>Product agency</span>
              </Row>
              <div className="item-content">
                <div className="item-content-row">Complete overseas student service product agent and system,including learning end, life end.</div>
              </div>     
            </Col>

            <Col xs={12} md={12} lg={8} className="item">
              <Row className="item-label">
                <span className="item-icon"><UndoOutlined /></span>
                <span style={{marginLeft:10}}>Brand effect IP</span>
              </Row>
              <div className="item-content">
                <div className="item-content-row">6 years of experience in cooperation with different industries.</div>
              </div>     
            </Col>
            <Col xs={12} md={12} lg={8} className="item">
              <Row className="item-label">
              <span className="item-icon"><FormOutlined /></span>
                <span style={{marginLeft:10}}>Complete product</span>
              </Row>
              <div className="item-content">
                <div className="item-content-row">The "incubation" experience from 0 to 1</div>
              </div>     
            </Col><Col xs={12} md={12} lg={8} className="item">
              <Row className="item-label">
              <span className="item-icon"><BarChartOutlined /></span>
                <span style={{marginLeft:10}}>Marketing experience </span>
              </Row>
              <div className="item-content">
                <div className="item-content-row">Long-term and in-depth cooperation with many brands favored by international students. And made remarkable achievements in the cooperation.</div>
              </div>     
            </Col>

          </Row>
        </div>
    </div>
}
export default Part3;