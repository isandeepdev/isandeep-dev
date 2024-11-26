import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({ label = "Default Label", href = "#" }) => {
  return (
    <Link className={styles.button} href={href}>
      {label}
    </Link>
  );
};

export default Button;
