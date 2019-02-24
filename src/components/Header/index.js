import React from 'react';
import { Row, Col } from 'antd';
import moment from 'moment';
import './index.less';
import request from '../../request';

export default class Header extends React.Component{
  state = {
    date: '2017',
    weather: '',
    weatherDetail: '晴天',
  }
  async componentWillMount() {
    this.setState({
      userName: '郑威威',
    });
    setInterval(() => {
      let sysDate = moment().format("YYYY-MM-DD HH:mm:ss");
      this.setState({
        sysDate,
      });
    }, 1000);
    const res = await request.jsonpRequest();
    if (res && res.length) {
      this.setState({
        weatherDetail: res[0].weather
      });
    }
  }
  render() {
    return <div style={{ background: '#fff'}}>
      <Row>
        <Col span={24} className="title">
          <span>您好！{this.state.userName}</span>
          <a herf="#">退出</a>
        </Col>
      </Row>
      <Row>
        <Col span={4} className="bread">
          <h3>首页</h3>
        </Col>
        <Col span={20} className="weather">
          <span className="sysDate">{this.state.sysDate}</span>
          <span className="detail">{this.state.weatherDetail}</span>(高德API提供)
        </Col>
      </Row>
    </div>
  }
}