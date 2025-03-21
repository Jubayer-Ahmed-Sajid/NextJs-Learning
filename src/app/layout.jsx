import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import NextSessionProvider from "@/providers/NextSessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Learning NextJs",
    template: "%s | Learning NextJs",
  },
  description: "All the Data are from json placeholder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextSessionProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar></Navbar>
          {children}
        </body>
      </NextSessionProvider>
    </html>
  );
}
