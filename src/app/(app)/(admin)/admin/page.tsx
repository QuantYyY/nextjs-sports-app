"use client";

import { UserContext } from "@/app/providers/UserProvider";
import { redirect } from "next/navigation";
import { use } from "react";

const Page = () => {
  const user = use(UserContext);

  if (!user?.isAdmin) {
    redirect("/403");
  }

  return <></>;
};

export default Page;
