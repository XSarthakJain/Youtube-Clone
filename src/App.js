import React from 'react';
import './App.css';
import Header from './header.jsx';
import Defaultscreen from './Defaultscreen.jsx';
import WatchOuter from './WatchOuter.jsx';
import Likedvideo from './Likedvideo.jsx';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
    <Header></Header>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Defaultscreen/>}/>
        <Route exact path="/watch" element={<WatchOuter/>}/>
        <Route exact path='/liked' element={<Likedvideo/>}/>
      </Routes>
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
