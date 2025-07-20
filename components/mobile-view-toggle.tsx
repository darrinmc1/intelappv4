"use client";

import { useState, useEffect } from "react";

export function MobileViewToggle() {
  const [isMobileView, setIsMobileView] = useState(false);
  
  useEffect(() => {
    // Apply mobile view styles when the component mounts and state changes
    if (isMobileView) {
      document.body.classList.add('mobile-view-simulation');
    } else {
      document.body.classList.remove('mobile-view-simulation');
    }
    
    // Clean up when component unmounts
    return () => {
      document.body.classList.remove('mobile-view-simulation');
    };
  }, [isMobileView]);
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsMobileView(!isMobileView)}
        className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        {isMobileView ? "Desktop View" : "Mobile View"}
      </button>
    </div>
  );
}