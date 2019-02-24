import React, { Component } from 'react';
import { Card, Table, Button, Modal, message } from 'antd';
import Axios from '../../request'
import '../../style/ui.less';

export default class BasicTable extends Component {
  state = {
    tableList: [],
    radioRows: [],
    checkBoxRows: []
  }

  async componentWillMount() {
    const res = await Axios.axiosRequset('/tablelist');
    res.list.forEach((val, index) => {
      val.key = index
    });
    this.setState({
      tableList: res.list
    })
  }
  remove = () => {
    if (!this.state.checkBoxRows.length) return
    const arr = this.state.checkBoxRows.map((val) => {
      return val.name;
    })
    Modal.confirm({
      title: '提示',
      content: `确定删除 ${arr.toString()} 吗？`,
      onOk() {
          message.success('删除成功！');
      }
    })
  }
  handleDelete = (item) => {
    console.log(item)
  }

  onRowClick = (record, index) => {
    console.log('record', record);
    console.log('index', index);
  }
  onSelectChange = (selectedRowKeys, selectedRows) => {
    console.log('change', selectedRowKeys, selectedRows)
    this.setState({
      selectedRows
    })
  }
  render() {
    const columns = [
      {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        align: 'center',
        width: 100
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        align: 'center'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        align: 'center',
        render(val) {
          return val === 1 ? '男' : '女'
        }
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        align: 'center'
      },
      {
        title: '兴趣',
        dataIndex: 'hobby',
        key: 'hobby',
        align: 'center',
        render(val) {
          return val === 1 ? '游泳' : val === 2 ? '足球' : '篮球'
        }
      },
    ];
    
    const rowSelection = {
      type: 'radio',
      // selectedRowKeys
      onChange: (selectedRowKeys, radioRows) => {
        this.setState({
          radioRows
        })
      }
    };
    const rowCheckSelection = {
      type: 'checkbox',
      onChange: (selectedRowKeys, checkBoxRows) => {
        this.setState({
          checkBoxRows
        })
      }
    }
    return (
      <div>
        <Card title="基础表格" className="card-style">
          <Table dataSource={this.state.tableList} columns={columns} bordered pagination={false} />
        </Card>
        <Card title="单选表格" className="card-style">
          <Table dataSource={this.state.tableList} columns={columns} bordered pagination={false}
            rowSelection={rowSelection}
          />
        </Card>
        <Card title="多选表格" className="card-style">
          <Button onClick={this.remove} style={{marginBottom: 10}} type="primary">删除</Button>
          <Table dataSource={this.state.tableList} columns={columns} bordered pagination={false}
            rowSelection={rowCheckSelection}
          />
        </Card>
      </div>
    )
  }
}