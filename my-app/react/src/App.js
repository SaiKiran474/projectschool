import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
// import Home from './components/Home';
// import Sample from './components/sample.js'
// import AboutUs from './components/AboutUs'
// import List from './components/list';
import Login from './components/login';
import Dashboard from './components/dashboard';
// import Search from './components/Search';
import RequestSent from './components/RequestSent';
import Request from './components/request';
import ADRR from './components/adrr';
import DDRR from './components/ddrr';
import DGRR from './components/dgrr';
import Eventcheck from './components/Eventcheck';
import Register from './components/Register';
import Transportation from './components/Transportation';
import CheckStatus from './components/CheckStatus';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/requestSent" element={<RequestSent/>}/>
      {/* <Route path="/:id/adrr" element={<ADRR/>}/>
      <Route path="/:id/ddrr" element={<DDRR/>}/>
      <Route path="/:id/dgrr" element={<DGRR/>}/> */}
      <Route path="*" element={<Eventcheck/>} />
      <Route path="/:id" element={<Dashboard />}>
          <Route path="request" element={<Request />} />
          <Route path="adrr" element={<ADRR />} />
          <Route path="ddrr" element={<DDRR/>}/>
          <Route path="dgrr" element={<DGRR/>}/>
          <Route path="Register" element={<Register/>}/>
          <Route path="Transportation" element={<Transportation/>}/>
          <Route path="Transportation/:req_id" element={<CheckStatus/>}/>
      </Route>
      {/* <Route exact path="/Home" element={<Home/>} />
      <Route exact path="/aboutUS" element={<AboutUs/>} />
      <Route exact path="/l
      ogin" element={<Login/>} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
