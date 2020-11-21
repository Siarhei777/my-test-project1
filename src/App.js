import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Navbar />
        <Route path='/Dialogs' component = {Dialogs} />
        <Route path='/Profile' component = {Profile} />
        <Route path='/News' component = {News} />
        <Route path='/Music' component = {Music} />
        <Route path='/Settings' component = {Settings} />
      {/*<Dialogs />
        <Profile />
        <News />
        <Music />
        <Settings />*/}
      </div>
    </BrowserRouter>
  );
}

export default App;