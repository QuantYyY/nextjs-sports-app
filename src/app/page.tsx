"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { rackets } from "@/mock";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

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
}
