import React from "react"
import {PropTypes} from 'prop-types'
// import {Redirect} from 'react-router-dom'
import { Row,Layout } from "antd";
import NavLeft from './components/NavLeft'
 import Footer from './components/Footer'

import './style/common.less'
const Content = Layout.Content
export default class Admin extends React.Component{
    static contextTypes = {
        router: PropTypes.object.isRequired,
    }

    constructor(props){
        super(props)
        this.state ={
            isLogin : window.sessionStorage.getItem("userId")?true : false,
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
                               <Footer/>
                   
                            </Content>
                            
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