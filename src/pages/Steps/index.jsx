import React from "react"
import {
     Steps, 
     Button,
     message,
     Row,
     Card ,
     Form,
     Input,
     Icon,
     Tooltip,
     Col
     } from 'antd';

const Step = Steps.Step;

const steps = [{
  title: 'First',
  content: 'First-content',
}, {
  title: 'Second',
  content: 'Second-content',
}, {
  title: 'Last',
  content: 'Last-content',
}];
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      userName:'',
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault();

    
  }
  next() {
    console.log(this.formRef.getItemsValue());  
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <Row>
      <Card>
          <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
      </Card>
        <Card>
        {
            current === 0 ?
           (<div className="steps-content"><WestStepsOne  wrappedComponentRef={(form) => this.formRef = form} /></div>) :null
        }
        {/* <div className="steps-content">{steps[current].content}</div> */}
          <div className="steps-action">
          {
            current < steps.length - 1
            && <Button type="primary" onClick={() => this.next()}>下一步</Button>
          }
          {
            current === steps.length - 1
            && <Button type="primary" onClick={() => message.success('Processing complete!')}>提交</Button>
          }
          {
            current > 0
            && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              上一步
            </Button>
            )
          }
        </div>
        </Card>
       
      </Row>
    );
  }
}
class StepsOne extends React.Component{
    getItemsValue = ()=>{    //3、自定义方法，用来传递数据（需要在父组件中调用获取数据）
        const valus= this.props.form.getFieldsValue();       //4、getFieldsValue：获取一组输入控件的值，如不传入参数，则获取全部组件的值
        return valus;
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
        const { getFieldDecorator } = this.props.form;
        return(
            <Form {...formItemLayout}   layout="inline" >   
            <Row gutter={24}>
                <Col span={12} className="inputstyle">
                <Form.Item
                    label={
                        <span>邮件地址</span>
                    }
                >
                {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input  placeholder="email" />
                )}
                </Form.Item>
                </Col>
                <Col span ={12}>
                <Form.Item
                    label={
                            <span>密码</span>
                        }
                >
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input className="inputstyle"  placeholder="Password" />
                )}
                </Form.Item>
                </Col>
            </Row>     
            <Row gutter={24}>
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
                    >
                    {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    })(
                        <Input />
                    )}
        </Form.Item>
            </Col>
            </Row>    
   
         
              
                
        </Form>
        )
    }
}
const WestStepsOne = Form.create()(StepsOne)
