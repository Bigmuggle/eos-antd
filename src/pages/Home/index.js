import React from 'react'
import { Row,Col } from 'antd';
import './index.css'
export default class Home extends React.Component{
    render(){
        return (
            <div>
               <Row>
                   <Col  className='box'>
                       Home页面
                   </Col>
               </Row>     
            </div>
        )
    }
}