import React, { Component } from 'react';
import { Card, Form, Input, Radio, Button, InputNumber, Select, Switch, DatePicker, TimePicker, Upload, Icon, message, Checkbox } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const { TextArea } = Input;

class RegistForm extends Component {

  state = {
    imageUrl: '',
    loading: false
  }
  beforeUpload = (file) => {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  };
  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    const offsetLayout = {
      wrapperCol: {
        xs: { span: 24 },
        sm: {
          span: 12,
          offset:4
        },
      },
    };

    return (
      <div>
        <Card title="注册表单">
          <Form onSubmit={this.handleSubmit}>
            <FormItem label="用户名" {...formItemLayout}>
              {getFieldDecorator('username', {
                rules: [
                  { required: true, message: '请输入用户名' }],
              })(
                <Input placeholder="请输入用户名" />
                )}
            </FormItem>
            <FormItem label="密码" {...formItemLayout}>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: '请输入密码' }],
              })(
                <Input placeholder="请输入密码" type="password" />
                )}
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
              {getFieldDecorator('sex', {
                rules: [
                  { required: true, message: '请选择性别' }],
              })(
                <RadioGroup>
                  <Radio value="0">男</Radio>
                  <Radio value="1">女</Radio>
                </RadioGroup>
                )}
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {getFieldDecorator('age', {
                initialValue: 18,
                rules: [
                  { required: true, message: '请输入年龄' }],
              })(
                <InputNumber />
                )}
            </FormItem>
            <FormItem label="当前状态" {...formItemLayout}>
              {getFieldDecorator('status', {
                initialValue: '2',
                rules: [
                  { required: true, message: '请选择当前状态' }],
              })(
                <Select
                  showSearch
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  <Option value="1">咸鱼一条</Option>
                  <Option value="2">咸鱼两条</Option>
                  <Option value="3">咸鱼三条</Option>
                </Select>
                )}
            </FormItem>
            <FormItem label="爱好" {...formItemLayout}>
              {getFieldDecorator('hobby', {
                initialValue: ['1', '3'],
                rules: [
                  { required: true, message: '请选择爱好' }],
              })(
                <Select
                  showSearch mode="multiple"
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  <Option value="1">足球</Option>
                  <Option value="2">游泳</Option>
                  <Option value="3">健身</Option>
                  <Option value="4">散步</Option>
                  <Option value="5">篮球</Option>
                </Select>
                )}
            </FormItem>
            <FormItem label="是否已婚" {...formItemLayout}>
              {getFieldDecorator('marry', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Switch />
                )}
            </FormItem>
            <FormItem label="生日" {...formItemLayout}>
              {getFieldDecorator('birthday', {
              })(
                <DatePicker placeholder="生日" />
                )}
            </FormItem>
            <FormItem label="联系地址" {...formItemLayout}>
              {getFieldDecorator('address', {
              })(
                <TextArea />
                )}
            </FormItem>
            <FormItem label="早起时间" {...formItemLayout}>
              {getFieldDecorator('getUptime', {
              })(
                <TimePicker placeholder="早起时间" />
                )}
            </FormItem>
            <FormItem label="头像" {...formItemLayout}>
              {
                getFieldDecorator('imageUrl', {
                 rules: [
                  { required: true, message: '请上传头像' }],
              })
                (
                  <Upload
                    listType="picture-card"
                    showUploadList={false}
                    beforeUpload={this.beforeUpload}
                    action="//jsonplaceholder.typicode.com/posts/"
                    onChange={this.handleChange}
                  >
                    {this.state.imageUrl ? <img src={this.state.imageUrl} /> : <Icon type="plus" />}
                  </Upload>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              {getFieldDecorator('isRead', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                  <Checkbox>我已阅读过<a href="#">协议</a></Checkbox>
                )}
            </FormItem>
            <FormItem {...offsetLayout}>
              <Button type="primary" htmlType="submit">提交</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(RegistForm);