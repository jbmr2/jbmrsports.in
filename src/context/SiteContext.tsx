import React, { useState, useContext } from 'react';
import { defaultSiteContent, type SiteContent } from '../constants/siteContent';

const SiteContentContext = React.createContext<{
  content: SiteContent;
  setContent: React.Dispatch<React.SetStateAction<SiteContent>>;
} | null>(null);

export function SiteContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);

  return (
    <SiteContentContext.Provider value={{ content, setContent }}>
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent() {
  const ctx = useContext(SiteContentContext);
  if (!ctx) throw new Error('useSiteContent must be used within SiteContentProvider');
  return ctx;
}
