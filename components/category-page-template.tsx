import Image from "next/image"
import { StartCourseButton } from "@/components/start-course-button"

interface CategoryPageTemplateProps {
  title: string
  description: string
  imagePath: string
  courses: {
    title: string
    path: string
    description: string
  }[]
  relatedCategories?: {
    title: string
    path: string
  }[]
}

export function CategoryPageTemplate({
  title,
  description,
  imagePath,
  courses,
  relatedCategories,
}: CategoryPageTemplateProps) {
  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{description}</p>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src={imagePath || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">All Courses in this Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.path} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-muted-foreground mb-4">{course.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Course</span>
                <StartCourseButton path={course.path}>
                  Start: {course.title}
                </StartCourseButton>
              </div>
            </div>
          ))}
        </div>
      </div>

      {relatedCategories && relatedCategories.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedCategories.map((category) => (
              <div key={category.path} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                <StartCourseButton 
                  path={category.path} 
                  variant="outline"
                >
                  Explore Category
                </StartCourseButton>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
