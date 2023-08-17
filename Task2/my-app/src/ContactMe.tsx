import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card, message, Layout, Menu } from 'antd';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import { FormInstance } from 'antd/lib/form';
import LoginPage from './LoginPage';
import AboutMe from './AboutMe';
import Dashboard from './App';
// import FormPage from './Form';


const { Header, Content } = Layout;

const Sidebar: React.FC = () => {


  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const menuItems = document.getElementsByClassName('menuItems');

  const searchMenuItem = () => {
    const searchBarInput = document.getElementById('searchbar') as HTMLInputElement;
    const inputValue = searchBarInput.value.toLowerCase();

    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = menuItems[i] as HTMLElement;
      if (!menuItem.innerHTML.toLowerCase().includes(inputValue)) {
        menuItem.style.display = 'none';
      } else {
        menuItem.style.display = 'list-item';
      }
    }
  };

  const navigate = useNavigate();

  const handleCategoryClickNav = (event: React.MouseEvent<HTMLAnchorElement>) => {
    console.log("Reached in handleCategoryClick")
    event.preventDefault();

    const item = event.currentTarget.closest('.has-dropdown');
    if (!item) {
      return;
    }

    if (item.classList.contains('opened')) {
      navigate('/dashboard'); // Perform navigation when the dropdown is already open
    } else {

    item.classList.toggle('opened');

    Array.from(item.parentNode!.children).forEach((sibling) => {
      if (sibling !== item) {
        sibling.classList.remove('opened');
      }
    });

    const toOpen = item.querySelector('.sidebar-dropdown');
    if (toOpen) {
      toOpen.classList.toggle('active');
    }

    Array.from(item.parentNode!.children).forEach((sibling) => {
      const toClose = sibling.querySelector('.sidebar-dropdown');
      if (toClose) {
        toClose.classList.remove('active');
      }
    });
  }
  };

    // services 
    const handleCategoryClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      console.log("Reached in handleCategoryClick")
      event.preventDefault();
  
      const item = event.currentTarget.closest('.has-dropdown');
      if (!item) {
        return;
      }
  
      item.classList.toggle('opened');
  
      Array.from(item.parentNode!.children).forEach((sibling) => {
        if (sibling !== item) {
          sibling.classList.remove('opened');
        }
      });
  
      const toOpen = item.querySelector('.sidebar-dropdown');
      if (toOpen) {
        toOpen.classList.toggle('active');
      }
  
      Array.from(item.parentNode!.children).forEach((sibling) => {
        const toClose = sibling.querySelector('.sidebar-subdrop');
        if (toClose) {
          toClose.classList.remove('active');
        }
      });
    };
  

  // subdrop down 
  const handleCategoryClickSub = (event: React.MouseEvent<HTMLAnchorElement>) => {
    console.log("Reached in handleCategoryClickSub")
    event.preventDefault();

    const item = event.currentTarget.closest('.has-subdrop');
    if (!item) {
      return;
    }

    item.classList.toggle('opened');

    Array.from(item.parentNode!.children).forEach((sibling) => {
      if (sibling !== item) {
        sibling.classList.remove('opened');
      }
    });

    const toOpen = item.querySelector('.sidebar-subdrop');
    if (toOpen) {
      toOpen.classList.toggle('active');
    }

    Array.from(item.parentNode!.children).forEach((sibling) => {
      const toClose = sibling.querySelector('.sidebar-subdrop');
      if (toClose) {
        toClose.classList.remove('active');
      }
    });
  };


  return (
    <aside className="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left" id="show-side-navigation1">
      <div className="search position-relative text-center px-4 py-3 mt-2">
        <input
          id="searchbar"
          name="search"
          type="text"
          className="form-control w-100 border-0"
          // className="form-control w-100 border-0 bg-transparent"
          placeholder="Search here"
          value={searchValue}
          onChange={handleSearch}
          onKeyUp={searchMenuItem}
        />
      </div>

      <ul className="categories list-unstyled">
        <li className="has-dropdown menuItems">
          <Link to="#" onClick={handleCategoryClickNav}>Dashboard</Link>
          <ul className="sidebar-dropdown list-unstyled">
            <li className='menuItems'>
              <Link to="#">Widget Dashboard</Link>
            </li>
            <li className='menuItems'>
              <Link to="#">Chart Dashboard</Link>
            </li>
            <li className='menuItems'>
              <Link to="#">Real-Time Dashboard</Link>
            </li>
          </ul>
        </li>
        
    <li className="menuItems">
      <Link to="/about">About Us</Link>
    </li>


    <li className="menuItems">
        <Link to="/contact">Contact Us</Link>

      </li>


    <li className="has-dropdown menuItems subdrop">
      <Link onClick={handleCategoryClick} to="#"> Services</Link>
      <ul className="sidebar-dropdown list-unstyled">
        <li className="has-dropdown menuItems has-subdrop">
          <Link onClick={handleCategoryClickSub} to="#">Web Development</Link>
            <ul className="sidebar-dropdown list-unstyled menuItems sidebar-subdrop">
                <li className='menuItems'><Link to="#">React JS</Link></li>
                <li className='menuItems'><Link to="#">Angular JS</Link></li>
              </ul>
        </li>
        <li className="has-dropdown menuItems has-subdrop">
          <Link onClick={handleCategoryClickSub} to="#">Android Development</Link>
            <ul className="sidebar-dropdown list-unstyled menuItems sidebar-subdrop">
                <li className='menuItems'><Link to="#">React Native</Link></li>
                <li className='menuItems'><Link to="#">Flutter</Link></li>
              </ul>
        </li>
        <li className="menuItems"><Link to="#">DevOps</Link></li>


      </ul>
    </li>
  

      </ul>
    </aside>
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
