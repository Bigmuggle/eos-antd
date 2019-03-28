import React from 'react'
import { Row,Card ,Button,Radio,Icon} from 'antd';
import "./index.less"

export default class Login extends React.Component{
    constructor(){
        super()
        this.state={
            loading:false
        }
    }
    handleClick(){
        this.setState({
            loading:true
        })
    }
    render(){
        return  (  
             <div>
                <Row>
                    <Card title="基础按钮" className="button">
                        <Button type="primary">Primary</Button>
                        <Button>Default</Button>
                        <Button type="dashed">点击一下</Button>
                        <Button type="danger">点击一下</Button>
                    </Card>  
                    <Card title="图标按钮" className="button">
                        <Button icon="search" type="primary">Search</Button>
                        <Button shape="circle" icon="search"></Button>
                        <Button type="primary" shape="circle" icon="search"></Button>
                    </Card>   
                    <Card title="連著按钮" >
                        <Radio.Group className="mlGroup" size="large">
                            <Radio.Button value="large">large</Radio.Button>
                            <Radio.Button value="default">default</Radio.Button>
                            <Radio.Button value="small">small</Radio.Button>
                        </Radio.Group>
                        <Radio.Group size="large" className="mlGroup">
                        <Button type="primary">
                            <Icon type="left" />Backward
                        </Button>
                        <Button type="primary">
                            Forward<Icon type="right" />
                        </Button>
                        </Radio.Group>
                    </Card> 
                    <Card title="loading按钮" className="button">
                        <Button loading>确认</Button>
                        <Button loading type="primary">确认</Button>
                        <Button loading={this.state.loading} type="primary" onClick = {this.handleClick.bind(this)}>确认</Button>
                    </Card>                     
                </Row>
            </div>
            )  
    }
}