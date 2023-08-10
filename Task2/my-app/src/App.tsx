import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu, Input } from 'antd';
import LoginPage from './LoginPage';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

// Sample menu data structure
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
                  // ... more forms
                ],
              },
              // ... more form groups
            ],
          },
          // ... more sub-modules
        ],
      },
      // ... more modules
    ],
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
  // Filter logic
  handleSearch = (value: string) => {
    // Implement your search logic here
  };

  renderMenuItems = (menuItems: any[]) => { // Specify the type as 'any[]'
    return menuItems.map((menuItem) => {
      if (menuItem.children) {
        return (
          <SubMenu key={menuItem.key} title={menuItem.title}>
            {this.renderMenuItems(menuItem.children)}
          </SubMenu>
        );
      } else {
        return <Menu.Item key={menuItem.key}>{menuItem.title}</Menu.Item>;
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
              <Link to="/logout">Logout</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            {/* Use Input.Search with the updated handleSearch */}
            <Input.Search placeholder="Search Menu" onSearch={this.handleSearch} />
            <Menu mode="vertical" defaultSelectedKeys={['1']} style={{ height: '100%' }}>
              {this.renderMenuItems(menuData)}
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
