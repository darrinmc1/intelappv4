"use client";

import { Suspense } from "react"
import dynamic from "next/dynamic"

// Use dynamic imports with SSR disabled for problematic components
const HeroSection = dynamic(() => import("@/components/hero-section"), { ssr: true })
const IntelligenceTypesShowcase = dynamic(() => import("@/components/intelligence-types-showcase"), { ssr: false })
const LearningPathsSection = dynamic(() => import("@/components/learning-paths-section"), { ssr: false })
const NewsletterSignup = dynamic(() => import("@/components/newsletter-signup"), { ssr: false })
const LazySection = dynamic(() => import("@/components/optimized/lazy-section"), { ssr: true })
const PerformanceMonitor = dynamic(() => import("@/components/optimized/performance-monitor"), { ssr: false })

export default function HomePage() {
  return (
    <>
      <PerformanceMonitor />

      {/* Hero section - load immediately */}
      <HeroSection />

      {/* Intelligence types - lazy load */}
      <LazySection>
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
          <IntelligenceTypesShowcase />
        </Suspense>
      </LazySection>

      {/* Learning paths - lazy load */}
      <LazySection>
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
          <LearningPathsSection />
        </Suspense>
      </LazySection>

      {/* Newsletter - lazy load */}
      <LazySection>
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
          <NewsletterSignup />
        </Suspense>
      </LazySection>
    </>
  )
}