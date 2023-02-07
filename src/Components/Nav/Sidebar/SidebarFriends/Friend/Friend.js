import s from "./Friend.module.css"

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <div className={s.friend_logo}></div>
            <div className={s.friend_name}>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default Friend
