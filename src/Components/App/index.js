import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import Profile from "../Profile";
import Home from "../Home";
import About from "../About";
import News from "../News";
import CountPage from "../Count-Page";
import Dialogs from "../Dialogs";
import classes from "./style.module.css";
import { Route } from "react-router-dom";
import WatchFilms from "../WatchFilms";
import Users from "../Users";
import { ChatPage } from "../../pages/Chat/ChatPage";

const App = (props) => {
  return (
    <div className={`${classes.wrapper} ${classes.color}`}>
      <Header />
      <Navbar />
      <div className={classes.app_wrapper_content}>
        <Route path="/dialogs" render={() => <Dialogs />} />
        <Route path="/profile/:userId" render={() => <Profile />} />
        <Route path="/home" render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/films" render={() => <WatchFilms />} />
        <Route path="/users" render={() => <Users />} />
        <Route path="/count-page" render={() => <CountPage />} />
        <Route path="/chat" render={() => <ChatPage />} />
      </div>
    </div>
  );
};

export default App;
