import React from 'react'
import {Row,Col,Form,Input,Tooltip,Icon,Cascader} from 'antd'
class StepsOne extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        
    }
    componentDidMount(){
        if(this.props.List){
            this.props.form.setFieldsValue({
            email:this.props.List.email || "",
            password:this.props.List.password || "",
            nickname: this.props.List.nickname || ""
        })
        }
        
    } 
    getItemsValue = ()=>{    //3、自定义方法，用来传递数据（需要在父组件中调用获取数据）
     this.props.form.validateFields((err,value)=>{

     });
         const starts = {
             error:this.props.form.getFieldsError(),
             values:this.props.form.getFieldsValue(),
         }
                //4、getFieldsValue：获取一组输入控件的值，如不传入参数，则获取全部组件的值
           return starts;
    }
    
    setItemsValue = () =>{
        alert(1)
        
    }
   
    
    render(){
        const cityoption = [{
            value: '浙江',
            label: '浙江',
            children: [{
              value: '杭州',
              label: '杭州',
              children: [{
                value: '西湖',
                label: '西湖',
              }],
            }],
          }, {
            value: '江苏',
            label: '江苏',
            children: [{
              value: '南京',
              label: '南京',
              children: [{
                value: '中华门',
                label: '中华门',
              }],
            }],
          }];
        const formItemLayout = {
            labelCol: {
              xs: { span: 8},
              sm: { span: 8},
            },
            wrapperCol: {
              xs: { span: 12 },
              sm: { span: 12 },
            },
          };
        const { getFieldDecorator } = this.props.form;
        return(
            <Form {...formItemLayout} onSubmit={this.getItemsValue}  layout="inline" >   
            <Row className="rowcontainer">
                <Col span={12} className="inputstyle">
                <Form.Item
                    label={
                        <span>邮件地址</span>
                    }
                    style={{"display":"block"}}
                >
                {getFieldDecorator('email', {           
                    rules: [{ required: true, message: '请输入邮箱地址!' }],
                })(
                    <Input  placeholder="email"  />
                )}
                </Form.Item>
                </Col>
                <Col span ={12}>
                <Form.Item
                    label={
                            <span>密码</span>
                        }
                        style={{"display":"block"}}
                >
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input className="inputstyle"  placeholder="Password" />
                )}
                </Form.Item>
                </Col>
            </Row>     
            <Row  className="rowcontainer">
            <Col span={12}>
            <Form.Item
                    label={(
                        <span>
                        输入地址&nbsp;
                        <Tooltip title="用于上传的地址">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                        </span>
                    )}
                    style={{"display":"block"}}
                    >
                    {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: 'Please input your nickname!'}],
                    })(
                        <Cascader options={cityoption}  placeholder="Please select" />
                    )}
        </Form.Item>
            </Col>
            </Row>    
   
         
              
                
        </Form>
        )
    }
}
const WestStepsOne = Form.create()(StepsOne)
export default WestStepsOne