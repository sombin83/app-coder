import "./globals.css";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import { CartProvider } from "./components/context/CardContext";
import { AuthProvider } from "./components/context/AuthContext";


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
