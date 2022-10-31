import Link from "next/link";
import { useRouter } from "next/router";
import { navigationLinks } from "../../utils/data";
import styles from './Navbar.module.css';

export const Navbar = () => {
    const router = useRouter();

    const verifyActiveLink = (loopPaht: string) => {
        if (loopPaht === '/' && router.pathname !== '/') return null;

        if (router.pathname.indexOf(loopPaht) === 0) {
            return styles.linkActive;
        }

        return null;
    }

    return (
        <ul className={styles.container}>
            {navigationLinks.map((link, index) => (
                <li key={index} className={[
                    styles.linkItem,
                    link.path.includes(router.pathname) ? styles.linkActive : null
                ].join(' ')}>
                    <Link href={link.path[0]}>{link.label}</Link>
                </li>
            ))}

        </ul>
    );
}