import "./globals.css";
import Navbars from "./components/Navbars/Navbars";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "Azmov Shoping",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={'contaner'}>
        <Navbars />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
