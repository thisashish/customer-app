import { Poppins } from "next/font/google";
import "../css/global.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "200",
});

export const metadata = {
  title: "Medicare Application Sample 2",
  description: "Medicare Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-sky`}>{children}</body>
    </html>
  );
}
