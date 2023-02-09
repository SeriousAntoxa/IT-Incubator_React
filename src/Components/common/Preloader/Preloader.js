import s from "./Preloader.module.css"
import preloader from "./../../../assets/image/preloader.gif"

let Preloader = () => {
    return (
        <div className={s.body}>
            <img className={s.img} src={preloader} alt="preloader" />
        </div>
    )
}

export default Preloader
