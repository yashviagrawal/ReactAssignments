import React, { Component } from 'react';
import { Form, Input, Button, Card } from 'antd';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card style={{ width: 400, padding: '24px' }}>
          <h2>Login</h2>
          <Form>
            <Form.Item label="Username">
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item label="Password">
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Link to="/dashboard">
                <Button type="primary" style={{ width: '100%' }}>
                  Login
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default LoginPage;
