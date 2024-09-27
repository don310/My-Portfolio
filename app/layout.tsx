// rootlayout.tsx (tanpa "use client")
import { Inter } from "next/font/google";
import "./globals.css";
import RootLayoutClient from './RootLayoutClient';

const inter = Inter({ subsets: ["latin"] });

<<<<<<< HEAD
export const metadata: Metadata = {
  title: "Deepak Suyal",
  description: "Deepak Suyal is a Full Stack Web Developer from India showcasing his portfolio and projects on this personal website.",
  keywords: ["Deepak Suyal", "Indian web developer", "full stack developer", "Laravel", "Next.js", "TailwindCSS", "Bootstrap", "Figma", "web developer portfolio"],
  authors: [{ name: "Deepak Suyal'", url: "https://deepaksuyal.vercel.app" }],
=======
export const metadata = {
  title: "Ammar | Personal Website",
  description: "Ahmad 'Ammar Musyaffa' adalah seorang Full Stack Web Developer dari Indonesia yang memamerkan portofolio dan proyeknya di website pribadi ini.",
  keywords: [
    "Ahmad Ammar Musyaffa",
    "web developer Indonesia",
    "full stack developer",
    "Laravel",
    "Next.js",
    "TailwindCSS",
    "Bootstrap",
    "Figma",
    "portofolio web developer",
  ],
  authors: [{ name: "Ahmad 'Ammar Musyaffa'", url: "https://ahmadammar.vercel.app" }],
>>>>>>> 71a8f4a08b431c59e833ebe2111ca66341d87215
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Deepak Suyal",
    description: "Deepak Suyal is a Full Stack Web Developer from India showcasing his portfolio and projects on this personal website.",
    images: [{ url: "/assets/metadata.png" }],
    url: "https://deepaksuyal.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Suyal",
    description: "Deepak Suyal is a Full Stack Web Developer from Indonesia showcasing his portfolio and projects on this personal website.",
    images: ["/assets/metadata.png"],
  },
  icons: {
    icon: "/d.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <link rel="icon" href="/d.png" type="image/png" />
=======
>>>>>>> 71a8f4a08b431c59e833ebe2111ca66341d87215
      <body className={inter.className}>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}

