import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import Dashboard from './Components/Dashboard';
import "./App.css"
import Piechart from './Components/Piechart';
function App() {
  return (
    <>
      <div className='app'>
        <Sidebar />
        <div className='content-wrapper'>
          <Topbar />
          <main className='main-content'>
            <Dashboard />
            <Piechart/>
          </main>
        </div>
      </div>
    </>
  )
}

export default App