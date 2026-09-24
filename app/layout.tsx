import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Super X AI",
  description:
    "Autonomous logistics and Level 4 autonomous driving solutions for industrial operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}