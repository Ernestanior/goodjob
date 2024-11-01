import { FC } from "react"
import './index.less'
import { Button, MenuProps ,Dropdown, Space} from "antd";
import Logo from "@/assets/logo.jpg";
import {DownOutlined} from '@ant-design/icons';
import Nav from "@/pages/components/nav";
const Part1: FC = ()=>{
    return <div className="idea-screen-container">
        <div className="mask">
            <Nav></Nav>
            <section className="idea-screen-content">
                <h1 className="title">The Concept</h1>
                <h1 className="title">Thinking from the other Person`s perspective.</h1>
                <div className="sub-title">We are always thinking...</div>
            </section>
            
        </div>
    </div>
}
export default Part1;