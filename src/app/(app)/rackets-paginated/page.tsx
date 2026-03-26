import { FC } from "react";
import { RacketsPaginatedContainer } from "./container";
import { SWRConfig } from "swr";
import { getRackets } from "@/service/get-rackets";
import { LIMIT } from "./constants";
import { getBrands } from "@/service/get-brands";

const Page: FC<PageProps<"/rackets-paginated">> = async ({ searchParams }) => {
  const { page = "1" } = await searchParams;
  const { brand } = await searchParams;

  let pageNumber = 1;
  if (typeof page === "string") {
    pageNumber = parseInt(page) || 1;
  }

  const { data } = await getRackets({ page: pageNumber, limit: LIMIT });

  const { data: brandsData = [] } = await getBrands();

  return (
    <SWRConfig
      value={{
        fallback: {
          [`products?page=${page}&limit=${LIMIT}`]: data,
        },
      }}
    >
      <RacketsPaginatedContainer brands={brandsData} />
    </SWRConfig>
  );
};

export default Page;
