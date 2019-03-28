import React from 'react'
import PropTypes from "prop-types"
import {NavLink} from 'react-router-dom'
import { Menu,  Icon,Layout ,Modal ,Row,Col} from 'antd';
import './index.css'
import MenuList from '../../config/menuConfig'
import Axios from '../../axios'
const SubMenu = Menu.SubMenu;
const Headers = Layout.Header
const Sider = Layout.Sider

export default class NavLeft extends React.Component{
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    state = {
        collapsed: false,
      };
   componentWillMount(){
       const menuList = this.renderList(MenuList)
       this.setState({
          menuList
       })
       this.getTel()
   }

   toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
    renderList(data){
        return data.map((item)=>{
               if(item.Children){            
                   return <SubMenu title={<div><Icon type={item.Icon}/><span>{item.title}</span></div>} key={item.key}>                
                     {this.renderList(item.Children)}
                   </SubMenu>   
               }
               return   <Menu.Item title={item.title} key={item.key}> <NavLink to={item.key}> <Icon type={item.Icon}/><span>{item.title}</span></NavLink></Menu.Item>
                  
               
        })
    }
   constructor(){
       super()
       this.state={
           name:"大哥"
       }
       this.cancelLogin = this.cancelLogin.bind(this)
   }
   getTel(){
    Axios.jsonp({
        url:'https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=18621073958'
    }).then((res)=>{
        this.setState({
            tel:res.mts
        })
    })
   }
   cancelLogin(){
       const routers = this.context.router.history
        Modal.confirm({
            title: '登出',
            content: '确认登出吗',
            okText: '确认',
            cancelText: '取消',
            onOk(){
                window.sessionStorage.setItem('userId',"");
                routers.replace('/login')
            }
        });
    
   }
    render(){
        return (
            <Layout>
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
                    <div className='logo'>
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" className='img' alt=""/>
                       
                    </div>
                    <div>
                        <Menu
                        theme="dark" 
                        mode="inline" 
                        defaultSelectedKeys={['1']}
                        >
                            {this.state.menuList}
                        </Menu>
                        <br />
                        <br />
                        </div>
                    </Sider>
                    <Layout>
                    <Headers style={{background: '#fff',height:"120px"}}>
                    <Row className="crumbs">
                            <Col span={12}>
                                <Icon 
                                            className="trigger"
                                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                            onClick={this.toggle}
                                        /> 
                            </Col>
                            <Col span={12} style={{textAlign: "right",paddingRight:'20px'}}>
                            <span>欢迎，</span>
                            <span  >{this.state.name}</span>
                                                {/* eslint-disable-next-line */}
                                    <a href="#" onClick = {this.cancelLogin}>登出</a>
                             </Col>
                    </Row>         
                     <Row  >
                            <Col span={24}>
                                 <div className="textcontent">首页</div> 
                              
                                 <div className="weather">{this.state.tel}</div>
                              
                            </Col>
                                  
                    </Row>           
                    </Headers>

                     {this.props.children}
                     
             
                    </Layout>
             </Layout>
        )
    }
}