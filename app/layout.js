import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Exoplanet Habitability Prediction",
  description:
    "Exoplanet Habitability Prediction with Recurrent Neural Networks and K-Nearest Neighbors",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-950">
        <Navbar />
        <main className="text-gray-100">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
