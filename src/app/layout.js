import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/template/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const Metadata = {
  title: "React-Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navbar />
        <div className="mx-4 md:container md:mx-auto">{children}</div>
      </body>
    </html>
  );
}
