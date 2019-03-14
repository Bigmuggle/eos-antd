import React from "react"
import { Row,Col } from "antd";
import NavLeft from './components/NavLeft'
import Header from './components/Header'
import Footer from './components/Footer'
import './style/common.less'

export default class Admin extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super()
    }
    render(){
        return (
            <div>
                <Row className="container">
                    <Col span={3}  className='left'>
                        <NavLeft/>
                    </Col>
                    <Col span={21} className="main">
                       <Header></Header>
                       <Row className='content'>
                    
                           {this.props.children}
                       </Row>
                       <Footer></Footer>   
                    </Col>
                </Row>
            </div>
        )
    }
}