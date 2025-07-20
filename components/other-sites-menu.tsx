"use client";

import Link from "next/link";

export const otherSites = [
  { name: "OSINT Advanced Course", href: "/request-topic?interest=osint-advanced", isExternal: false },
  { name: "Management", href: "https://v0-management-app-eight.vercel.app/", isExternal: true },
  { name: "Project Management", href: "https://3000-i9bm041qafwh68hb4auhu-bf09371d.manusvm.computer", isExternal: true },
  { name: "Renovations", href: "https://v0-home-renovation-app-smoky.vercel.app/", isExternal: true },
  { name: "Cybersecurity", href: "https://v0-comprehensive-security-training.vercel.app/", isExternal: true }
];

export function OtherSitesMenu() {
  return (
    <div className="p-4 animate-fadeIn relative">
      <div className="grid grid-cols-2 gap-6 relative z-10">
        <div>
          <h3 className="font-bold text-lg mb-2">Intel Academy Resources</h3>
          <ul className="space-y-2">
            <li className="animate-slideIn">
              <Link href="/learning-paths" className="flex items-start gap-2 hover:text-primary">
                <div>
                  <div className="font-medium">Learning Paths</div>
                  <div className="text-sm text-muted-foreground">Structured learning journeys</div>
                </div>
              </Link>
            </li>
            <li className="animate-slideIn">
              <Link href="/topics" className="flex items-start gap-2 hover:text-primary">
                <div>
                  <div className="font-medium">Topics</div>
                  <div className="text-sm text-muted-foreground">Individual learning modules</div>
                </div>
              </Link>
            </li>
            <li className="animate-slideIn">
              <Link href="/categories" className="flex items-start gap-2 hover:text-primary">
                <div>
                  <div className="font-medium">Categories</div>
                  <div className="text-sm text-muted-foreground">Browse by subject area</div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Other Learning Sites</h3>
          <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md text-sm font-medium mb-3 inline-block">
            In Development
          </div>
          <ul className="space-y-2">
            {otherSites.map((site) => (
              <li key={site.name} className="animate-slideIn">
                {site.isExternal ? (
                  <a 
                    href={site.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-start gap-2 hover:text-primary"
                  >
                    <div>
                      <div className="font-medium">{site.name}</div>
                      <div className="text-sm text-muted-foreground">Visit site</div>
                    </div>
                  </a>
                ) : (
                  <Link href={site.href} className="flex items-start gap-2 hover:text-primary">
                    <div>
                      <div className="font-medium">{site.name}</div>
                      <div className="text-sm text-muted-foreground">Express interest</div>
                    </div>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}