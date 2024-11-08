import { FC } from "react"
import './index.less'
import { Button, MenuProps ,Dropdown, Space} from "antd";
import Logo from "@/assets/logo.jpg";
import {DownOutlined} from '@ant-design/icons';
import Nav from "@/old/components/nav";
const Part1: FC = ()=>{
    return <div className="concept-part1-container">
        <div className="mask">
            <Nav></Nav>
            <section className="concept-part1-content">
                <h1 className="title">Good job education's the framework</h1>
                <div className="sub-title">Self-contained supply chain model for overseas study.</div>
            </section>
            
        </div>
    </div>
}
export default Part1;