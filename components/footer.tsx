import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">The Intel Analyst Academy</h3>
            <p className="text-gray-600">Professional education for intelligence analysts at all levels.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Learning Paths</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/learning-paths/foundations"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Foundations
                </Link>
              </li>
              <li>
                <Link
                  href="/learning-paths/strategic-intelligence"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Strategic Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/learning-paths/tactical-intelligence"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Tactical Intelligence
                </Link>
              </li>
              <li>
                <Link href="/learning-paths/osint" className="text-gray-600 hover:text-blue-600 transition-colors">
                  OSINT
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/downloads" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Community Forum
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/request-topic"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Other learning sites</h3>
            <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md text-xs font-medium mb-3 inline-block">
              In Development
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/request-topic?interest=osint-advanced" className="text-gray-600 hover:text-blue-600 transition-colors">
                  OSINT Advanced Course
                </Link>
              </li>
              <li>
                <a href="https://v0-management-app-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Management
                </a>
              </li>
              <li>
                <a href="https://3000-i9bm041qafwh68hb4auhu-bf09371d.manusvm.computer" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Project Management
                </a>
              </li>
              <li>
                <a href="https://v0-home-renovation-app-smoky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Renovations
                </a>
              </li>
              <li>
                <a href="https://v0-comprehensive-security-training.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Cybersecurity
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} The Intel Analyst Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
