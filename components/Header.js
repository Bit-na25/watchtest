import Link from "next/link";
import Container from "./Container";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link href="/">WATCHA</Link>
        <Link className={styles.setting} href="/settings">
          설정
        </Link>
      </Container>
    </header>
  );
}
