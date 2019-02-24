import React from 'react';
import { Card, Spin, Icon, Alert } from 'antd';
import '../../../style/ui.less';

export default class Loadings extends React.Component{


  render() {
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
    return (
      <div>
        <Card title="Spin用法" className="card-style">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
          <Spin indicator={antIcon} />      
        </Card>

        <Card title="Spin用法" className="card-style">
           <Alert 
           description="我是描述"
           message="Success Tips" type="success" showIcon />
           <Spin>
              <Alert 
                description="我是描述"
                message="Success Tips" type="success" showIcon />
           </Spin>
            <Spin tip="加载中....">
              <Alert 
                description="我是描述"
                message="Success Tips" type="success" showIcon />
           </Spin>
            <Spin indicator={antIcon}>
              <Alert 
                description="我是描述"
                message="Success Tips" type="success" showIcon />
           </Spin>
        </Card>
      </div>
    )
  }
}