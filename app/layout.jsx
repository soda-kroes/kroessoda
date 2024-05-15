import { Inter, Outfit } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";




export const metadata = {
  title: "KROES-SODA",
  description: "KROES-SODA PORTFOLIO",
};
const outfit = Outfit({subsets: ['latin']});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={outfit.className}>
       <ThemeProvider attribute= 'class' defaultTheme = 'light' >
         <Header />
          {children}
          <Footer />
       </ThemeProvider>
      </body>
    </html>
  );
}
