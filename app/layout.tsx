import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Opus Bespoke — Executive Brand & Digital Flagship Advisory",
  description:
    "Arsitektur merek berwibawa, pengembangan platform digital kelas atas, dan kalkulator simulasi proyek eksklusif.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#070B14] font-sans text-[#F4F1EA]">{children}</body>
    </html>
  );
}