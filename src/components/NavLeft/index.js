import React from 'react'
import { Menu, Switch  } from 'antd';
import './index.css'
import MenuList from '../../config/menuConfig'
const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component{
   componentWillMount(){
       const menuList = this.renderList(MenuList)
       this.setState({
          menuList
       })
   }
    state = {
        theme: 'dark',
        current: '1',      
    }
    renderList(data){
        return data.map((item)=>{
               if(item.Children){
                   return <SubMenu title={item.title} key={item.key}>
                       {this.renderList(item.Children)}
                   </SubMenu>   
               }
               return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
        })
    }
    changeTheme = (value) => {
        this.setState({
        theme: value ? 'dark' : 'light',
        });
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
        current: e.key,
        });
    }

    render(){
        return (
            <div>
                <div className='logo'>
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" className='img' alt=""/>
                    <span>你好啊</span>
                </div>
                <div>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
            {this.state.menuList}
        </Menu>
        <br />
        <br />
        <Switch
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </div>
            </div>
        )
    }
}