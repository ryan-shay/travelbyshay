import "./globals.css";
import ThemeNav from "./theme-nav";

export const metadata = {
  title: "Troy Shay",
  description: "Travel, Yachts, PJs, Security",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeNav />
        {children}
      </body>
    </html>
  );
}
