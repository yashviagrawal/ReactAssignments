import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('authToken');

    // Redirect to the login page
    window.location.href = '/';
  };

  const [username, setUsername] = useState('');

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername !== null) {
      setUsername(savedUsername);
    }
  }, []);
  return (
    <div>
      <h1>Welcome to the Dashboard, {username}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
