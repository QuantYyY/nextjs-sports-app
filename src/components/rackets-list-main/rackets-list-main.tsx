import { FC } from "react";
import styles from "./styles.module.scss";
import { getRackets } from "@/service/get-rackets";
import { notFound } from "next/navigation";
import { RacketSelectionItem } from "../racket-selection-item/racket-selection-item";

type Props = {
  page?: number;
  limit?: number;
};

export const RacketsListMain: FC<Props> = async ({ page, limit }) => {
  const { isError, data } = await getRackets({ page, limit });

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
