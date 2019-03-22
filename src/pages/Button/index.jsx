import React from 'react'
import { Row,Card ,Button} from 'antd';
import "./index.less"

export default class Login extends React.Component{
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
                </Row>
            </div>
            )  
    }
}