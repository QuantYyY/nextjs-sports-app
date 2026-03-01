import styles from "./styles.module.scss";
import { SITE_TITLE } from "@/constants/constants";
import { Link } from "@/components/link/link";
import NextTopLoader from "nextjs-toploader";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NextTopLoader />
      <header className={styles["layout-header"]}>
        <div className={styles.title}>{SITE_TITLE}</div>
        <nav className={styles.navigation}>
          <Link href="/">Главная</Link>
          <Link href="/rackets">Ракетки</Link>
          <Link href="/rackets/top">Топ Ракеток</Link>
        </nav>
      </header>

      <div className={styles.children}>{children}</div>

      <footer className={styles.footer}>
        <div>@2026 {SITE_TITLE}. All rights reserved.</div>
      </footer>
    </>
  );
}
