import type { Metadata } from "next";
import { Container } from "../components/layout/container";
import { Footer } from "../components/layout/footer";
import { Header } from "../components/layout/header";
import { ThemeProvider } from "../components/layout/theme-provider";
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col bg-academic-bg-subtle text-academic-text dark:bg-academic-dark-bg dark:text-academic-dark-text">
            <Header />
            <div className="flex-1">
              <Container>{children}</Container>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
