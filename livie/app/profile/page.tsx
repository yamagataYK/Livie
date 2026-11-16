import styles from "./Profile.module.css";
import Nav from "../components/BottomNavigation";

export default function Profile() {
    return (
        <main className={styles.page}>
            <h1 className={styles.title}>prolfile</h1>
            <Nav />
        </main>
    )
};