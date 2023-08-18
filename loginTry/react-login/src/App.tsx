// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Routes and Route
import Login from './Login';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const authToken = localStorage.getItem('authToken');

  return (
    <Router>
      <Routes> {/* Use Routes */}
        <Route
          path="/" // Path for the parent route
          element={authToken ? <Navigate to="/login" /> : <Login />} // Use Navigate element
        />
        <Route
          path="/dashboard" // Path for the child route
          element={authToken ? <Dashboard /> : <Navigate to="/dashboard" />} // Use Navigate element
        />
      </Routes>
    </Router>
  );
};

export default App;
