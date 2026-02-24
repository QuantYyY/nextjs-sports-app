import { FC } from "react";
import styles from "./styles.module.scss";
import { rackets } from "@/mock";
import { RacketSelectionItem } from "@/components/racket-selection-item/racket-selection-item";

const Page: FC = () => {
  return (
    <div className={styles.rackets}>
      <div className={styles.title}>Ракетки</div>
      <div className={styles.list}>
        {rackets.slice(0, 12).map((r) => (
          <RacketSelectionItem racket={r} key={r.id} />
        ))}
      </div>
    </div>
  );
};

export default Page;
