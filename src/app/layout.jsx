import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./utils/navbar";
import Footer from "./utils/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "calon teknik sipil",
  description: "calon teknik sipil website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
        </body>
    </html>
  );
}
