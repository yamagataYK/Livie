import styles from "./Dm.module.css";
import Nav from "../components/BottomNavigation";

export default function Dm() {
    return (
        <main className={styles.page}>
            <h1 className={styles.title}>dm</h1>
            <Nav />
        </main>
    )
};