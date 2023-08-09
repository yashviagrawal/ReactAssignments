import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Card, Layout, Menu } from 'antd';
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



class AboutMe extends Component {
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
        <Card style={{ width: 400 }}>
          <h2>About Me</h2>
          <p>
            Hello! I'm a passionate developer who loves to explore new technologies and create
            amazing applications. In my free time, I enjoy coding, reading, and spending time
            outdoors.
          </p>
          <p>
            If you want to learn more about my journey and interests, feel free to connect with me.
          </p>
        </Card>
      </div>
      </Layout>
    );
  }
}

export default AboutMe;
