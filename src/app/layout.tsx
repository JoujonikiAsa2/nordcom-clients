import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
   variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nordcom",
  description: "Nordcom Ecommerce - Your one-stop shop for all things tech",
  openGraph: {
    title: "Nordcom Ecommerce",
    description: "Nordcom Ecommerce - Your one-stop shop for all things tech",
    url: "https://nordcom-ecommerce.vercel.app",
    siteName: "Nordcom Ecommerce",
    images: [
      {
        url: "https://nordcom-ecommerce.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nordcom Ecommerce OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased`}
      >
        <Toaster richColors position="top-center" />
        {children}
      </body>
    </html>
  );
}
