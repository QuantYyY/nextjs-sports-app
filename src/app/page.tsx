import { FC, Suspense } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { RacketsListMain } from "@/components/rackets-list-main/rackets-list-main";
import { Loading } from "@/components/loading/loading";
import { RacketsListTop } from "@/components/rackets-list-top/rackets-list-top";

const Home: FC = () => {
  return (
    <div className={styles.rackets}>
      <Suspense fallback={<Loading />}>
        <div className={styles.header}>
          <div className={styles.title}>Ракетки</div>
          <Link href="rackets" className={styles.link}>
            Все
          </Link>
        </div>
        <RacketsListMain />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <div className={styles.header}>
          <div className={styles.title}>Топ-10 Ракеток</div>
        </div>
        <RacketsListTop />
      </Suspense>
    </div>
  );
};

export default Home;
