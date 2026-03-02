"use client";

import { UserContext } from "@/app/providers/UserProvider";
import { BASE_API_URL } from "@/constants/service";
import { use, useTransition } from "react";

const handleLogout = async () => {
  await fetch(`${BASE_API_URL}/auth/logout`, {
    credentials: "include",
    method: "DELETE",
  });

  location.assign("/");
};

type Props = {};

export const LogoutButton = (props: Props) => {
  const user = use(UserContext);

  const [isPending, setTransition] = useTransition();

  if (!user) {
    return null;
  }

  return (
    <button onClick={() => setTransition(handleLogout)} disabled={isPending}>
      Выйти
    </button>
  );
};
