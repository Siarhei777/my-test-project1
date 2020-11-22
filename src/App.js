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

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Navbar />
        <Route path='/Dialogs' render = { () => <Dialogs messages = {props.state.messagesPage.messages} dialogs = {props.state.messagesPage.dialogs} />} />
        <Route path='/Profile' render = { () => <Profile posts = {props.state.profilePage.posts}/>} />
        <Route path='/News' component = {News} />
        <Route path='/Music' component = {Music} />
        <Route path='/Settings' component = {Settings} />
      </div>
    </BrowserRouter>
  );
}

export default App;