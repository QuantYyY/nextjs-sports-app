import { FC, Suspense } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { Loading } from "@/components/loading/loading";
import { RacketsList } from "@/components/rackets-list/rackets-list";
import { getRacketsTop } from "@/service/get-rackets-top";
import { getRackets } from "@/service/get-rackets";

const Home: FC = async () => {
  const [
    { isError: isRacketsTopError, data: topRacketsData },
    { isError: isRacketsError, data: racketsData },
  ] = await Promise.all([getRacketsTop(), getRackets({})]);

  return (
    <div className={styles.rackets}>
      <div className={styles.header}>
        <div className={styles.title}>Ракетки</div>
        <Link href="rackets" className={styles.link}>
          Все
        </Link>
      </div>
      <RacketsList isError={isRacketsError} data={racketsData} />

      <div className={styles.header}>
        <div className={styles.title}>Топ-10 Ракеток</div>
      </div>
      <RacketsList isError={isRacketsTopError} data={topRacketsData} />
    </div>
  );
};

export default Home;
