import { Loading } from "@/components/loading/loading";
import { RacketContainer } from "@/components/racket/racket-container";
import { getRacketById } from "@/service/get-racket-by-id";
import { notFound } from "next/navigation";
import { FC, Suspense } from "react";

const Page: FC<PageProps<"/rackets/[id]">> = async ({ params }) => {
  const { id } = await params;
  const { isError, data } = await getRacketById(id);

  if (isError) return <div>Ошибка</div>;

  if (!data) return notFound();

  return (
    <>
      <RacketContainer data={data} />
    </>
  );
};

export default Page;
