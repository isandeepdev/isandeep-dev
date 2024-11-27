import Link from "next/link";
import Header from "./components/Header/Header";
import styles from "./page.module.css";

const icons = [
  { handle: "https://twitter.com/isandeepdev", url: "/twitter.svg" },
  { handle: "https://linkedin.com/in/isandeepdev", url: "/linkedin.svg" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Header />
        <section className={styles.section}>
          <div className={styles.intro}>Hi ✋ I am sandeep</div>
          <h1 className={styles.heading}>Software engineer + UI Developer</h1>
          <p className={styles.description}>
            I specialize in designing and developing high-performance,
            user-friendly web applications with technologies like JavaScript,
            React, and Node.js.
          </p>

          <div className={styles.socialIcons}>
            {icons.map((icon, index) => (
              <Link
                href={icon.handle}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <img className={styles.icon} src={icon.url} />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
