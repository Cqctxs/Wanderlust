import localFont from "next/font/local";
import Head from 'next/head';
import Script from 'next/script';
import "./globals.css";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import TanstackProvider from "./provider/tanstackProvider";

const offbit = localFont({
  src: "../../public/fonts/OffBit-DotBold.ttf",
  variable: "--font-offbit",
});

const product = localFont({
  src: [
    {
      path: "../../public/fonts/ProductSans.ttf",
      weight: "300",
    },
  ],
  variable: "--font-product",
});

export const metadata = {
  title: "Wanderlust",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* external stylesheets */}
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css' rel='stylesheet' />
        <Script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js" strategy="lazyOnload" />
      </head>
      <body className={`${offbit.variable} ${product.variable} font-sans`}>
        <UserProvider>
          <TanstackProvider>{children}</TanstackProvider>
        </UserProvider>
      </body>
    </html>
  );
}
