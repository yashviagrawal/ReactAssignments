import React, { Component } from 'react';
import { Button, Input } from 'antd';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <Input placeholder="Username" />
        <Input.Password placeholder="Password" />
        <Button type="primary">Login</Button>
      </div>
    );
  }
}

export default LoginPage;
