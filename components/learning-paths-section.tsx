"use client";

import { useState } from "react";
import Link from "next/link";
import { LearningPathCard } from "@/components/learning-path-card";
import { Grid, List } from "lucide-react";

export function LearningPathsSection() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  // Define the 6 featured learning paths exactly as shown in the screenshot
  const featuredPaths = [
    {
      title: "Foundations of Intelligence",
      humorousQuote: "Because you can't build a house of cards without knowing what cards are",
      description: "Learn the fundamental concepts and principles of intelligence analysis",
      imagePath: "/foundations-thumb.png",
      path: "/learning-paths/foundations",
      difficulty: "Beginner" as const,
      topicCount: 12,
      estimatedTime: "3-4 hours",
    },
    {
      title: "Strategic Intelligence",
      humorousQuote: "Think big picture, or get lost in the pixels",
      description: "Master long-term analysis and strategic forecasting techniques",
      imagePath: "/strategic-intelligence-thumb.png",
      path: "/learning-paths/strategic-intelligence",
      difficulty: "Advanced" as const,
      topicCount: 15,
      estimatedTime: "4-5 hours",
    },
    {
      title: "OSINT Fundamentals",
      humorousQuote: "Professional stalking with a badge and better coffee",
      description: "Master open source intelligence collection and analysis techniques",
      imagePath: "/osint-thumb.png",
      path: "/learning-paths/osint",
      difficulty: "Beginner" as const,
      topicCount: 18,
      estimatedTime: "5-6 hours",
    },
    {
      title: "Report Writing",
      humorousQuote: "Making your brilliant insights sound... well, brilliant",
      description: "Develop professional intelligence writing and presentation skills",
      imagePath: "/report-writing-thumb.png", 
      path: "/learning-paths/report-writing",
      difficulty: "Intermediate" as const,
      topicCount: 8,
      estimatedTime: "2-3 hours",
    },
    {
      title: "Threat Assessment",
      humorousQuote: "Separating real dangers from your neighbor's loud music",
      description: "Learn methodologies for evaluating and communicating threats",
      imagePath: "/threat-assessment-thumb.png",
      path: "/learning-paths/threat-assessment",
      difficulty: "Advanced" as const,
      topicCount: 12,
      estimatedTime: "4-6 hours",
    },
    {
      title: "IBM Analyst Notebook",
      humorousQuote: "Making connections visible, one link at a time",
      description: "Learn to use IBM i2 Analyst's Notebook for link analysis and data visualization",
      imagePath: "/analyst-notebook.png", 
      path: "/learning-paths/analyst-notebook",
      difficulty: "Intermediate" as const,
      topicCount: 8,
      estimatedTime: "3-4 hours",
    },
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Featured Learning Paths</h2>
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-md w-fit mx-auto">
            <button 
              onClick={() => setViewMode('grid')} 
              className={`p-2 rounded-md flex items-center gap-1 ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
              aria-label="Grid view"
            >
              <Grid size={18} />
              <span className="text-sm">Grid</span>
            </button>
            <button 
              onClick={() => setViewMode('list')} 
              className={`p-2 rounded-md flex items-center gap-1 ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
              aria-label="List view"
            >
              <List size={18} />
              <span className="text-sm">List</span>
            </button>
          </div>
        </div>
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPaths.map((path, index) => (
              <div key={path.title}>
                <LearningPathCard
                  title={path.title}
                  humorousQuote={path.humorousQuote}
                  description={path.description}
                  image={path.imagePath}
                  href={path.path}
                  difficulty={path.difficulty}
                  topics={path.topicCount}
                  estimatedTime={path.estimatedTime}
                  enable3D={true}
                  intensity="medium"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {featuredPaths.map((path, index) => (
              <div key={path.title} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={path.path} className="flex items-center p-4">
                  <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 mr-4">
                    <img src={path.imagePath} alt={path.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg">{path.title}</h3>
                    <p className="text-gray-600 text-sm mb-1">{path.description}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="mr-3">{path.difficulty}</span>
                      <span className="mr-3">{path.topicCount} topics</span>
                      <span>{path.estimatedTime}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
        
        <div className="flex justify-center mt-12">
          <Link 
            href="/learning-paths" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors shadow-md hover:shadow-lg"
          >
            View All Learning Paths
          </Link>
        </div>
      </div>
    </section>
  )
}
