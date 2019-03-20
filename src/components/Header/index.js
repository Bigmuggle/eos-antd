import React from 'react'
import { PropTypes} from 'prop-types'
import { Row ,Col,Modal} from 'antd';
import Axios from '../../axios'
import "./index.less"

export default class Header extends React.Component{
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
   constructor(){
       super()
       this.state={
           name:"大哥"
       }
       this.cancelLogin = this.cancelLogin.bind(this)
   }
   componentWillMount(){
      this.getTel()
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
                window.localStorage.setItem('userId',"");
                routers.replace('/login')
            }
        });
    
   }
    render(){
        return (
            <div className='color'>
                <Row>
                    <Col span={24} className='header'>
                    <div className='name'>
                           <span className='checout'>{this.state.name}</span>
                        {/* eslint-disable-next-line */}
                        <a href="#" onClick = {this.cancelLogin}>登出</a>
                    </div>
                     
                    </Col>
                </Row>
                <Row className='headertext'>
                    <Col span={4} className='text'>
                     首页
                    </Col>
                    <Col span={20} style={{textAlign: "right",paddingRight:'20px'}}>
                        <span>{this.state.tel}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}