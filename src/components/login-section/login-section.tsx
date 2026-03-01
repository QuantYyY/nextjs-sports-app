"use client";

import { UserContext } from "@/app/providers/UserProvider";
import { use } from "react";
import { Link } from "../link/link";
import { LogoutButton } from "../logout-button/logout-button";

export const LoginSection = () => {
  const user = use(UserContext);

  return user ? (
    <>
      <div>Привет, {user.login}</div>
      <LogoutButton />
    </>
  ) : (
    <Link href="/login">Войти</Link>
  );
};
