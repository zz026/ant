import React from 'react';
import { Card, Tabs, message, Icon } from 'antd';
import '../../../style/ui.less';
const TabPane = Tabs.TabPane;

export default class myTabs extends React.Component{
  constructor() {
    super();
    this.newTabIndex = 0;
  }

  state = {
    activeKey: '1',
    panes: [
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
      { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false },
    ]
  }

  tabsCallback = (activeKey) => {
    this.setState({ activeKey });
    message.loading(`打开了第${activeKey}页签`)
  }

  onEdit = (targetKey, action) => {
    console.log('action', action);
    console.log('targetKey', targetKey);
    this[action](targetKey);
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }


  render() {
    return (
      <div>
        <Card title="Tab页签" className="card-style">
          <Tabs defaultActiveKey="1" onChange={this.tabsCallback}>
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图标页签" className="card-style">
          <Tabs defaultActiveKey="1" onChange={this.tabsCallback} tabPosition="left">
            <TabPane key="1" tab={<span><Icon type="plus" />新增</span>}>Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Card>
        <Card title="Tab可关闭卡片式页签" className="card-style">
          <Tabs  onChange={this.tabsCallback}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
          >
            {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
          </Tabs>
        </Card>
      </div>
    )
  }
}