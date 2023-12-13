import "./globals.css";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";



export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>     
        <Header />        
        {children}  
        <Footer />
      </body>
    </html>
  )
}
