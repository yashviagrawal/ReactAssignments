import React, { Component } from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios

class LoginPage extends Component {
  handleLogin = async (values: any) => {
    try {
      const response = await axios.post('http://localhost:3001/login', values);

      if (response.status === 200) {
        // Authentication successful
        message.success('Login successful');
        // Navigate to the dashboard page
        window.location.href = '/dashboard';

        // Perform further actions like redirecting to the dashboard
      } else {
        // Authentication failed
        message.error('Login failed');
      }
    } catch (error) {
      message.error('Login failed');
      console.error('An error occurred:', error);
    }
  };

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card style={{ width: 400, padding: '24px' }}>
          <h2>Login</h2>
          <Form onFinish={this.handleLogin}>
            <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please enter your username' }]}>
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default LoginPage;
