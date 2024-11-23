import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google"; // Import Inter if needed
import "./globals.css";
import Navbar from "./component/Navbar";
import Link from 'next/link';
import Footer from "./component/Footer";
import { WixClientContext, WixClientContextProvider } from "@/context/wixContext";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Define or import the inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FYP",
  description: "FYP",
};

// const Navbar = () => (
//   <nav>
//   <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64'>navbar</div>
//   </nav>
// );

// const Footer = () => (
//   <footer>
//     <p>footer</p>
//   </footer>
// );
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixClientContextProvider>
        <Navbar /> 
        {children}
         <Footer/>
         </WixClientContextProvider>
      </body>
    </html>
  );
}

