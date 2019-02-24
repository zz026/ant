import React from 'react';
import { Card, Button, Radio } from 'antd';
import '../../../style/ui.less';

export default class Buttons extends React.Component{

  state = {
    buttonLoading: true,
    radioValue: 'large'
  }

  handleButtonLoadingClose = () => {
    this.setState({
      buttonLoading: false
    })
  }
  handleButtonLoadingOpen = () => {
    this.setState({
      buttonLoading: true
    })
  }
  handleRadioOnChange = (e) => {
    console.log(e.target.value);
    this.setState({
      radioValue: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Card title="基础按钮" className="card-style">
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="primary" disabled>Primary</Button>
        </Card>
        <Card title="图形按钮" className="card-style">
          <Button icon="plus">新增</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button type="primary" shape="circle" icon="search" />
          <Button icon="search" type="primary">搜索</Button>
          <Button icon="download" type="primary">下载</Button>
        </Card>
        <Card title="loading按钮" className="card-style">
          <Button type="primary" loading={this.state.buttonLoading}>确定</Button>
          <Button type="primary" shape="circle" loading={this.state.buttonLoading} icon="search" />
          <Button loading={this.state.buttonLoading} onClick={this.handleButtonLoadingOpen}>点击加载</Button>
          <Button shape="circle" loading={this.state.buttonLoading} icon="search" />
          <Button icon="close" onClick={this.handleButtonLoadingClose}>关闭</Button> 
        </Card>
        <Card title="基础按钮" className="card-style">
          <Button.Group>
            <Button style={{marginRight: 0}} icon="left" type="primary" >前进</Button>
            <Button icon="right" type="primary" >后退</Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸" className="card-style">
          <Radio.Group onChange={this.handleRadioOnChange} value={this.state.radioValue}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.radioValue}>Primary</Button>
          <Button size={this.state.radioValue}>Default</Button>
          <Button type="dashed" size={this.state.radioValue}>Dashed</Button>
          <Button type="danger" size={this.state.radioValue}>Danger</Button>
          <Button type="primary" disabled size={this.state.radioValue}>Primary</Button>
        </Card>
      </div>
    )
  }
}