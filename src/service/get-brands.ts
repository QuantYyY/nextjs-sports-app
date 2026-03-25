import { BASE_API_URL } from "@/constants/service";
import { cookies } from "next/headers";

export const getBrands = async () => {
  const cookieStore = await cookies();

  const result = await fetch(`${BASE_API_URL}/brands`, {
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

  const brands = await result.json();

  console.log(brands);

  return { isError: false, data: brands };
};
