import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "@/components/nav/top-nav";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lift Logs",
  description: "Track your progress and personal bests.",
};

<meta
  name="viewport"
  content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
></meta>;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <ClerkProvider>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TopNav />
            {children}
            <Toaster position="top-center" duration={2000} />
            <Analytics />
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
