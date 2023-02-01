import "./App.css"
import HeaderContainer from "./Components/Header/HeaderContainer"
import Nav from "./Components/Nav/Nav"
import { ProfileContainerWithParams,
    ProfileContainer
} from "./Components/Profile/ProfileContainer"
import DialogsContainer from "./Components/Dialogs/DialogsContainer"
import News from "./Components/News/News"
import UsersContainer from "./Components/Users/UsersContainer"
import Music from "./Components/Music/Music"
import Login from "./Components/Login/Login"
import SettingsC from "./Components/SettingsC/SettingsC"
import { Route, Routes } from "react-router-dom"

const App = () => {
    return (
        <div className="wrapper">
            <HeaderContainer />
            <Nav />
            <main className="wrapper_content">
                <Routes>
                    <Route
                        path="/profile/:userId"
                        element={<ProfileContainerWithParams />}
                    />
                    <Route path="/profile" element={<ProfileContainer />} />
                    <Route path="/dialogs" element={<DialogsContainer />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/users" element={<UsersContainer />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<SettingsC />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
