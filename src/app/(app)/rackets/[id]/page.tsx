import { Racket } from "@/components/racket/racket";
import { getMetadataRacketById } from "@/service/get-metadata-racket-by-id";
import { getRacketById } from "@/service/get-racket-by-id";
import { notFound } from "next/navigation";
import { FC } from "react";

export async function generateMetadata({ params }: PageProps<"/rackets/[id]">) {
  const { id } = await params;

  const { isError, data } = await getMetadataRacketById(id);

  if (isError || !data) {
    return {
      title: "Страница ракетки",
      description: "Описание ракетки",
    };
  }

  return {
    title: data.name,
    description: data.description,
  };
}

const Page: FC<PageProps<"/rackets/[id]">> = async ({ params }) => {
  const { id } = await params;
  const { isError, data } = await getRacketById(id);

  if (isError) {
    throw new Error();
  }

  if (!data) return notFound();

  return <Racket racket={data} />;
};

export default Page;
