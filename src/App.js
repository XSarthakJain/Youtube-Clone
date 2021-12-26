import React from 'react';
import './App.css';
import Header from './header.jsx';
import Defaultscreen from './Defaultscreen.jsx';
import WatchOuter from './WatchOuter.jsx';
import Likedvideo from './Likedvideo.jsx';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Videosearchdata from './context/Videosearchdata';
function App() {
  return (
    <React.Fragment>
    <Videosearchdata>
    <BrowserRouter>
    <Header></Header>
    <Routes>
        <Route exact path="/" element={<Defaultscreen/>}/>
        <Route exact path="/watch/:vname/:vtitle/:ctitle/:vpublishtime/:clink/" element={<WatchOuter/>}/>
        <Route exact path='/liked' element={<Likedvideo/>}/>
      </Routes>
    </BrowserRouter>
    </Videosearchdata>
    </React.Fragment>
  );
}

export default App;
