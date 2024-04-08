import Footer from "../components/footer"
import Header from "../components/header"
import styles from "./layout.module.scss"

const HomeLayout = (props: any) => {
    return (
        <>
            <div className={styles["container"]}>
                <div className={styles["header-container"]}>
                    <Header />
                </div>
                <div className={styles["layout-content"]}>{props.children}</div>
                <Footer />
            </div>
        </>
    )
}

export default HomeLayout
