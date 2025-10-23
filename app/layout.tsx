import type { Metadata } from "next";
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import { Providers } from "@/components/provider";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aura Market - Farcaster Edition",
  description: "Earn your aura. Social + DeFi for Gen Z.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}