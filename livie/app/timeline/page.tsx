import styles from "./Timeline.module.css";
import Nav from "../components/BottomNavigation";

export default function Timeline() {
    return (
        <main className={styles.page}>
            <h1 className={styles.title}>timeline</h1>
            <Nav />
        </main>
    );
}
