import Link from "next/link";
import styles from "./BottomNavigation.module.css";

const navItems = [
    { href: "/timeline", icon: "🏠", label: "Timeline" },
    { href: "/artist", icon: "🎨", label: "Artist" },
    { href: "/buddy", icon: "🤝", label: "Buddy" },
    { href: "/dm", icon: "💬", label: "DM" },
    { href: "/profile", icon: "👤", label: "Profile" },
];

export default function BottomNavigation() {
    return (
        <nav className={styles.nav} aria-label="Bottom navigation">
            {navItems.map(({ href, icon, label }) => (
                <Link key={label} href={href} className={styles.item}>
                    <span className={styles.icon} aria-hidden="true">{icon}</span>
                    <span className={styles.label}>{label}</span>
                </Link>
            ))}
        </nav>
    );
}