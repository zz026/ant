import React from 'react';
import { Card, Button, notification, Icon } from 'antd';
import '../../../style/ui.less';

export default class Notifications extends React.Component{

  openNotification = (type="success") => {
    notification[type]({
      message: '标题',
      description: '啦啦啦',
    })
  }
  openNotificationPlacement = (postion) => {
    notification.open({
      placement: postion,
      message: '标题',
      description: '啦啦啦',
      icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
    })
  }
  render() {
    return (
      <div>
         <Card title="基础按钮" className="card-style">
          <Button type="primary" onClick={() => this.openNotification('success')}>success</Button>
          <Button type="primary" onClick={() => this.openNotification('error')}>error</Button>
          <Button type="primary" onClick={() => this.openNotification('info')}>info</Button>
          <Button type="primary" onClick={() => this.openNotification('warning')}>warning</Button>
        </Card>
          <Card title="通知提醒框-方向控制" className="card-style">
          <Button type="primary" onClick={() => this.openNotificationPlacement('topLeft')}>左上</Button>
          <Button type="primary" onClick={() => this.openNotificationPlacement('topRight')}>右上</Button>
          <Button type="primary" onClick={() => this.openNotificationPlacement('bottomLeft')}>左下</Button>
          <Button type="primary" onClick={() => this.openNotificationPlacement('bottomRight')}>右下</Button>
        </Card> 
      </div>
    )
  }
}