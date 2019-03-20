import React from "react"
import {PropTypes} from 'prop-types'
// import {Redirect} from 'react-router-dom'
import { Row,Col } from "antd";
import NavLeft from './components/NavLeft'
import Header from './components/Header'
import Footer from './components/Footer'
import './style/common.less'

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