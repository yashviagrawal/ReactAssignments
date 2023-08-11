import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Form, Input, Button, Card, message, Layout, Menu } from 'antd';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import { FormInstance } from 'antd/lib/form';
import LoginPage from './LoginPage';
import AboutMe from './AboutMe';
import Dashboard from './App';
import ContactMe from './ContactMe';

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
            <Route path="/about" element={<AboutMe />} />
            {/* <Route path="/form" element={<FormPage />} /> */}
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </Router>
      );
    }
  }
  

interface FormPageState {
  experience: string;
}

class FormPage extends Component {
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
          <Sidebar />

          <Layout>
          <div style={{ display: 'flex', paddingLeft: 300, justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 112px)' }}>
          <Card style={{ width: 500, padding: '18px' }}>
          <Form ref={this.formRef} onFinish={this.handleSubmit} style={{ width: 400 }}>
            <h2>Share your experience!</h2>
          <Form.Item label="Feedback" name="message" rules={[{ required: true, message: 'Please enter your feedback' }]}>
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit!
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

export default FormPage;
