import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const heading = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading-family",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body-family",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pablo Urbina — CS Engineer & Developer",
  description:
    "CS engineering student working on full-stack and cloud-integrated projects, learning Godot on the side.",
  openGraph: {
    title: "Pablo Urbina — CS Engineer & Developer",
    description:
      "CS engineering student working on full-stack and cloud-integrated projects, learning Godot on the side.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
