"use client";

import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const t = useTranslations("Dashboard");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")} </p>

      <button onClick={() => signOut({
        callbackUrl: `/`
      })}>{t("logout")}</button>
    </div>
  );
}
