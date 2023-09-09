import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Box } from "@mui/material";
import { Navbar, SideBar } from "@/components/ui";

import Providers from "./providers";
import { EntriesProvider } from "@/context/entries";
import { UIProvider } from "@/context/ui";
import { AuthProvider } from "@/context/auth";
import CustomSessionProvider from "@/context/auth/CustomSessionProvider";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpenJira",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <CustomSessionProvider>

    <AuthProvider>
      <html lang="en">
        <body className={roboto.className}>
          <UIProvider>
            <EntriesProvider>
              <Providers>
                <main>
                  <Box sx={{ flexFlow: 1 }}>
                    <Navbar />
                    <SideBar />

                    <Box sx={{ padding: "10px 20px" }}>{children}</Box>
                  </Box>
                </main>
              </Providers>
            </EntriesProvider>
          </UIProvider>
        </body>
      </html>
    </AuthProvider>
    </CustomSessionProvider>
  );
}
