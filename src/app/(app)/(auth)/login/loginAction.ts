"use server";

import { BASE_API_URL } from "@/constants/service";
import { parseSetCookie } from "@/helpers/parse-set-cookie";
import { cookies } from "next/headers";

export const loginAction = async (state, formData: FormData) => {
  const login = formData.get("login")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  const result = await fetch(`${BASE_API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify({ login, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (result.status !== 200) {
    return { error: "Неправильный логин или пароль", redirectTo: undefined };
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
