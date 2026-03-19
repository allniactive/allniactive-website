import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ALLNI ACTIVE | Activewear Manufacturer for Growing Brands",
  description:
    "ALLNI ACTIVE helps activewear brands create best-selling yoga wear, gym wear, and swimwear with OEM and ODM manufacturing support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
