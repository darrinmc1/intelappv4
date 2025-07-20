"use client"

import { useState } from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"

export default function RequestTopic() {
  const [formData, setFormData] = useState({
    topic: "",
    category: "",
    description: "",
    experienceLevel: "",
    email: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.topic || !formData.description) {
      toast({
        title: "Missing information",
        description: "Please provide a topic title and description.",
        variant: "destructive",
      })
      return
    }
    
    setIsLoading(true)
    
    try {
      const response = await fetch("/api/request-topic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setIsSubmitted(true)
        // Reset form
        setFormData({
          topic: "",
          category: "",
          description: "",
          experienceLevel: "",
          email: "",
        })
      } else {
        throw new Error(data.error || "Something went wrong")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/request-topic" isCurrentPage>
              Request a Topic
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Request a New Training Topic</h1>
          <p className="text-muted-foreground">
            Don&apos;t see what you&apos;re looking for? Let us know what topics you&apos;d like us to cover next.
          </p>
        </div>

        {isSubmitted ? (
          <Alert className="bg-green-50 border-green-200 mb-6">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <AlertTitle className="text-green-800">Request Submitted Successfully!</AlertTitle>
            <AlertDescription className="text-green-700">
              Thank you for your topic suggestion. We'll review your request and consider it for future content.
              {formData.email && " We'll notify you when this topic becomes available."}
            </AlertDescription>
            <Button 
              className="mt-4" 
              variant="outline" 
              onClick={() => setIsSubmitted(false)}
            >
              Submit Another Request
            </Button>
          </Alert>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Topic Request Form</CardTitle>
              <CardDescription>
                Please provide as much detail as possible to help us understand your needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="topic">Topic Title</Label>
                  <Input 
                    id="topic" 
                    placeholder="e.g., Advanced Social Media Intelligence Techniques" 
                    value={formData.topic}
                    onChange={handleChange}
                    disabled={isLoading}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(value) => handleSelectChange("category", value)}
                    disabled={isLoading}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="foundations">Foundations of Intelligence</SelectItem>
                      <SelectItem value="osint">OSINT</SelectItem>
                      <SelectItem value="analysts-notebook">Analyst&apos;s Notebook</SelectItem>
                      <SelectItem value="analytical-techniques">Analytical Techniques</SelectItem>
                      <SelectItem value="data-collection">Data Collection</SelectItem>
                      <SelectItem value="excel">Excel for Analysts</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Please describe what you'd like to learn about this topic and why it would be valuable."
                    rows={5}
                    value={formData.description}
                    onChange={handleChange}
                    disabled={isLoading}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experienceLevel">Your Experience Level</Label>
                  <Select 
                    value={formData.experienceLevel} 
                    onValueChange={(value) => handleSelectChange("experienceLevel", value)}
                    disabled={isLoading}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email (optional)</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  <p className="text-sm text-muted-foreground">
                    We&apos;ll only use this to notify you when your requested topic is available.
                  </p>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
