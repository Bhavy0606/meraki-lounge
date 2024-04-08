import {useNavigate} from "react-router-dom"
import styles from "./not-found.module.scss"
const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className={styles["container"]}>
            <h1>Page Not Found</h1>
            <label
                onClick={() => {
                    navigate("/home")
                }}
            >
                Go to Home
            </label>
        </div>
    )
}

export default NotFound
