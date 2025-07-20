"use client";

import { Suspense } from "react"
import dynamic from "next/dynamic"

// Use dynamic imports with SSR disabled for problematic components
const HeroSection = dynamic(() => import("@/components/hero-section").then((mod) => mod.HeroSection), { ssr: true })
const IntelligenceTypesShowcase = dynamic(
  () => import("@/components/intelligence-types-showcase").then((mod) => mod.IntelligenceTypesShowcase),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: false,
  },
)
const LearningPathsSection = dynamic(
  () => import("@/components/learning-paths-section").then((mod) => mod.LearningPathsSection),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: false,
  },
)
const NewsletterSignup = dynamic(
  () => import("@/components/newsletter-signup").then((mod) => mod.NewsletterSignup),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: false,
  },
)
const PerformanceMonitor = dynamic(
  () => import("@/components/optimized/performance-monitor").then((mod) => mod.PerformanceMonitor),
  { ssr: false },
)

export default function HomePage() {
  return (
    <>
      <PerformanceMonitor />

      {/* Hero section - load immediately */}
      <HeroSection />

      {/* Intelligence types - lazy load */}
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <IntelligenceTypesShowcase />
      </Suspense>

      {/* Learning paths - lazy load */}
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <LearningPathsSection />
      </Suspense>

      {/* Newsletter - lazy load */}
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <NewsletterSignup />
      </Suspense>
    </>
  )
}
