import { FC, Suspense } from "react";
import styles from "../styles.module.scss";
import { Loading } from "@/components/loading/loading";
import { RacketsList } from "@/components/rackets-list/rackets-list";
import { getRackets } from "@/service/get-rackets";

const Page: FC = async () => {
  const { isError, data } = await getRackets({});

  return (
    <div className={styles.rackets}>
      <div className={styles.title}>Подборка лучших 10 ракеток</div>
      <div className={styles.list}>
        <Suspense fallback={<Loading />}>
          <RacketsList isError={isError} data={data} />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
