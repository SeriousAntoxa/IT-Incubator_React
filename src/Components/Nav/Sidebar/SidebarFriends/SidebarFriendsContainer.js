import { connect } from "react-redux"
import SidebarFriends from "./SidebarFriends"

let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar,
    }
}

const SidebarFriendsContainer = connect(mapStateToProps)(SidebarFriends)

export default SidebarFriendsContainer