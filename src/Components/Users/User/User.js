import s from './User.module.css'

const User = (props) => {
    let user = props.user
    

    const follow = () => {
        props.follow(user.id);
    };

    const unfollow = () => {
        props.unfollow(user.id);
    };

    return (
        <div className={s.user}>
            <div className={s.user_logoAndBtn}>
                <div className={s.user_logo}>
                    <img src={user.photoUrl}/>
                </div>
                <div className={s.user_btn}>
                    {user.followed ? 
                    <button className={s.btn} onClick={unfollow}>Unfollow</button> :
                    <button className={s.btn} onClick={follow}>Follow</button>}   
                </div>
            </div>
            <div className={s.user_info}>
                <div className={s.user_name}>
                    <p>{user.name.firstName + ' ' + user.name.lastName}</p>
                </div>
                <div className={s.user_status}>
                    <p>{user.status}</p>
                </div>
                <div className={s.user_location}>
                    <p>{user.location.country + ' ' + user.location.city}</p>
                </div>
            </div>
        </div>
    )

}

export default User
