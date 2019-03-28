import React from 'react'
import  {PropTypes} from "prop-types"
import { Row,Col,Form,Icon,Input,Button,Checkbox,message } from 'antd';
import "./index.less"
class Login extends React.Component{
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    constructor(){
        super()
        this.hindleSubmit = this.hindleSubmit.bind(this)
    }
    hindleSubmit(e){
        e.preventDefault();
        console.log(this.props.form)
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if(values.userName === "admin" && values.password ==="1" ){
                  
                      window.sessionStorage.setItem(
                            'userId',values.userName
                        )
                        this.context.router.history.push('/home')
                      
                       }else{
                        message.error('密码错误，请重新输入');  
                       }
            
            }
          });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return  (  
             <div >
                <Row className='containers'>
                    <Col span={24} className="loginbg">
                    <div className = "content">                       
                        <Form onSubmit = {this.hindleSubmit} className="login-form" style={{"padding":"30px 0px"}}>
                        <h2 style={{"textAlign":"center"}}>欢迎登陆</h2>
                                <Form.Item>
                                {getFieldDecorator('userName', {
                                    rules: [{
                                         required: true,
                                         message: '请输入用户名!' },
                                         {
                                         min:1,
                                         message:'用户名最小五位数'    
                                         }
                                         ],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )}
                                </Form.Item>
                                <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                                </Form.Item>
                                <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: false,
                                })(
                                    <Checkbox onChange = {this.handleChange}>记住密码</Checkbox>
                                )}
                               
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登陆
                                </Button>
                              
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
            )  
    }
}
const thisLogin = Form.create({name:'login'})(Login)
export default thisLogin