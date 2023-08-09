import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Form, Input, Button, Card, message, Layout, Menu } from 'antd';
import axios from 'axios';
import { FormInstance } from 'antd/lib/form';
import LoginPage from './LoginPage';

const { Header, Content, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/logout" element={<LoginPage />} />
        </Routes>
      </Router>
    );
  }
}


class ContactMePage extends Component {
  formRef = React.createRef<FormInstance>(); // Ref to access form methods

  handleSubmit = async (values: any) => {
    try {
      const response = await axios.post('http://localhost:3001/submitContact', values);

      if (response.status === 200) {
        message.success('Contact data saved successfully');
        // Reset the form after successful submission
        this.formRef.current?.resetFields();
      } else {
        message.error('Failed to save contact data');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  render() {
    return (
      
    <Layout>

      <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" style={{ display: 'flex', justifyContent: 'flex-end' }} defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Username</Menu.Item>
            <Menu.Item key="/logout">
            <Link to="/logout">

            Logout
      
        </Link>
            </Menu.Item>
          </Menu>
        </Header>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 112px)' }}>
        <Card style={{ width: 500, padding: '18px' }}>
        <Form ref={this.formRef} onFinish={this.handleSubmit} style={{ width: 400 }}>
            <h2>Contact Me</h2>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Please enter your message' }]}>
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </Card>
      </div>
      </Layout>
    );
  }
}

export default ContactMePage;
