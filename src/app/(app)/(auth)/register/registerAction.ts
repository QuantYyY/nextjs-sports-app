"use server";

import { BASE_API_URL } from "@/constants/service";
import { parseSetCookie } from "@/helpers/parse-set-cookie";
import { cookies } from "next/headers";

export const registerAction = async (state, formData: FormData) => {
  const login = formData.get("login")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  const result = await fetch(`${BASE_API_URL}/auth/signup`, {
    method: "POST",
    body: JSON.stringify({ login, password }),
    headers: { "Content-Type": "application/json" },
  });

  console.log(result);

  if (result.status !== 200) {
    return {
      error: "Данные не соответствуют требованиям",
      redirectTo: undefined,
    };
  }

  const cookiesStore = await cookies();
  const setCockieHeaders = result.headers.getSetCookie();

  if (setCockieHeaders) {
    const parsed = parseSetCookie(setCockieHeaders);

    for (const cookie of parsed) {
      cookiesStore.set(cookie.name, cookie.value, cookie.options);
    }
  }

  return { error: "", redirectTo: "/" };
};
