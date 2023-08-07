import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import LoginPage from './LoginPage';

const { Header, Content, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    );
  }
}

class Dashboard extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" style={{ display: 'flex', justifyContent: 'flex-end' }} defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Username</Menu.Item>
            <Menu.Item key="2">Logout</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu mode="vertical" defaultSelectedKeys={['1']} style={{ height: '100%' }}>
              <Menu.Item key="1">
                <Link to="/dashboard">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/dashboard/about">About Me</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/dashboard/contact">Contact Me</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {/* Content based on the selected menu */}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;