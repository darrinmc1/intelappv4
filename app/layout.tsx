// app/layout.tsx
import type React from "react"
import "./globals.css"
import "./button-animations.css"

import { Inter } from "next/font/google"
import { EnvWarningSuppressor } from "@/components/env-warning-suppressor"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { MobileViewWrapper } from "@/components/mobile-view-wrapper"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "The Intel Analyst Academy",
  description: "Learn intelligence analysis techniques and methodologies",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <EnvWarningSuppressor /> */}
        <Header />
        <main className="flex-grow">
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </main>
        <Footer />
        <ScrollToTop />
        <MobileViewWrapper />
        <Toaster />
      </body>
    </html>
  )
}