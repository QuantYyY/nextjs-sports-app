import { BASE_API_URL } from "@/constants/service";
import { IRacket } from "@/types/racket";
import { Response } from "@/types/request";

export const getRacketsTop = async (): Response<IRacket[]> => {
  const result = await fetch(`${BASE_API_URL}/top-10`);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const products = await result.json();

  return { isError: false, data: products };
};
