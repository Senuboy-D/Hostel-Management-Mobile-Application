import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AdminLogin from './components/adminLogin';

function AppContent() {
  const [selectedItem, setSelectedItem] = useState('dashboard');
  const location = useLocation();

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const isOnAdminLoginPage = location.pathname === '/admin-login';

  return (
    <div className="App">
      {!isOnAdminLoginPage && <Header />}
      <Switch>
        <Route path="/admin-login" component={AdminLogin} />
        <Route path="/">
          <div className="main">
            <Sidebar onItemClick={handleItemClick} />
            <Dashboard selectedItem={selectedItem} />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
