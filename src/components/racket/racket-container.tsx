import { FC } from "react";
import { Racket } from "./racket";
import { IRacket } from "@/types/racket";

type Props = {
  data: IRacket;
};

export const RacketContainer: FC<Props> = async ({ data }) => {
  return <Racket racket={data} />;
};
