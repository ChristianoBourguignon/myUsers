import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "App My-Users",
  description: "Sendo desenvolvido por Christiano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-Br">
       <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>{children}</body>
      
    </html>
  );
}
