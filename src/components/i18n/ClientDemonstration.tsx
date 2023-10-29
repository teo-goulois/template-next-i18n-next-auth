"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export const ClientDemonstration = () => {
  const t = useTranslations("ClientDemonstration");
  const f = useTranslations("fallbackDemonstration");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h1>{t("title")}</h1>
      <p className=""> {t("description")} </p>
      <button onClick={handleClick}>{count} +</button>
      <p> fallback: {f("title")} </p>
    </div>
  );
};
