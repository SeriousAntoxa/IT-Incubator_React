import s from "./SidebarFriends.module.css"
import Friend from "./Friend/Friend"

const SidebarFriends = (props) => {
    const friendsData = props.sidebar.friends.map((f) => (
        <Friend key={f.id} name={f.name} />
    ))

    return <div className={s.friends}>{friendsData}</div>
}

export default SidebarFriends
