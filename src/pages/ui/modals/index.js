import React from 'react';
import { Card, Button, Modal } from 'antd';
import '../../../style/ui.less';

export default class Modals extends React.Component{
  state = { 
    modalVisible1: false,
    modalVisible2: false,
    modalVisible3: false,
    modalVisible4: false,
  }
  showModal = (type) => {
    this.setState({
      [type]: true,
    });
  }

  handleOk = (type) => {
    this.setState({
      [type]: false,
    });
  }

  handleCancel = (type) => {
    this.setState({
      [type]: false,
    });
  }

  render() {
    return (
      <div>
        <Card title="基础模态框" className="card-style">
          <Button type="primary" onClick={() => this.showModal('modalVisible1')}>open</Button>
          <Button type="primary" onClick={() => this.showModal('modalVisible2')}>自定义页脚</Button>
          <Button type="primary" onClick={() => this.showModal('modalVisible3')}>顶部20px弹框</Button>
          <Button type="primary" onClick={() => this.showModal('modalVisible4')}>水平垂直居中</Button>
        </Card>

        <Modal
          title="React"
          visible={this.state.modalVisible1}
          onOk={() =>this.handleOk('modalVisible1')}
          onCancel={() => this.handleCancel('modalVisible1')}
        >
          <p>已打开弹框</p>
        </Modal>

        <Modal
          title="React"
          visible={this.state.modalVisible2}
          okText="好的"
          cancelText="算了"
          onOk={() =>this.handleOk('modalVisible2')}
          onCancel={() => this.handleCancel('modalVisible2')}
        >
          <p>已打开弹框2</p>
        </Modal>

        <Modal
          title="React"
          style={{top:20}}
          visible={this.state.modalVisible3}
          okText="好的"
          cancelText="算了"
          onOk={() =>this.handleOk('modalVisible3')}
          onCancel={() => this.handleCancel('modalVisible3')}
        >
          <p>已打开弹框3</p>
        </Modal>

        <Modal
          title="React"
          wrapClassName="vertical-center-modal"
          visible={this.state.modalVisible4}
          okText="好的"
          cancelText="算了"
          onOk={() =>this.handleOk('modalVisible4')}
          onCancel={() => this.handleCancel('modalVisible4')}
        >
          <p>已打开弹框4</p>
        </Modal>
      </div>
    )
  }
}