import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Stars from "./stars";

const serif = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: "Troy Shay — Luxury Travel Concierge",
  description:
    "Troy Shay, luxury travel concierge. Hotels, villas, yachts and private travel, handled personally.",
};

export const viewport = {
  themeColor: "#07070a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={serif.variable}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        <Stars />
        {children}
      </body>
    </html>
  );
}
