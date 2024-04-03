import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Little-dev",
  description:
    "I am a motivated and ambitious full-stack developer with a strong educational background in Robotics and Mechatronics from TATU. Throughout my studies, I have gained a solid foundation in programming languages such as Node.js, TypeScript, and GraphQL. I am also proficient in front-end development using React.js.",
  openGraph: {
    title: "Little-dev",
    description:
      "I am a motivated and ambitious full-stack developer with a strong educational background in Robotics and Mechatronics from TATU. Throughout my studies, I have gained a solid foundation in programming languages such as Node.js, TypeScript, and GraphQL. I am also proficient in front-end development using React.js.",
    url: "https://little-dev-abdurahmons-projects.vercel.app/",
    siteName: "Little-dev",
    images: [
      {
        url: "https://nextjs.org/og.webp",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.webp",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
    phoneNumbers: "+998930499591",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["1937ali047@gmail.com", "https://t.me/Alibaba0086"],
    },
  },
  category: "Next.js",
  generator: "Next.js",
  applicationName: "Little-dev",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "Vue", "Nuxt.js", "Node.js", "Postgresql", "React", "JavaScript", "Nest.js", "TypeScript", "Blog"],
  authors: [{ name: "Abdurahmon" }, { name: "Abdurahmon", url: "https://github.com/Abdurahmon086" }],
  creator: "Turdaliyev Abdurahmon",
  publisher: "Turdaliyev Abdurahmon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
        <header className="fixed z-50 top-0 w-full h-auto ">
          <Navbar />
        </header>
        <main className="h-full mb-12">{children}</main>
        <footer className="bg-neutral-950">
          <Footer />
        </footer>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
