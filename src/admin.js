import React from "react"
import {PropTypes} from 'prop-types'
// import {Redirect} from 'react-router-dom'
import { Row,Layout } from "antd";
import NavLeft from './components/NavLeft'
// import Header from './components/Header'

import './style/common.less'
const Content = Layout.Content
const Footer = Layout.Footer
export default class Admin extends React.Component{
    static contextTypes = {
        router: PropTypes.object.isRequired,
    }

    constructor(props){
        super(props)
        this.state ={
            isLogin : window.localStorage.getItem("userId")?true : false,
        }
    }
    componentWillMount(){
       
    }
    render(){
        if( !this.state.isLogin){
             console.log(this.context.router)
             this.context.router.history.push('/login')
            // return <Redirect replace to="/login" />;
        }
        return (
            <div>
                <Row className="container">                  
                        <NavLeft>
                            <Content style={{"padding":"20px"}}>
                                {this.props.children}
                                
                            </Content>
                            <Footer style={{"textAlign":"center"}}> 版权所有 Copyright © 2016 Phoenix New Media Limited All Rights Reserved.
                            </Footer>
                        </NavLeft>
                  
                    {/* <Col span={21} className="main">
                       <Row className='content'>
                    
                           {this.props.children}
                       </Row>
                       <Footer></Footer>   
                    </Col> */}
                </Row>
            </div>
        )
    }
}