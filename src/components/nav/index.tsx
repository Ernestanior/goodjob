import { FC } from "react"
import './index.less'
import { Button, MenuProps ,Dropdown, Space} from "antd";
import Logo from "@/assets/logo.jpg";
import {DownOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
const Part1: FC = ()=>{
  const navigate = useNavigate();
  const toHome = ()=>{
    navigate('/')
  }
    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              IDEA
            </a>
          ),
        },
        {
            key: '2',
            label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                SERVICE
              </a>
            ),
          },
          {
            key: '3',
            label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                STRUCTURE
              </a>
            ),
          },
    ]
    return <div className="nav-container" >
                <div className="left" onClick={toHome}>
                    <img src={Logo} className="logo"></img>
                    <h2 className="logo-name">Good Job Education</h2>
                </div>
                <div className="right">
                    <Button type="text" className="btn">HOME</Button>
                    <Dropdown menu={{ items }} className="dropdown">
                        <div onClick={(e) => e.preventDefault()}>
                            <Space>
                                DIRECTORY
                                <DownOutlined />
                            </Space>
                        </div>
                    </Dropdown>
                </div>
            </div>

            
}
export default Part1;