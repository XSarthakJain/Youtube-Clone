import React from 'react';
import './App.css';
import Header from './header.jsx';
import Menuspace from './Menuspace.jsx';
function App() {
  return (
    <React.Fragment>
    <Header></Header>
    <section className="LeftSideSpace">
      <Menuspace></Menuspace>
    </section>
    </React.Fragment>
  );
}

export default App;
