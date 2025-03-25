import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.scss";

const rubrik = Rubik({
  variable: "--font-rubrik",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "KeyFort Admin",
  description: "Keyfort OAuth2.0 Openid Authentication manager application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubrik.variable}`}>
        {children}
      </body>
    </html>
  );
}
