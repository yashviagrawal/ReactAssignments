import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import LoginPage from './LoginPage';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';

const { Header, Content, Sider } = Layout;

class App extends Component {

  // state = {
  //   isLoggedIn: false,
  // };

  // handleLogout = () => {
  //   this.setState({ isLoggedIn: false });
  // };

  // handleLogin = () => {
  //   this.setState({ isLoggedIn: true });
  // };

  render() {

    // const { isLoggedIn } = this.state;

    return (
      <Router>
        <Routes>
        {/* <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" />
              ) : (
                <LoginPage onLogin={this.handleLogin} />
              )
            }
          />
          {isLoggedIn ? (
            <>
              <Route
                path="/dashboard"
                element={<Dashboard isLoggedIn={isLoggedIn} onLogout={this.handleLogout} />}
              />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/contact" element={<ContactMe />} />
            </>
          ) : null} */}
          <Route path="/" element={<LoginPage />} />
              <Route path="/logout" element={<LoginPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </Router>
    );
  }
}

class Dashboard extends Component {
  render() {

    // const { onLogout } = this.props;

    return (
      <Layout>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" style={{ display: 'flex', justifyContent: 'flex-end' }} defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Username</Menu.Item>
            <Menu.Item key="/logout">
            <Link to="/logout">
            {/* <Link to="/logout" onClick={onLogout}> */}
              Logout
            </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu mode="vertical" defaultSelectedKeys={['1']} style={{ height: '100%' }}>
              <Menu.Item key="1">
                <Link to="/dashboard">Home</Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link to="/about">About Me</Link>
              </Menu.Item>
              <Menu.Item key="contact">
                <Link to="/contact">Contact Me</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 'calc(100vh - 112px)'
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