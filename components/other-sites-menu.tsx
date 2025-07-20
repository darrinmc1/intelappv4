"use client";

import Link from "next/link";

export const otherSites = [
  { name: "OSINT Advanced Course", href: "/request-topic?interest=osint-advanced" },
  { name: "Management", href: "/request-topic?interest=management" },
  { name: "Project Management", href: "/request-topic?interest=project-management" },
  { name: "Renovations", href: "/request-topic?interest=renovations" },
  { name: "Cybersecurity", href: "/request-topic?interest=cybersecurity" }
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
            Coming Soon
          </div>
          <ul className="space-y-2">
            {otherSites.map((site) => (
              <li key={site.name} className="animate-slideIn">
                <Link href={site.href} className="flex items-start gap-2 hover:text-primary">
                  <div>
                    <div className="font-medium">{site.name}</div>
                    <div className="text-sm text-muted-foreground">Express interest</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}