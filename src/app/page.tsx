import Link from "next/link";
import styles from "./styles.module.scss";
import { rackets } from "@/mock";
import { RacketSelectionItem } from "@/components/racket-selection-item/racket-selection-item";

export default function Home() {
  return (
    <div className={styles.rackets}>
      <div className={styles.header}>
        <div className={styles.title}>Ракетки</div>
        <Link href="rackets" className={styles.link}>
          Все
        </Link>
      </div>

      <div className={styles.list}>
        {rackets.slice(0, 3).map((r) => (
          <RacketSelectionItem racket={r} key={r.id} />
        ))}
      </div>
    </div>
  );
}
