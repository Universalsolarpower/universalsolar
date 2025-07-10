import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Universal Solar Power Solution | Solar Energy Solutions",
  description: "Universal Solar System provides innovative solar energy solutions for homes, businesses, and industries. Harness the power of the sun today!",
  keywords: "solar energy, solar power, renewable energy, solar panels, sustainable energy solutions",
  authors: [{ name: "Universal Solar System Team", url: "https://universalsolar-omega.vercel.app/" }],
  openGraph: {
    title: "Universal Solar Power Solution | Powering a Sustainable Future",
    description: "Discover our cutting-edge solar energy solutions. Reduce your carbon footprint and save on energy costs.",
    url: "https://universalsolar-omega.vercel.app/",
    siteName: "Universal Solar Power Solution",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Universal Solar Power Solution - Solar Energy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@UniversalSolar",
    title: "Universal Solar Power Solution",
    description: "Reliable and affordable solar energy solutions for everyone.",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://universalsolar-omega.vercel.app/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-dU3fw3Zh6eB7hRk71BQvIccMrgUzDn/69HGDqyycAal3fI+Wv3PG/VAMCPfV37CCHvHsmPIjK47CdMRpyvlflQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Meta */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0d6efd" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect to fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
