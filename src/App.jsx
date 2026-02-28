import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import Header from './Components/Header/Header';
import LeftSideBar from './Components/SideBars/LeftSideBar';
import MiddleContent from './Components/MiddleContent/MiddleContent';
import RightSideBar from './Components/SideBars/RightSideBar';
import Login from './pages/Login/Login';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: '#f0f2f5'
      }}>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <Router basename="/facebook-clone">
      <Routes>
        <Route 
          path="/login" 
          element={user ? <Navigate to="/" /> : <Login />} 
        />
        <Route 
          path="/" 
          element={user ? (
            <div>
              <Header />
              <div className="main-layout">
                <div className="left-sidebar-section">
                  <LeftSideBar />
                </div>
                <div className="middle-content-section">
                  <MiddleContent />
                </div>
                <div className="right-sidebar-section">
                  <RightSideBar />
                </div>
              </div>
            </div>
          ) : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
