import styles from "./Artist.module.css";
import Nav from "../components/BottomNavigation";

export default function Artist() {
    return (
        <main className={styles.page}>
            <h1 className={styles.title}>artist</h1>
            <Nav />
        </main>
    )
};