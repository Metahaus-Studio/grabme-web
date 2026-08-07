import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GRABME | Electric Mobility, Connected",
    template: "%s | GRABME",
  },
  description:
    "GRABME is an EV-only mobility ecosystem connecting passengers, drivers, businesses, operations, and connected in-car experiences.",
  metadataBase: new URL("https://grabmeapp.com"),
  openGraph: {
    title: "GRABME | Electric Mobility, Connected",
    description:
      "Ride. Drive. Operate. Connect. One connected electric mobility ecosystem.",
    url: "https://grabmeapp.com",
    siteName: "GRABME",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
