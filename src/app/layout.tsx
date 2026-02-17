import Link from "next/link";
import styles from "./styles.module.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const title = "TENNIS STORE";

  return (
    <html>
      <body>
        <header className={styles["layout-header"]}>
          <div className={styles.title}>{title}</div>
          <nav className={styles.navigation}>
            <Link href="/">Главная</Link>
            <Link href="/rackets">Ракетки</Link>
          </nav>
        </header>

        <div className={styles.children}>{children}</div>

        <footer className={styles.footer}>
          <div>@2026 {title}. All rights reserved.</div>
        </footer>
      </body>
    </html>
  );
}
