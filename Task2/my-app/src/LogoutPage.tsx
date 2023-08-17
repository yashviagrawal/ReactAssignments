import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const LogoutPage: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    console.log("In logout fucntion")
    // Clear browser's navigation history
    window.history.pushState(null, '', '/'); // Replace with your desired URL
    window.history.go(0); // Reload the page to reflect the changes
  }, [logout]);

  return <div><h2>Logging out...</h2></div>;
};

export default LogoutPage;
