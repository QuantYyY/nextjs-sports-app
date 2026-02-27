import { FC, Suspense } from "react";
import styles from "./styles.module.scss";
import { RacketsListMain } from "@/components/rackets-list-main/rackets-list-main";
import { Loading } from "@/components/loading/loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TENNIS STORE - Ракетки",
  description: "Список ракеток",
};

const Page: FC = () => {
  return (
    <div className={styles.rackets}>
      <div className={styles.title}>Ракетки</div>
      <div className={styles.list}>
        <Suspense fallback={<Loading />}>
          <RacketsListMain limit={20} />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
