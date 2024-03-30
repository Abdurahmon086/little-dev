import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
// export const metadata: Metadata = {
//   title: "Little-dev",
//   description: "Generated by create next app",
// };

export const metadata = {
  title: "Little-dev",
  description: "Generated by create next app",
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="fixed z-50 top-0 w-full h-auto bg-neutral-950">
          <Navbar />
        </header>
        <main className="h-full mb-12">{children}</main>
        <footer className="bg-neutral-950">
          <Footer />
        </footer>
        <SpeedInsights />
      </body>
    </html>
  );
}
