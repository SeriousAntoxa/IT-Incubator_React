import "./App.css";
import Headers from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import ProfileContainerWithParams from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import News from "./Components/News/News";
import UsersContainer from "./Components/Users/UsersContainer";
import Music from "./Components/Music/Music";
import SettingsC from "./Components/SettingsC/SettingsC";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="wrapper">
      <Headers />
      <Nav />
      <main className="wrapper_content">
        <Routes>
          <Route path="/profile/:userId" element={<ProfileContainerWithParams />} />
          <Route path="/profile" element={<ProfileContainerWithParams />} />
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<SettingsC />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
