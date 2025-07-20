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
      <div className="relative z-10">
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
  );
}