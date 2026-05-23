import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GRABME E-Taxi | Electric Mobility Platform",
  description:
    "Lebanon's next generation electric mobility platform for smart rides, premium transportation, corporate mobility, and secure payments.",
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