"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const title = "TENNIS STORE";
  const pathname = usePathname();

  const checkIsActive = (name: string) => {
    return pathname === name;
  };

  return (
    <html>
      <body>
        <header className={styles["layout-header"]}>
          <div className={styles.title}>{title}</div>
          <nav className={styles.navigation}>
            <Link href="/" className={checkIsActive("/") ? styles.active : ""}>
              Главная
            </Link>
            <Link
              href="/rackets"
              className={checkIsActive("/rackets") ? styles.active : ""}
            >
              Ракетки
            </Link>
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
