import { Metadata } from "next"; // Add this line
import { Inter } from "next/font/google";
import "./globals.css";
import RootLayoutClient from './RootLayoutClient';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deepak Suyal",
  description: "Deepak Suyal is a Full Stack Web Developer from India showcasing his portfolio and projects on this personal website.",
  keywords: ["Deepak Suyal", "Indian web developer", "full stack developer", "Laravel", "Next.js", "TailwindCSS", "Bootstrap", "Figma", "web developer portfolio"],
  authors: [{ name: "Deepak Suyal", url: "https://deepaksuyal.vercel.app" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Deepak Suyal",
    description: "Deepak Suyal is a Full Stack Web Developer from India showcasing his portfolio and projects on this personal website.",
    images: [{ url: "/assets/meta.png" }],
    url: "https://deepaksuyal.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Suyal",
    description: "Deepak Suyal is a Full Stack Web Developer from Indonesia showcasing his portfolio and projects on this personal website.",
    images: ["/assets/meta.png"],
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
      <link rel="icon" href="/d.png" type="image/png" />
      <body className={inter.className}>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}

