import React from "react"
import {Button} from "antd"
import './content.css'

export default class Life extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        this.handeAdd = this.handeAdd.bind(this)
    }
    handeAdd(){
        this.setState({
            count: this.state.count+1
        })
    }
    render(){
        return (
            <div className="content">
                    <p>React生命周期</p>
                    <Button type="primary">Primary</Button>
                    <button  onClick={this.handeAdd}>点击</button>
                    <p>{this.state.count}</p>
                </div>
        )             
    }
}