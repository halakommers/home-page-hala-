import { createContext, useContext, useState, type ReactNode } from "react";

interface UIContextValue {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const UIContext = createContext<UIContextValue | null>(null);

export function UIProvider({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <UIContext.Provider value={{ isMobileMenuOpen, setMobileMenuOpen }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI(): UIContextValue {
  const ctx = useContext(UIContext);
  if (!ctx) {
    throw new Error("useUI must be used within a <UIProvider>");
  }
  return ctx;
}
