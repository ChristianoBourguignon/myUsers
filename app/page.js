import Image from "next/image";
import styles from "./page.module.css";
import Login from "./pages/login";
import Register from "./pages/register";

export default function Home() {
  return (
    <main className={styles.main}>
      <Register />
    </main>
  );
}
