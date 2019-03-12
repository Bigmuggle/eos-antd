import React from 'react'
import { Row ,Col} from 'antd';
import Axios from '../../axios'
import "./index.less"

export default class Header extends React.Component{
   constructor(){
       super()
       this.state={
           name:"大哥"
       }
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
    render(){
        return (
            <div>
                <Row>
                    <Col span={24} className='header'>
                    <div className='name'>
                           <span className='checout'>{this.state.name}</span>
                        {/* eslint-disable-next-line */}
                        <a href="#" >登出</a>
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