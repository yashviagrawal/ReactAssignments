import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Form, Input, Button, Card, message, Layout, Menu } from 'antd';
import axios from 'axios';
import { FormInstance } from 'antd/lib/form';
import LoginPage from './LoginPage';
import AboutMe from './AboutMe';
import Dashboard from './App';


const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;


const menuData = [
  {
    key: '1',
    title: 'Home',
    children: [
      {
        key: '1-1',
        title: 'Module 1',
        children: [
          {
            key: '1-1-1',
            title: 'Sub-Module 1',
            children: [
              {
                key: '1-1-1-1',
                title: 'Form Group 1',
                children: [
                  { key: '1-1-1-1-1', title: 'Form 1' },
                  { key: '1-1-1-1-2', title: 'Form 2' },
                  
                ],
              },
              
            ],
          },
          
        ],
      },
      
    ],
  },
  {
    key: 'dashboard',
    title: 'Dashboard',
  },
  {
    key: 'about',
    title: 'About Me',
  },
  {
    key: 'contact',
    title: 'Contact Me',
  },
];


class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/logout" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<AboutMe />} />
          {/* <Route path="/contact" element={<ContactMe />} /> */}
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

  handleSearch = (value: string) => {

  };

  renderMenuItems = (menuItems: any[]) => { 
    return menuItems.map((menuItem) => {
      if (menuItem.children) {
        return (
          <SubMenu key={menuItem.key} title={menuItem.title}>
            {this.renderMenuItems(menuItem.children)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={menuItem.key}>
            <Link to={`/${menuItem.key}`}>{menuItem.title}</Link>
          </Menu.Item>
        );
      }
    });
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

        <Layout>
          <Sider style={{ width: 200}} className="site-layout-background">
            {/* Use Input.Search with the updated handleSearch */}
            <Input.Search placeholder="Search Menu" onSearch={this.handleSearch} />
            <Menu mode="vertical" defaultSelectedKeys={['1']} style={{ height: '100%' }}>
              {this.renderMenuItems(menuData)}
            </Menu>
          </Sider>

      <div style={{ display: 'flex', paddingLeft: 300, justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 112px)' }}>
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
      </Layout>
    );
  }
}

export default ContactMePage;
