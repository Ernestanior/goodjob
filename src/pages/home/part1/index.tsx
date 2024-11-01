import { FC } from "react"
import './index.less'
import { Button, MenuProps ,Dropdown, Space} from "antd";
import Logo from "@/assets/logo.jpg";
import {DownOutlined} from '@ant-design/icons';
import Nav from "@/pages/components/nav";
const Part1: FC = ()=>{
    return <div className="home-screen-container">
        <div className="mask">
            <Nav></Nav>
            <section className="home-screen-content">
                <h1 className="title">Thinking from the other</h1>
                <h1 className="title">Person`s perspective.</h1>
                <div className="sub-title">We are not a traditional intermediary, but more like a service provider.</div>
            </section>
            
        </div>
    </div>
}
export default Part1;