import React, { Component } from "react";
import { Input, Button, Space } from "antd";
import { UserOutlined } from '@ant-design/icons';
import './index.less'

export default class Login extends Component {

  state = {userName: '', password: ''}

  handlerSubmit = () => {
    console.log(this.state)
  }

  render() {
    const {userName, password} = this.state
    return (
      <div className="login-wrapper">
        <Space direction="vertical" size="middle" style={{width: '100%'}}>
          <Input
            placeholder="Enter your username"
            prefix={<UserOutlined className="site-form-item-icon" />}
            value={userName}
            onChange={(e) => this.setState({userName: e.target.value})}
          />
          <Input.Password 
            placeholder="input password" 
            value={password} 
            onChange={(e) => this.setState({password: e.target.value})} 
          />
          <Button type="primary" className="submit-btn" onClick={this.handlerSubmit}>登录</Button>
        </Space>
      </div>
    );
  }
}
