import React from 'react';
import { Card, Button, message } from 'antd';
import '../../../style/ui.less';

export default class Messages extends React.Component{

  handleOpenMessage = (type) => {
    message[type]('This is a normal message');
  }
  
  render() {
    return (
      <div>
        <Card title="全局提示框" className="card-style">
          <Button type="primary" onClick={() => this.handleOpenMessage('success')}>success</Button>
          <Button type="primary" onClick={() => this.handleOpenMessage('error')}>error</Button>
          <Button type="primary" onClick={() => this.handleOpenMessage('info')}>info</Button>
          <Button type="primary" onClick={() => this.handleOpenMessage('warning')}>warning</Button>
        </Card>
      </div>
    )
  }
}