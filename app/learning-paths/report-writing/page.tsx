import Link from "next/link"
import { ChevronRight, FileText, ClipboardList, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { StaticImage } from "@/components/static-image"
import { PathWhatsNext } from "@/components/path-whats-next"

export default function ReportWritingPath() {
  return (
    <div className="container mx-auto px-4 py-8">
      

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-yellow-500 p-3 rounded-full shadow-lg hidden md:flex">
            <FileText className="h-10 w-10 text-gray-800" strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Intelligence Report Writing</h1>
            <p className="text-muted-foreground mt-2">
              Master the art of creating clear, concise, and effective intelligence reports
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full mb-8 rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-800 p-8 relative" style={{minHeight: "200px"}}>
            <div className="flex items-center gap-6 h-full">
              <div className="bg-yellow-500 p-4 rounded-full shadow-lg flex-shrink-0">
                <FileText className="h-12 w-12 text-gray-800" strokeWidth={1.5} />
              </div>
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-2">Report Writing Skills</h2>
                <p className="max-w-md">
                  Learn how to structure, write, and present intelligence reports for maximum impact and clarity
                </p>
              </div>
            </div>
          </div>
          <div className="relative" style={{minHeight: "200px"}}>
            <StaticImage
              src="/report-writing-banner-large.png"
              alt="Report Writing Banner"
              className="object-cover w-full h-full absolute inset-0"
            />
          </div>
        </div>
      </div>

      {/* Content sections */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="aspect-video relative">
              <StaticImage
                src="/report-writing-banner-large.png"
                alt="Intelligence Report Fundamentals"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">Intelligence Report Fundamentals</h3>
              <p className="text-muted-foreground mb-2 text-justify">
                Learn the core principles of effective intelligence reporting
              </p>
              <p className="text-sm text-muted-foreground mb-4">20 min read</p>
              <Button
                asChild
                className="w-full bg-black text-white transition-all duration-300 
                          hover:bg-yellow-500 hover:scale-105 hover:shadow-md 
                          active:bg-yellow-600 active:scale-95 active:shadow-inner active:translate-y-0.5"
              >
                <Link href="/topics/intelligence-report-fundamentals" className="flex items-center justify-center">
                  Start Learning <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="aspect-video relative">
              <StaticImage src="/executive-summaries.png" alt="Executive Summaries" className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">Writing Executive Summaries</h3>
              <p className="text-muted-foreground mb-2 text-justify">
                Master the art of creating concise and impactful executive summaries
              </p>
              <p className="text-sm text-muted-foreground mb-4">15 min read</p>
              <Button
                asChild
                className="w-full bg-black text-white transition-all duration-300 
                          hover:bg-yellow-500 hover:scale-105 hover:shadow-md 
                          active:bg-yellow-600 active:scale-95 active:shadow-inner active:translate-y-0.5"
              >
                <Link href="/topics/executive-summaries" className="flex items-center justify-center">
                  Start Learning <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="aspect-video relative">
              <StaticImage
                src="/verbal-briefing-techniques.png"
                alt="Verbal Briefing Techniques"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">Verbal Briefing Techniques</h3>
              <p className="text-muted-foreground mb-2 text-justify">
                Learn how to effectively present intelligence findings verbally
              </p>
              <p className="text-sm text-muted-foreground mb-4">25 min read</p>
              <Button
                asChild
                className="w-full bg-black text-white transition-all duration-300 
                          hover:bg-yellow-500 hover:scale-105 hover:shadow-md 
                          active:bg-yellow-600 active:scale-95 active:shadow-inner active:translate-y-0.5"
              >
                <Link href="/topics/verbal-briefing-techniques" className="flex items-center justify-center">
                  Start Learning <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">All Topics</h2>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Introduction to Intelligence Reporting</CardTitle>
            <CardDescription>Understanding how to create effective intelligence reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/intelligence-report-fundamentals-thumb.png"
                      alt="Intelligence Report Fundamentals"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1 pr-4">
                    <h3 className="font-medium line-clamp-2 text-sm md:text-base">What Makes a Good Intelligence Report?</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">15 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm" className="flex-shrink-0">
                  <Link href="/topics/good-intelligence-report" className="flex items-center whitespace-nowrap">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/intelligence-report-components-thumb.png"
                      alt="Intelligence Report Components"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1 pr-4">
                    <h3 className="font-medium line-clamp-2 text-sm md:text-base">Components of a Basic Intelligence Report</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">15 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm" className="flex-shrink-0">
                  <Link href="/topics/intelligence-report-components" className="flex items-center whitespace-nowrap">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/intelligence-report-types-thumb.png"
                      alt="Intelligence Report Types"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1 pr-4">
                    <h3 className="font-medium line-clamp-2 text-sm md:text-base">Difference Between Strategic, Operational, and Tactical Reports</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">20 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm" className="flex-shrink-0">
                  <Link href="/topics/intelligence-report-types" className="flex items-center whitespace-nowrap">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/evidence-based-conclusions-thumb.png"
                      alt="Evidence-Based Conclusions"
                      className="object-cover"
                    />
                  </div>
                  <div className="max-w-[calc(100%-80px)]">
                    <h3 className="font-medium line-clamp-2">Importance of Evidence-Based Conclusions</h3>
                    <p className="text-sm text-muted-foreground">15 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/evidence-based-conclusions" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Report Structure and Organization</CardTitle>
            <CardDescription>Learn how to structure and organize effective intelligence reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/executive-summaries-thumb.png"
                      alt="Executive Summary Mastery"
                      className="object-cover"
                    />
                  </div>
                  <div className="max-w-[calc(100%-80px)]">
                    <h3 className="font-medium line-clamp-2">Executive Summary Mastery</h3>
                    <p className="text-sm text-muted-foreground">25 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/executive-summaries-mastery" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/structuring-intelligence-reports-thumb.png"
                      alt="Main Body Organization"
                      className="object-cover"
                    />
                  </div>
                  <div className="max-w-[calc(100%-80px)]">
                    <h3 className="font-medium line-clamp-2">Main Body Organization</h3>
                    <p className="text-sm text-muted-foreground">20 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/main-body-organization" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/confidence-levels-thumb.png"
                      alt="Conclusion Development"
                      className="object-cover"
                    />
                  </div>
                  <div className="max-w-[calc(100%-80px)]">
                    <h3 className="font-medium line-clamp-2">Conclusion Development</h3>
                    <p className="text-sm text-muted-foreground">20 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/conclusion-development" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/report-writing-pitfalls-thumb.png"
                      alt="Recommendation Framework"
                      className="object-cover"
                    />
                  </div>
                  <div className="max-w-[calc(100%-80px)]">
                    <h3 className="font-medium line-clamp-2">Recommendation Framework</h3>
                    <p className="text-sm text-muted-foreground">25 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/recommendation-framework" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Writing Techniques for Intelligence Reports</CardTitle>
            <CardDescription>
              Master specialized writing techniques for effective intelligence communication
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/intelligence-storytelling-thumb.png"
                      alt="Clear Writing Principles"
                      className="object-cover"
                    />
                  </div>
                  <div className="max-w-[calc(100%-80px)]">
                    <h3 className="font-medium line-clamp-2">Clear Writing Principles</h3>
                    <p className="text-sm text-muted-foreground">15 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/clear-writing-principles" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage src="/visual-aids-thumb.png" alt="Data Presentation" className="object-cover" />
                  </div>
                  <div className="max-w-[calc(100%-80px)]">
                    <h3 className="font-medium line-clamp-2">Data Presentation</h3>
                    <p className="text-sm text-muted-foreground">25 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/data-presentation" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/estimative-language-thumb.png"
                      alt="Estimative Language"
                      className="object-cover"
                    />
                  </div>
                  <div className="max-w-[calc(100%-80px)]">
                    <h3 className="font-medium line-clamp-2">Estimative Language</h3>
                    <p className="text-sm text-muted-foreground">30 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/estimative-language" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Intelligence Report Types</CardTitle>
            <CardDescription>
              Explore different types of intelligence reports and their specific requirements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/strategic-reports-thumb.png"
                      alt="Strategic Reports"
                      className="object-cover"
                    />
                  </div>
                  <div className="max-w-[calc(100%-80px)]">
                    <h3 className="font-medium line-clamp-2">Strategic Reports</h3>
                    <p className="text-sm text-muted-foreground">35 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/strategic-reports" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/operational-reports-thumb.png"
                      alt="Operational Reports"
                      className="object-cover"
                    />
                  </div>
                  <div className="max-w-[calc(100%-80px)]">
                    <h3 className="font-medium line-clamp-2">Operational Reports</h3>
                    <p className="text-sm text-muted-foreground">25 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/operational-reports" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/tactical-reports-thumb.png"
                      alt="Tactical Reports"
                      className="object-cover"
                    />
                  </div>
                  <div className="max-w-[calc(100%-80px)]">
                    <h3 className="font-medium line-clamp-2">Tactical Reports</h3>
                    <p className="text-sm text-muted-foreground">30 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/tactical-reports" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/specialized-intelligence-products-thumb.png"
                      alt="Specialized Intelligence Products"
                      className="object-cover"
                    />
                  </div>
                  <div className="max-w-[calc(100%-80px)]">
                    <h3 className="font-medium line-clamp-2">Specialized Intelligence Products</h3>
                    <p className="text-sm text-muted-foreground">25 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/specialized-intelligence-products" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Advanced Reporting Techniques</CardTitle>
            <CardDescription>Take your intelligence reporting skills to the next level</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/multi-source-integration-thumb.png"
                      alt="Multi-Source Integration"
                      className="object-cover"
                    />
                  </div>
                  <div className="max-w-[calc(100%-80px)]">
                    <h3 className="font-medium line-clamp-2">Multi-Source Integration</h3>
                    <p className="text-sm text-muted-foreground">30 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/multi-source-integration" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/visual-intelligence-reporting-thumb.png"
                      alt="Visual Intelligence Reporting"
                      className="object-cover"
                    />
                  </div>
                  <div className="max-w-[calc(100%-80px)]">
                    <h3 className="font-medium line-clamp-2">Visual Intelligence Reporting</h3>
                    <p className="text-sm text-muted-foreground">35 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/visual-intelligence-reporting" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/digital-evidence-documentation-thumb.png"
                      alt="Digital Evidence Documentation"
                      className="object-cover"
                    />
                  </div>
                  <div className="max-w-[calc(100%-80px)]">
                    <h3 className="font-medium line-clamp-2">Digital Evidence Documentation</h3>
                    <p className="text-sm text-muted-foreground">25 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/digital-evidence-documentation" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* What's Next section - placed between topic list and footer */}
      <PathWhatsNext pathSlug="report-writing" />
    </div>
  )
}
