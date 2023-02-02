import "./App.css"
import React from "react"
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
import Preloader from "./Components/common/Preloader"
import SettingsC from "./Components/SettingsC/SettingsC"
import { Route, Routes } from "react-router-dom"
import { connect } from "react-redux"
import { initialize } from "./redux/app-reducer"

class App extends React.Component {
    componentDidMount() {
        this.props.initialize()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

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
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initialize})(App)
