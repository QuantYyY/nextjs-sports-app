import { BASE_API_URL } from "@/constants/service";
import { IRacket } from "@/types/racket";
import { Response } from "@/types/request";
import { cookies } from "next/headers";

export const getMetadataRacketById = async (
  racketId: string,
): Response<IRacket> => {
  const cookieStore = await cookies();

  const result = await fetch(`${BASE_API_URL}/meta/product/${racketId}`, {
    credentials: "include",
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const { product } = await result.json();

  return { isError: false, data: product };
};
