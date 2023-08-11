import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import LoginPage from './LoginPage';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import FormPage from './Form';
// import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

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
          <Route path="/" element={<LoginPage />} />
          <Route path="/logout" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </Router>
    );
  }
}


// const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

class Dashboard extends Component {

  render() {

    // const data = [
    //   { name: 'Category A', value: 350 },
    //   { name: 'Category B', value: 450 },
    //   { name: 'Category C', value: 300 },
    // ];

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
        <Sidebar />
        <Layout>
          <Layout style={{ padding: '24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 'calc(100vh - 112px)',
              }}
            >
              {
              //   <div className="chart-container">
              //   <h2>Pie Chart Widget</h2>
              //   <ResponsiveContainer width="80%" height={300}>
              //     <PieChart>
              //       <Pie
              //         data={data}
              //         dataKey="value"
              //         cx="50%"
              //         cy="50%"
              //         outerRadius={80}
              //         fill="#8884d8"
              //         label
              //       >
              //         {data.map((entry, index) => (
              //           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              //         ))}
              //       </Pie>
              //     </PieChart>
              //   </ResponsiveContainer>
              // </div>
              }
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
