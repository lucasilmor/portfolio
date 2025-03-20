import Navbar from "./components/Navbar";
import "./globals.css";

const RootLayout = ({ children }) => (
  <html lang="pt">
    <body>
      <Navbar />
      {children}
    </body>
  </html>
);

export default RootLayout;