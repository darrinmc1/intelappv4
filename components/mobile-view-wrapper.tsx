"use client";

import dynamic from "next/dynamic";

// Dynamically import the MobileViewToggle component with SSR disabled
const MobileViewToggle = dynamic(
  () => import("./mobile-view-toggle").then(mod => mod.MobileViewToggle),
  { ssr: false }
);

export function MobileViewWrapper() {
  return <MobileViewToggle />;
}