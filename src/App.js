import React from 'react';
import './App.css';
import Header from './header.jsx';
import Menuspace from './Menuspace.jsx';
import Recommendedtags from './Recommendedtags.jsx';
import Mediaspace from './Mediaspace.jsx';
function App() {
  return (
    <React.Fragment>
    <Header></Header>
    <div className="OuterMainSpace">
    <section className="LeftSideSpace">
      <Menuspace></Menuspace>
    </section>
    <section className="RightSideSpace">
    <Recommendedtags></Recommendedtags>
    <Mediaspace></Mediaspace>
    </section>
    </div>
    </React.Fragment>
  );
}

export default App;
