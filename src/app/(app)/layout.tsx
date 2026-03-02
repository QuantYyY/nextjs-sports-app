import styles from "./styles.module.scss";
import { SITE_TITLE } from "@/constants/constants";
import { Link } from "@/components/link/link";
import NextTopLoader from "nextjs-toploader";
import { UserProvider } from "../providers/UserProvider";
import { getUser } from "@/service/get-user";
import { LoginSection } from "@/components/login-section/login-section";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await getUser();

  return (
    <UserProvider user={data}>
      <NextTopLoader />
      <header className={styles["layout-header"]}>
        <div className={styles.title}>{SITE_TITLE}</div>
        <nav className={styles.navigation}>
          <Link href="/">Главная</Link>
          <Link href="/rackets">Ракетки</Link>
          <Link href="/rackets/top">Топ Ракеток</Link>
          <LoginSection />
        </nav>
      </header>

      <div className={styles.children}>{children}</div>

      <footer className={styles.footer}>
        <div>@2026 {SITE_TITLE}. All rights reserved.</div>
      </footer>
    </UserProvider>
  );
}
