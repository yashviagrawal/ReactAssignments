import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu, Card } from 'antd';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import LoginPage from './LoginPage';
import ContactMe from './ContactMe';
import Dashboard from './App';
import FormPage from './Form';


const { Header, Content } = Layout;

const Sidebar: React.FC = () => {

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const filteredItems = ["dashboard", "contact", "about"].filter(item =>
    item.includes(searchValue.toLowerCase())
  );

  return (
    <div className="sidebar">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearch}
        />
        <button>
          <SearchOutlined />
        </button>
      </div>
      {filteredItems.map(item => (
        <Link key={item} to={`/${item}`}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Link>
      ))}

      <div className="dropdown">
        <button className="dropbtn">
          Dropdown <DownOutlined />
        </button>
        <div className="dropdown-content">
          <div className="sub-dropdown">
            <button className="dropbtn">
              Module 1 <DownOutlined />
            </button>
            <div className="sub-dropdown-content">
            <div className="sub1-dropdown">
            <button className="dropbtn">
              Sub-Module 1 <DownOutlined />
            </button>
            <div className="sub2-dropdown-content">
            <div className="sub2-dropdown">
            <button className="dropbtn">
              Form-Group 1 <DownOutlined />
            </button>
            <div className="sub3-dropdown-content">
            <Link to="/form">Form 1</Link>
            <Link to="/form">Form 2</Link>
            <Link to="/form">Form 3</Link>
            <Link to="/form">Form 4</Link>
            <Link to="/form">Form 5</Link>
            </div>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};


class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/logout" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/about" element={<AboutMe />} /> */}
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/form" element={<FormPage />} />
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
        <Sidebar />
        <Layout>

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
