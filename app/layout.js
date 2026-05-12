import "./globals.css";
import Nav from "./nav";

export const metadata = {
  title: "Shay",
  description: "Luxury Travel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
