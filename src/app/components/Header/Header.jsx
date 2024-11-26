import Link from "next/link";
import styles from "./Header.module.css";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <img src="/logo.svg" />
      </Link>

      <nav className={styles.menu} aria-label="Main navigation">
        <Button label="Get in touch" />
      </nav>
    </header>
  );
};

export default Header;
