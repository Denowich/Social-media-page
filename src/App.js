import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div class="app-wrapper-content">
        <Routes>
          <Route
            path="/profile/"
            element={
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route path="/dialogs/*" element={<Dialogs store={props.store} />} />
          <Route path="/news/" element={<News news={props.news} />} />
          <Route path="/music/" element={<Music music={props.music} />} />
          <Route
            path="/settings/"
            element={<Settings settings={props.settings} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
