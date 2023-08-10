import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Card, Layout, Menu, Input } from 'antd';
import LoginPage from './LoginPage';
import ContactMe from './ContactMe';
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
          {/* <Route path="/about" element={<AboutMe />} /> */}
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </Router>
    );
  }
}



class AboutMe extends Component {

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
      </Layout>
    );
  }
}

export default AboutMe;
