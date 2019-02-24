import React, { Component } from 'react';
import { Card, Form, Button, Input, Icon, Checkbox } from 'antd';
const FormItem = Form.Item;

class LoginForm extends Component{

  handleSubmit = () => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values);
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
        <Card title="行内表单" >
          <Form layout="inline">
            <FormItem>
              <Input prefix={<Icon type="user"></Icon>} placeholder="请输入账号"/>
            </FormItem>
            <FormItem>
              <Input prefix={<Icon type="lock"></Icon>} placeholder="请输入密码"/>
            </FormItem>
            <FormItem>
              <Button type="primary">确定</Button>
            </FormItem>
          </Form>
        </Card>
         <Card title="验证表单" style={{marginTop: 20}}>
          <Form style={{width: 300}}>
            <FormItem>
              {
                getFieldDecorator('username', {
                  initialValue: '',
                  rules: [
                    {
                      required: true, message: '请输入账号',
                    },
                    {
                      min: 3, message: '至少输入三位',
                    },
                    {
                       pattern: '^\w/g',
                       message:'用户名必须为字母或者数字'
                    }
                  ],
                })(
                  <Input prefix={<Icon type="user"></Icon>} placeholder="请输入账号"/>
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password', {
                  initialValue: '',
                  rules: [
                    {
                      required: true, message: '请输入密码',
                    }
                  ],
                })(
                  <Input prefix={<Icon type="lock"></Icon>} placeholder="请输入密码" type="password" />
                )
              }
            </FormItem>
            <FormItem>
               {
                getFieldDecorator('checked', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>记住密码</Checkbox>
                )
              }
              <span style={{float: "right"}}>忘记密码</span>
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(LoginForm);