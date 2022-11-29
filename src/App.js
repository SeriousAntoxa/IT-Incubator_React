import "./App.css";
import Headers from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className="wrapper">
      <Headers />
      <Nav />
      <main className="wrapper_content">
        <Dialogs />
      </main>
    </div>
  );
};

export default App;
