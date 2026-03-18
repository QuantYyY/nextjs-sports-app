"use server";

import { BASE_API_URL } from "@/constants/service";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

type Params = {
  racketId: number;
  isFavorite: boolean;
};

export const handleFavorite = async ({ racketId, isFavorite }: Params) => {
  const cookieStore = await cookies();

  const url = `${BASE_API_URL}/product/${racketId}/favorite`;

  await fetch(url, {
    credentials: "include",
    method: isFavorite ? "DELETE" : "POST",
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  revalidatePath(`racket/${racketId}`);
};
