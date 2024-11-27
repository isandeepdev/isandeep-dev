import Link from "next/link";
import styles from "./Button.module.css";

const defaultStyles = {
  padding: "10px 20px",
  fontSize: "1.1rem",
  borderRadius: "20px",
  backgroundColor: "#9de50f",
  backgroundImage: "linear-gradient(to top, #c9e492 0%, #9de50f 100%)",
  color: "#000",
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
  justifyContent: "center",
};

const Button = ({ customStyles, children, href = "#", label }) => {
  const mergedStyles = { ...defaultStyles, ...customStyles };

  return (
    <Link className={styles.button} style={mergedStyles} href={href}>
      {label} {children}
    </Link>
  );
};

export default Button;
