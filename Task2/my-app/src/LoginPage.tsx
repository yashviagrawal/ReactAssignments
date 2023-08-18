import React, { Component, useState } from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { login } from './api';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom



const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogin = async () => {
    try {
      await login(username, password);
      localStorage.setItem('authToken', 'yourAuthToken');
      navigate('/dashboard'); // Use navigate to redirect
    } catch (error) {
      console.error('Login error:', error);
    }
  };

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card style={{ width: 400, padding: '24px' }}>
          <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      </Card>
    </div>
    );
  }

export default LoginPage;
