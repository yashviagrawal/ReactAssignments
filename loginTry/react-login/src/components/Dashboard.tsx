import React from 'react';

const Dashboard = () => {
  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('authToken');

    // Redirect to the login page
    window.location.href = '/';
  };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
