import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iflowsystems.co.in"),

  title:
    "iFlow Systems – Best Laptop Service Center in Chennai | OMR & ECR",

  description:
    "iFlow Systems — Chennai's trusted laptop service center since 2011. Expert repairs for all brands at OMR (Thoraipakkam) and ECR (Neelankarai). Free diagnosis. Free pickup. 4.9 stars, 139 reviews.",

  keywords: [
    "laptop service center Chennai",
    "laptop repair OMR Chennai",
    "laptop repair ECR Chennai",
    "laptop service center near me",
  ],

  authors: [{ name: "iFlow Systems" }],

  creator: "iFlow Systems",

  publisher: "iFlow Systems",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://iflowsystems.co.in",
  },

  openGraph: {
    title:
      "iFlow Systems – Best Laptop Service Center in Chennai | OMR & ECR",

    description:
      "Expert laptop repair for all brands at iFlow Systems OMR and ECR branches. Free diagnosis, free pickup and trusted service in Chennai.",

    url: "https://iflowsystems.co.in",

    siteName: "iFlow Systems",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "iFlow Systems Laptop Service Center Chennai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "iFlow Systems – Best Laptop Service Center in Chennai",

    description:
      "Expert laptop repair at OMR & ECR Chennai. Free diagnosis and free pickup.",

    images: ["/hero-bg.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Chatbot />
      </body>
    </html>
  );
}