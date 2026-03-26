"use client";

import { createContext, useContext, useState } from "react";

interface BreadcrumbContextType {
  segmentOverrides: Record<string, string>;
  setSegmentOverride: (segment: string, label: string) => void;
  clearSegmentOverride: (segment: string) => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextType>({
  segmentOverrides: {},
  setSegmentOverride: () => {},
  clearSegmentOverride: () => {},
});

export function BreadcrumbProvider({ children }: { children: React.ReactNode }) {
  const [segmentOverrides, setSegmentOverrides] = useState<Record<string, string>>({});

  const setSegmentOverride = (segment: string, label: string) => {
    setSegmentOverrides((prev) => ({ ...prev, [segment]: label }));
  };

  const clearSegmentOverride = (segment: string) => {
    setSegmentOverrides((prev) => {
      const next = { ...prev };
      delete next[segment];
      return next;
    });
  };

  return (
    <BreadcrumbContext.Provider value={{ segmentOverrides, setSegmentOverride, clearSegmentOverride }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}

export function useBreadcrumb() {
  return useContext(BreadcrumbContext);
}
