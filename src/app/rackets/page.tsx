"use client";

import { FC } from "react";
import styles from "./styles.module.scss";
import { rackets } from "@/mock";
import { useRouter } from "next/navigation";

const Page: FC = () => {
  const router = useRouter();

  return (
    <div className={styles.rackets}>
      <div className={styles.title}>Ракетки</div>
      <div className={styles.list}>
        {rackets.slice(0, 12).map((r) => (
          <div
            key={r.id}
            className={styles.card}
            onClick={() => router.push(`/rackets/${r.id}`)}
          >
            <img src={r.imageUrl} alt={r.name} />
            <div>{r.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
