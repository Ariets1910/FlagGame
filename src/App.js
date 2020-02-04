import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from "./components/Nav/nav";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/footer";

const App = ()=> {
  return (
    <div className="grid">
      <Header />
      <Nav/>
      <Content/>
      <Footer/>

    </div>
  );
}

export default App;
