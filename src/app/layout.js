import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Be my Valentine",
  description: "Designed by Benson Ibeabuchi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-background bg-cover" >
          {children}
        </div>
        </body>
    </html>
  );
}

