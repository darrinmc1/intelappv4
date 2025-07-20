"use client";

import { Suspense } from "react"
import dynamic from "next/dynamic"

// Use dynamic imports with SSR disabled for problematic components
const HeroSection = dynamic(() => import("@/components/hero-section").then(mod => mod.HeroSection), { ssr: true })
const IntelligenceTypesShowcase = dynamic(() => import("@/components/intelligence-types-showcase").then(mod => mod.IntelligenceTypesShowcase), { ssr: false })
const LearningPathsSection = dynamic(() => import("@/components/learning-paths-section").then(mod => mod.LearningPathsSection), { ssr: false })
const NewsletterSignup = dynamic(() => import("@/components/newsletter-signup").then(mod => mod.NewsletterSignup), { ssr: false })
const LazySection = dynamic(() => import("@/components/optimized/lazy-section").then(mod => mod.LazySection), { ssr: true })
const PerformanceMonitor = dynamic(() => import("@/components/optimized/performance-monitor").then(mod => mod.PerformanceMonitor), { ssr: false })

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