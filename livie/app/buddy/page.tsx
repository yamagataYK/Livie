import styles from "./Buddy.module.css";
import Nav from "../components/BottomNavigation";

export default function Buddy() {
    return (
        <main className={styles.page}>
            <h1 className={styles.title}>buddy</h1>
            <Nav />
        </main>
    )
};