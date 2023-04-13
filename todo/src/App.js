import React from 'react';
import './App.css';
// import Component from './Component';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import To_Day from './To_Day';
import Morning from './Morning';
import Home from './Home';

function App() {
 return (
   <div className="App">
      <Router>
        <Routes>
            
          <Route path="/" element={<Home />}/>

          <Route path="to-day" element={<To_Day />}/>

        
          <Route path="morning" element={<Morning />}/>

          {/* <Route path="morning" element={<Morning />}/> */}
          
        </Routes>
      </Router>
   </div>
 );
}
 
export default App;