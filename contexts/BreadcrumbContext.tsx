"use client";

import { createContext, useContext, useState } from "react";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbContextType {
  segmentOverrides: Record<string, string>;
  setSegmentOverride: (segment: string, label: string) => void;
  clearSegmentOverride: (segment: string) => void;
  customItems: BreadcrumbItem[] | null;
  setCustomBreadcrumbs: (items: BreadcrumbItem[]) => void;
  clearCustomBreadcrumbs: () => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextType>({
  segmentOverrides: {},
  setSegmentOverride: () => {},
  clearSegmentOverride: () => {},
  customItems: null,
  setCustomBreadcrumbs: () => {},
  clearCustomBreadcrumbs: () => {},
});

export function BreadcrumbProvider({ children }: { children: React.ReactNode }) {
  const [segmentOverrides, setSegmentOverrides] = useState<Record<string, string>>({});
  const [customItems, setCustomItems] = useState<BreadcrumbItem[] | null>(null);

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

  const setCustomBreadcrumbs = (items: BreadcrumbItem[]) => setCustomItems(items);
  const clearCustomBreadcrumbs = () => setCustomItems(null);

  return (
    <BreadcrumbContext.Provider value={{
      segmentOverrides,
      setSegmentOverride,
      clearSegmentOverride,
      customItems,
      setCustomBreadcrumbs,
      clearCustomBreadcrumbs,
    }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}

export function useBreadcrumb() {
  return useContext(BreadcrumbContext);
}
