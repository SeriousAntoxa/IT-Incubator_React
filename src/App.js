import "./App.css";
import Headers from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import SettingsC from "./Components/SettingsC/SettingsC";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Headers />
        <Nav />
        <main className="wrapper_content">
          <Routes>
            <Route path="/profile" element={<Profile posts={props.posts} />} />
            <Route path="/dialogs" element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<SettingsC />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
