import Header from "./components/Header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <h1 className={styles.heading}>
        I'm <span>Sandeep</span>
      </h1>
    </div>
  );
}
