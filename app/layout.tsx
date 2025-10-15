import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import { BusinessProfileHeader } from "@/components/business-profile-header";
import AOSInit from "@/components/aos-init";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DimberTech - Transform Your Business",
  description:
    "Revolutionary technology solutions that drive growth and innovation",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/images/dimderTech_favicon.png"
          type="image/x-icon"
        />
      </head>
      <body className={inter.className}>
        <AOSInit />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <BusinessProfileHeader />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
