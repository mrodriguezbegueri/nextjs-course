"use client";

import { UIProvider } from "@/context/ui";
import { FC, PropsWithChildren } from "react";

export const GlobalUIProvider: FC<PropsWithChildren> = ({ children }) => {
  return <UIProvider>{children}</UIProvider>;
};
