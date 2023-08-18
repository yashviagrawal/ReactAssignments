import React, { Component, useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import LoginPage from './LoginPage';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import { AuthContextProvider, useAuth } from './AuthContext';

// import FormPage from './Form';
import './App.css'
import { log } from 'console';

const { Header, Content } = Layout;


const Sidebar: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const menuItemsRef = useRef<(HTMLLIElement | HTMLUListElement)[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const searchMenuItem = () => {
    const inputValue = searchValue.toLowerCase();
  
    menuItemsRef.current.forEach(item => {
      if (item instanceof HTMLLIElement || item instanceof HTMLUListElement) {
        const link = item.querySelector('a');
        if (link) {
          const itemText = link.textContent?.toLowerCase() || '';
          item.style.display = itemText.includes(inputValue) ? 'list-item' : 'none';
        }
      }
    });
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
        <li className="has-dropdown menuItems" ref={(el) => el && menuItemsRef.current.push(el)}>
          <Link to="#" onClick={handleCategoryClickNav}>Dashboard</Link>
          <ul className="sidebar-dropdown list-unstyled">
            <li className="menuItems" ref={(el) => el && menuItemsRef.current.push(el)}>
              <Link to="#">Widget Dashboard</Link>
            </li>
            <li className="menuItems" ref={(el) => el && menuItemsRef.current.push(el)}>
              <Link to="#">Chart Dashboard</Link>
            </li>
            <li className="menuItems" ref={(el) => el && menuItemsRef.current.push(el)}>
              <Link to="#">Real-Time Dashboard</Link>
            </li>
          </ul>
        </li>
        
    <li className="mmenuItems" ref={(el) => el && menuItemsRef.current.push(el)}>
      <Link to="/about">About Us</Link>
    </li>


    <li className="menuItems" ref={(el) => el && menuItemsRef.current.push(el)}>
        <Link to="/contact">Contact Us</Link>

      </li>


    <li className="has-dropdown subdrop menuItems" ref={(el) => el && menuItemsRef.current.push(el)}>
      <Link onClick={handleCategoryClick} to="#"> Services</Link>
      <ul className="sidebar-dropdown list-unstyled">
        <li className="has-dropdown has-subdrop menuItems" ref={(el) => el && menuItemsRef.current.push(el)}>
          <Link onClick={handleCategoryClickSub} to="#">Web Development</Link>
            <ul className="sidebar-dropdown list-unstyled sidebar-subdrop menuItems" ref={(el) => el && menuItemsRef.current.push(el)}>
                <li className="menuItems" ref={(el) => el && menuItemsRef.current.push(el)}><Link to="#">React JS</Link></li>
                <li className="menuItems" ref={(el) => el && menuItemsRef.current.push(el)}><Link to="#">Angular JS</Link></li>
              </ul>
        </li>
        <li className="has-dropdown has-subdrop menuItems" ref={(el) => el && menuItemsRef.current.push(el)}>
          <Link onClick={handleCategoryClickSub} to="#">Android Development</Link>
            <ul className="sidebar-dropdown list-unstyled sidebar-subdrop menuItems" ref={(el) => el && menuItemsRef.current.push(el)}>
                <li className="menuItems" ref={(el) => el && menuItemsRef.current.push(el)}><Link to="#">React Native</Link></li>
                <li className="menuItems" ref={(el) => el && menuItemsRef.current.push(el)}><Link to="#">Flutter</Link></li>
              </ul>
        </li>
        <li className="menuItems" ref={(el) => el && menuItemsRef.current.push(el)}><Link to="#">DevOps</Link></li>


      </ul>
    </li>
  

      </ul>
    </aside>
  );
};



const App: React.FC = () => {
  const authToken = localStorage.getItem('authToken');

    return (
      <AuthContextProvider>
      <Router>
        <Routes>
        <Route
          path="/" // Path for the parent route
          element={authToken ? <Navigate to="/login" /> : <LoginPage />} // Use Navigate element
        />
        <Route
          path="/dashboard" // Path for the child route
          element={authToken ? <Dashboard /> : <Navigate to="/dashboard" />} // Use Navigate element
        />
      
          {/* <Route path="/" element={<LoginPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          

          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
          {/* <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/logout" />} /> */}

          {/* <Route path="/form" element={<FormPage />} /> */}
        </Routes>
      </Router>
      </AuthContextProvider>
    );
  
}




const Dashboard: React.FC = () => {
  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('authToken');

    // Redirect to the login page
    window.location.href = '/';
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