import React from 'react';
import { Card, Carousel } from 'antd';
import '../../../style/ui.less';

export default class Carousels extends React.Component{


  swiperOnChange = (a, b, c) => {
    console.log(a, b, c);
  }

  render() {
    return (
      <div>
        <Card title="文字背景轮播" className="card-style">
          <Carousel afterChange={this.swiperOnChange}>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
        </Card>
      </div>
    )
  }
}