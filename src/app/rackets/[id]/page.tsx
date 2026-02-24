import { FC } from "react";
import styles from "../styles.module.scss";
import { rackets } from "@/mock";
import { BackButton } from "@/components/back-button/back-button";

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

const Page: FC<PageProps<"/rackets/[id]">> = async ({ params }) => {
  const { id } = await params;

  const racket = rackets.find((el) => String(el.id) === id);

  if (!racket) return <div>Ракетка не найдена</div>;

  return (
    <div className={styles.racket}>
      <div className={styles.description}>
        <div className={styles.backButton}>
          <BackButton text="Назад" />
        </div>
        <div className={styles.brand}>{racket.brand.name}</div>
        <div className={styles.name}>{racket.name}</div>
        <div className={styles.descriptionText}>{racket.description}</div>
      </div>

      <div className={styles.card}>
        <img src={racket.imageUrl} alt={racket.name} />
      </div>

      <div className={styles.price}>{racket.price} €</div>
    </div>
  );
};

export default Page;
