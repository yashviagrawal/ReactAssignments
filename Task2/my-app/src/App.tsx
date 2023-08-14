import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import LoginPage from './LoginPage';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import { AuthContextProvider, useAuth } from './AuthContext';
import LogoutPage from './LogoutPage';

// import FormPage from './Form';
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
          onKeyUp={searchAnimal}
        />
      </div>

      <ul className="categories list-unstyled">
        <li className="has-dropdown animals">
          <Link to="#" onClick={handleCategoryClickNav}>Dashboard</Link>
          <ul className="sidebar-dropdown list-unstyled">
            <li className='animals'>
              <Link to="#">Widget Dashboard</Link>
            </li>
            <li className='animals'>
              <Link to="#">Chart Dashboard</Link>
            </li>
            <li className='animals'>
              <Link to="#">Real-Time Dashboard</Link>
            </li>
          </ul>
        </li>
        
    <li className="animals">
      <Link to="/about">About Us</Link>
    </li>


    <li className="animals">
        <Link to="/contact">Contact Us</Link>

      </li>


    <li className="has-dropdown animals subdrop">
      <Link onClick={handleCategoryClick} to="#"> Services</Link>
      <ul className="sidebar-dropdown list-unstyled">
        <li className="has-dropdown animals has-subdrop">
          <Link onClick={handleCategoryClickSub} to="#">Web Development</Link>
            <ul className="sidebar-dropdown list-unstyled animals sidebar-subdrop">
                <li className='animals'><Link to="#">React JS</Link></li>
                <li className='animals'><Link to="#">Angular JS</Link></li>
              </ul>
        </li>
        <li className="has-dropdown animals has-subdrop">
          <Link onClick={handleCategoryClickSub} to="#">Android Development</Link>
            <ul className="sidebar-dropdown list-unstyled animals sidebar-subdrop">
                <li className='animals'><Link to="#">React Native</Link></li>
                <li className='animals'><Link to="#">Flutter</Link></li>
              </ul>
        </li>
        <li className="animals"><Link to="#">DevOps</Link></li>


      </ul>
    </li>
  

      </ul>
    </aside>
  );
};



const App: React.FC = () => {
  // const { isAuthenticated } = useAuth();
  // console.log(isAuthenticated);

    return (
      <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          

          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/logout" element={<LogoutPage />} />
          {/* <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/logout" />} /> */}

          {/* <Route path="/form" element={<FormPage />} /> */}
        </Routes>
      </Router>
      </AuthContextProvider>
    );
  
}




const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    // After logout, navigate to the login page
    navigate('/logout'); // Replace with your login route
  };

  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ display: 'flex', justifyContent: 'flex-end' }}
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1">Username</Menu.Item>
          <Menu.Item key="/logout">
            <Link to="/logout" onClick={handleLogout}>Logout</Link>
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


export default App;