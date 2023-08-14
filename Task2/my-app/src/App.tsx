import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import LoginPage from './LoginPage';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import FormPage from './Form';
import './App.css'
import { log } from 'console';

const { Header, Content } = Layout;


const Sidebar: React.FC = () => {


  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const animals = document.getElementsByClassName('animals');

  const searchAnimal = () => {
    const input = document.getElementById('searchbar') as HTMLInputElement;
    const inputValue = input.value.toLowerCase();

    for (let i = 0; i < animals.length; i++) {
      const animal = animals[i] as HTMLElement;
      if (!animal.innerHTML.toLowerCase().includes(inputValue)) {
        animal.style.display = 'none';
      } else {
        animal.style.display = 'list-item';
      }
    }
  };

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
      const toClose = sibling.querySelector('.sidebar-dropdown');
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
          className="form-control w-100 border-0 bg-transparent"
          placeholder="Search here"
          value={searchValue}
          onChange={handleSearch}
          onKeyUp={searchAnimal}
        />
      </div>

      <ul className="categories list-unstyled">
        {/* Replace the following HTML content with your dynamic sidebar items */}
        <li className="has-dropdown animals">

          <Link onClick={handleCategoryClick} to="/dashboard">Dashboard</Link>


          <ul className="sidebar-dropdown list-unstyled">
            <li className='animals'>
              <a href="#">Widget Dashboard</a>
            </li>
            <li className='animals'>
              <a href="#">Chart Dashboard</a>
            </li>
            <li className='animals'>
              <a href="#">Real-Time Dashboard</a>
            </li>
          </ul>
        </li>
        
    <li className="animals">
      {/* <a href="#"> About Us</a> */}
      <Link to="/about">About Us</Link>

    </li>


    <li className="animals">
        {/* <a href="#"> Contact Us</a> */}
        <Link to="/contact">Contact Us</Link>

      </li>


    <li className="has-dropdown animals">
      <a onClick={handleCategoryClick} href="#"> Services</a>
      <ul className="sidebar-dropdown list-unstyled">
        <li  className="has-dropdown animals"><a onClick={handleCategoryClick} href="#">Web Development</a>
            <ul className="sidebar-dropdown list-unstyled animals">
                <li><a href="#">React JS</a></li>
                <li><a href="#">Angular JS</a></li>
              </ul>
        </li>
        <li className="has-dropdown animals"><a onClick={handleCategoryClick} href="#">Android Development</a>
            <ul className="sidebar-dropdown list-unstyled">
                <li className='animals'><a href="#">React Native</a></li>
                <li className='animals'><a href="#">Flutter</a></li>
              </ul>
        </li>
        <li className="animals"><a href="#">DevOps</a></li>


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


class Dashboard extends Component {

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
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;