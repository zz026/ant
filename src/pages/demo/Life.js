import React from 'react';
import Child from './Chlid';
import { Button } from 'antd';
// import 'antd/dist/antd.css';

export default class Life extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    }
  }

  handleAdd() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return <div>
      <p>react生命周期介绍</p>
      <Button  onClick={this.handleAdd.bind(this)}>antd点击一下</Button>
      <button onClick={this.handleAdd.bind(this)}>点击一下</button>
      <p>{this.state.count}</p>

      <Child count={this.state.count} name={'父组件传值啦啦啦'}></Child>
    </div>
  }
}