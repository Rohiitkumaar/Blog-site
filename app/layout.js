import { Inter } from "next/font/google";
import "./globals.css";
import Layout from '../components/Layout';

export const metadata = {
  title: "My Modern Blog",
  description: "Explore the latest articles on various topics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

