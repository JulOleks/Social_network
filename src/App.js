import React from "react";
import "./css/App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";


const App = (props) => {
  debugger
  return (

    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper__content">
        <Route path="/dialogs" render={() => <Dialogs
          state={props.state.dialogsPage} />} />
        <Route path="/profile" render={() => <Profile
          profilePage={props.state.profilesPage} dispatch={props.dispatch} />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />

      </div>

    </div>

  );
};

export default App;
