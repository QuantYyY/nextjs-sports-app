"use client";

import { IRacket } from "@/types/racket";
import { BASE_API_URL } from "@/constants/service";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { LIMIT } from "./constants";
import { RacketsList } from "@/components/rackets-list/rackets-list";
import { FC } from "react";
import styles from "./styles.module.scss";

type FetcherProps = {
  initialData?: IRacket[];
};

type ComponentProps = {
  brands: { id: number; name: string }[];
};

const fetcher = async (
  path: string | FetcherProps["initialData"] | undefined,
) => {
  const result = await fetch(`${BASE_API_URL}/${path}`, {
    credentials: "include",
  });

  return result.json();
};

export const RacketsPaginatedContainer: FC<ComponentProps> = ({ brands }) => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "") || 1;
  const brand = searchParams.get("brand") || "";

  const { data, isLoading, error } = useSWR(
    `products?page=${page}&brand=${brand}&limit=${LIMIT}`,
    fetcher,
    {
      revalidateIfStale: false,
    },
  );

  const rackets = data;

  const updatePage = (page: number) => {
    window.history.pushState({}, "", `?page=${page}&brand=${brand}`);
  };

  const updateBrand = (brand: string) => {
    window.history.pushState({}, "", `?page=${page}&brand=${brand}`);
  };

  if (error) {
    return "Ошибка";
  }

  if (isLoading) {
    return "Загрузка SWR";
  }

  if (!rackets) {
    return "Список пуст";
  }

  return (
    <div>
      <div className={styles.brandsBlock}>
        <div onClick={() => updateBrand("")}></div>
        {brands &&
          brands.map((brand) => (
            <p onClick={() => updateBrand(brand.name)}>{brand.name}</p>
          ))}
      </div>
      <RacketsList data={rackets} isError={error} />
      <div>
        {page > 1 && <button onClick={() => updatePage(page - 1)}>prev</button>}
        <span>{page}</span>
        {!(rackets.length < LIMIT) && (
          <button onClick={() => updatePage(page + 1)}>next</button>
        )}
      </div>
    </div>
  );
};
