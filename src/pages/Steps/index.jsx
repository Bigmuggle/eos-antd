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
     Col,
     Cascader
     } from 'antd';
import "./index.less"
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
      List:{}
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault();

    
  }
  next() {
    if( this.state.current === 0){//第一个页面
        const list = this.formRef.getItemsValue()
         for(let key in list.error){
             if(list.error[key] !== undefined){
                 return false
             }
            // let arr = []
            // arr.push(list.error[key])
            // if(arr.indexOf(undefined) === -1){
            //     return false
            // }
         }
         const current = this.state.current + 1;
         this.setState({ 
             current:current,
             List:Object.assign(this.state.List,list.values)
             });
         console.log(this.state.List)
     }
    


    
  }

  prev() {
      console.log(this.formRef)
    //this.formRef.setItemsValue()
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
        <Card className="stepscontext">
        {
            current === 0 ?
           (<div className="steps-content"><WestStepsOne List={this.state.List}  wrappedComponentRef={(form) => this.formRef = form} /></div>) :null
        }
        {/* <div className="steps-content">{steps[current].content}</div> */}
          <div className="nextButton">
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
     this.props.form.validateFields((err,value)=>{

     });
         const starts = {
             error:this.props.form.getFieldsError(),
             values:this.props.form.getFieldsValue()
         }
                //4、getFieldsValue：获取一组输入控件的值，如不传入参数，则获取全部组件的值
           return starts;
    }
    
    setItemsValue = () =>{
        alert(1)
        this.props.form.setItemsValue({
            email:this.props.List.email || ""
        })
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
