"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function OtherSitesDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const sites = [
    { name: "OSINT Advanced Course", href: "/request-topic?interest=osint-advanced" },
    { name: "Management", href: "/request-topic?interest=management" },
    { name: "Project Management", href: "/request-topic?interest=project-management" },
    { name: "Renovations", href: "/request-topic?interest=renovations" },
    { name: "Cybersecurity", href: "/request-topic?interest=cybersecurity" }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-medium transition-all duration-200 hover:text-primary group"
        aria-expanded={isOpen}
      >
        Other Learning Sites
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-300",
            isOpen ? "rotate-180" : "group-hover:translate-y-[2px]"
          )}
        />
      </button>
      
      <div
        className={cn(
          "absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md overflow-hidden z-50 transition-all duration-300 ease-in-out origin-top",
          isOpen
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-95 translate-y-[-10px] pointer-events-none"
        )}
        style={{ width: "220px" }}
      >
        <div className="p-2">
          <h3 className="font-bold text-sm mb-2 px-2 pt-1 text-gray-500">COMING SOON</h3>
          <ul className="space-y-1">
            {sites.map((site) => (
              <li key={site.name}>
                <Link
                  href={site.href}
                  className="block px-3 py-2 text-sm hover:bg-blue-50 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {site.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}