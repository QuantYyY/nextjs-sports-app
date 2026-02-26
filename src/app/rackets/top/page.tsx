import { FC, Suspense } from "react";
import styles from "../styles.module.scss";
import { RacketsListTop } from "@/components/rackets-list-top/rackets-list-top";
import { Loading } from "@/components/loading/loading";

const Page: FC = () => {
  return (
    <div className={styles.rackets}>
      <div className={styles.title}>Подборка лучших 10 ракеток</div>
      <div className={styles.list}>
        <Suspense fallback={<Loading />}>
          <RacketsListTop />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
