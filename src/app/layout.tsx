import type { Metadata, Viewport } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { ChatWidget } from "@/components/chat/chat-widget";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaishnavi Bhalodi — Software Engineer & Data Scientist",
  description:
    "Portfolio of Vaishnavi Bhalodi — software engineer and data scientist at ASU, building full-stack systems and production ML.",
  openGraph: {
    title: "Vaishnavi Bhalodi — Software Engineer & Data Scientist",
    description:
      "Portfolio of Vaishnavi Bhalodi — software engineer and data scientist at ASU, building full-stack systems and production ML.",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <SmoothScroll>
          {children}
          <ChatWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}
