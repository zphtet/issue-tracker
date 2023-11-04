import "@radix-ui/themes/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container, Theme } from "@radix-ui/themes";
import Navbar from "./Navbar";
import { ThemePanel } from "@radix-ui/themes";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Issue Tracker App",
  description: "create issues and assign",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="light" accentColor="purple" radius="small">
          <Navbar />
          <Container className="w-[min(100%,1280px)] mx-auto p-5">
            {children}
          </Container>
        </Theme>
      </body>
    </html>
  );
}
