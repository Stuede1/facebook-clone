import React from 'react';
import Header from './Components/Header/Header';
import LeftSideBar from './Components/SideBars/LeftSideBar';
import MiddleContent from './Components/MiddleContent/MiddleContent';
import RightSideBar from './Components/SideBars/RightSideBar';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
