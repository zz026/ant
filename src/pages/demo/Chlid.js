import React from 'react';
import './Child.less';

export default class Child extends React.Component{
  // constructor(props) {
  //   super(props);
  // }


  render() {
    return <div>
      <p className="title">子组件</p>
      <p>{this.props.name}</p>
      <p>{this.props.count}</p>
    </div>
  }
}