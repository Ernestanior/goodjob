import { FC } from "react"
import './index.less'
import { Button, MenuProps ,Dropdown, Space} from "antd";
import Logo from "@/assets/logo.png";
import {DownOutlined} from '@ant-design/icons';
const Part1: FC = ()=>{
    return <div className="home-screen-container">
        <div className="mask"/>
        <img src={Logo} className="logo"></img>
        <section className="home-screen-content">
            <h1 className="title">More than a facilitator,</h1>
            <h1 className="title"> we’re your dedicated service partner—</h1>
            <h1 className="title">bringing tailored solutions and seamless support every step of the way</h1>
        </section>   
    </div>
}
export default Part1;