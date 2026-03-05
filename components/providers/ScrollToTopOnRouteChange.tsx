"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollToTopOnRouteChange() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) {
      return;
    }

    // Run on the next frame so the new route has mounted first.
    const frame = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
