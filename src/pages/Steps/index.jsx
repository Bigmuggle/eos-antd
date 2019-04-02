import React from "react"
import {
     Steps, 
     Button,
     message,
     Row,
     Card ,
     } from 'antd';
import "./index.less"
import WestStepsOne from './StepsOne.jsx'
import WestStepsTwo from './StepsTwo.jsx'
const Step = Steps.Step;

const steps = [{
  title: '个人信息页',
}, {
  title: '第二个',
}, {
  title: '提交页',
}];
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      userName:'',
      List:{}
    };

  }
  next() {
    // if( this.state.current === 0){//第一个页面
    //     const list = this.formRef.getItemsValue()
    //      for(let key in list.error){
    //          if(list.error[key] !== undefined){
    //              return false
    //          }
    //         // let arr = []
    //         // arr.push(list.error[key])
    //         // if(arr.indexOf(undefined) === -1){
    //         //     return false
    //         // }
    //      }
         const current = this.state.current + 1;
         this.setState({ 
             current:current,
          //   List:Object.assign(this.state.List,list.values)
             });
         console.log(this.state.List)
     //}

    


    
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
        {
            current === 1 ?
           (<div className="steps-content"><WestStepsTwo   wrappedComponentRef={(form) => this.formRef = form} /></div>) :null
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
