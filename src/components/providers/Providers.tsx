"use client";

import { PropsWithChildren } from "react";
import NextAuthProvider from "./NextAuthProvider";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NextAuthProvider>{children}</NextAuthProvider>
    </>
  );
};
