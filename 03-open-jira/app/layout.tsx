import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Providers from "./providers";
import { Box } from "@mui/material";
import { Navbar, SideBar } from "@/components/ui";
import { UIProvider } from "@/context/ui";
import { GlobalUIProvider } from "./GlobalUIProvider";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpenJira",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <GlobalUIProvider>
          <Providers>
            <main>
              <Box sx={{ flexFlow: 1 }}>
                <Navbar />
                <SideBar />

                <Box sx={{ padding: "10px 20px" }}>{children}</Box>
              </Box>
            </main>
          </Providers>
        </GlobalUIProvider>
      </body>
    </html>
  );
}
