import { FC } from "react";
import styles from "./styles.module.scss";
import { getRacketsTop } from "@/service/get-rackets-top";
import { notFound } from "next/navigation";
import { RacketSelectionItem } from "../racket-selection-item/racket-selection-item";

export const RacketsListTop: FC = async () => {
  const { isError, data } = await getRacketsTop();

  if (isError) return <div>Error</div>;

  if (!data) return notFound();

  return (
    <>
      <div className={styles.list}>
        {data.map((r) => (
          <RacketSelectionItem racket={r} key={r.id} />
        ))}
      </div>
    </>
  );
};
