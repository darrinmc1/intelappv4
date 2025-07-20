"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen, ChevronRight } from "lucide-react"

interface LearningPathListItemProps {
  title: string
  description: string
  humorousQuote?: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  topics: number | string[]
  estimatedTime: string
  href: string
}

export function LearningPathListItem({
  title,
  description,
  humorousQuote,
  difficulty,
  topics,
  estimatedTime,
  href,
}: LearningPathListItemProps) {
  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800 border-green-200",
    Intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Advanced: "bg-red-100 text-red-800 border-red-200",
  }

  // Format topics for display
  const topicsDisplay = Array.isArray(topics) ? topics.join(", ") : `${topics} topics`

  return (
    <Link 
      href={href}
      className="block border rounded-lg p-4 pl-6 hover:bg-gray-50 transition-all mb-4 shadow-sm hover:shadow-md group relative overflow-hidden"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-100 group-hover:bg-blue-500 transition-colors"></div>
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">{title}</h3>
            <Badge className={`${difficultyColors[difficulty]} border font-medium`}>{difficulty}</Badge>
          </div>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
          {humorousQuote && <p className="text-gray-500 text-sm italic mb-3 bg-gray-50 p-2 rounded-md border-l-4 border-blue-300">"{humorousQuote}"</p>}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
              <BookOpen className="h-4 w-4 text-blue-500" />
              <span>{Array.isArray(topics) ? topics.length : topics} topics</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
              <Clock className="h-4 w-4 text-blue-500" />
              <span>{estimatedTime}</span>
            </div>
          </div>
        </div>
        
        <div className="hidden md:block w-1/3 bg-blue-50 p-4 rounded-md border border-blue-100">
          <div className="text-sm font-medium text-blue-700 mb-2 flex items-center">
            <BookOpen className="h-4 w-4 mr-1" /> Topics included:
          </div>
          <ul className="text-sm text-gray-700 space-y-1.5">
            {Array.isArray(topics) ? (
              topics.slice(0, 5).map((topic, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                  <span className="line-clamp-1">{topic}</span>
                </li>
              ))
            ) : (
              <li className="text-gray-400 italic">Topics information not available</li>
            )}
            {Array.isArray(topics) && topics.length > 5 && (
              <li className="text-blue-600 text-xs mt-1 font-medium">+ {topics.length - 5} more topics</li>
            )}
          </ul>
        </div>
        
        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
          <ChevronRight className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors" />
        </div>
      </div>
    </Link>
  )
}