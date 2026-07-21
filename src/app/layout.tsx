import "./globals.css";
import { Inter, Geist_Mono } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/navbar";
import { NavbarProvider } from "./context/navbar-context";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-cyber-main",
});

export const metadata = {
  title: "Cyber@UCR Website",
  description:
    "UC Riverside's Cybersecurity Club. Dedicated to advancing computer security knowledge through competition and experimentation. We go by the name, Cyber@UCR!",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body className={inter.className}>
        <NavbarProvider>
          <ReactQueryClientProvider>
            <Navbar />
            {children}
            <Footer />
          </ReactQueryClientProvider>
        </NavbarProvider>
      </body>
    </html>
  );
}
