import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "chen-hatti-f810-personal-site",
  description: "Academic personal site"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
