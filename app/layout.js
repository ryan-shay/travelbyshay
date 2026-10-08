import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Stars from "./stars";

const serif = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-serif",
  display: "swap",
});

const description =
  "Troy Shay, luxury travel concierge. Hotels, villas, yachts and private travel, handled personally.";

// The link preview image is app/opengraph-image.png (and twitter-image.png).
export const metadata = {
  metadataBase: new URL("https://troyshaytravel.com"),
  title: "Troy Shay — Luxury Travel Concierge",
  description,
  openGraph: {
    type: "website",
    siteName: "Troy Shay Travel",
    title: "Troy Shay — Luxury Travel Concierge",
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
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
