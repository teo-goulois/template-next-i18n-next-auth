import deepmerge from "deepmerge";
import { NextIntlClientProvider } from "next-intl";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";

type Props = {
  locale: string;
};

async function getMessages(locale: string) {
  try {
    const userMessages = (await import(`./../../../messages/${locale}.json`))
      .default;
    const defaultMessages = (await import(`./../../../messages/en.json`))
      .default;
    const messages = deepmerge(defaultMessages, userMessages);

    return messages;
  } catch (error) {
    notFound();
  }
}

export const IntlClientProvider = async ({
  locale,
  children,
}: PropsWithChildren<Props>) => {
  const messages = await getMessages(locale);
  const now = headers().get("x-now");
  const timeZone = headers().get("x-time-zone") ?? "Europe/Vienna";

  return (
    <NextIntlClientProvider
      now={now ? new Date(now) : undefined}
      timeZone={timeZone}
      locale={locale}
      messages={messages}
      defaultTranslationValues={{
        globalString: "Global string",
        highlight: async (chunks) => {
          "use server";
          return <strong>{chunks}</strong>;
        },
      }}
      formats={{
        dateTime: {
          medium: {
            dateStyle: "medium",
            timeStyle: "short",
            hour12: false,
          },
        },
      }}>
      {children}
    </NextIntlClientProvider>
  );
};
