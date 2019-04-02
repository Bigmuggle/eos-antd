import React from 'react'
import {Row,Col,Form,Input,Select} from 'antd'
const { Option } = Select;
class StepsTwo extends React.Component{
    handeleChange(value){
        console.log(value)
    }
  
    render(){
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };
        const {getFieldDecorator} = this.props.form
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
          })(
            <Select style={{ width: 70 }} onChange={this.handeleChange.bind(this)}>
              <Option value="86">+86</Option>
              <Option value="87">+87</Option>
            </Select>
          );
        return(
       
                    <Form {...formItemLayout}>    
                     <Row>
                            <Col span={12} offset={4}>
                                <Form.Item
                                    label="电话号码"
                                    >
                                    {getFieldDecorator('phone', {
                                        rules: [{ required: true, message: '请输入电话号码' }],
                                    })(
                                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                                    )} 
                                </Form.Item>
                            </Col>
                   </Row>      
                    </Form>
             
        )
    }
}

const WestStepsTwo = Form.create()(StepsTwo)
export default WestStepsTwo