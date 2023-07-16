import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Navbar } from "./components/Navbar";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next 13 cookie auth",
  description: "Created by Almir Toledo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <div className="flex justify-center mt-6">
          <div className="w-96 space-y-6">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
