import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youfolio",
  description: "Sebastian's Personal Website",
  icons: {
    icon: [
      { url: "/youfolio-bright-icon.png", media: "(prefers-color-scheme: light)" },
      { url: "/youfolio-dark-icon.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <title>Youfolio</title>
      <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.4.0/uicons-bold-rounded/css/uicons-bold-rounded.css'/>
      <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.4.0/uicons-bold-straight/css/uicons-bold-straight.css'/>
      <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.4.0/uicons-solid-straight/css/uicons-solid-straight.css'/>
      <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.4.0/uicons-regular-straight/css/uicons-regular-straight.css'/>
      <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.4.0/uicons-regular-rounded/css/uicons-regular-rounded.css'/>
      <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.4.0/uicons-thin-straight/css/uicons-thin-straight.css'/>
      <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.4.0/uicons-thin-rounded/css/uicons-thin-rounded.css'/>
      <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.4.0/uicons-brands/css/uicons-brands.css'/>
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
