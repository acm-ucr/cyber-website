"use client";

import { createContext, useContext, useState } from "react";

type NavbarTheme = "green" | "red";

type NavbarContextType = {
  theme: NavbarTheme;
  setTheme: (theme: NavbarTheme) => void;
};

const NavbarContext = createContext<NavbarContextType | null>(null);

export function NavbarProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<NavbarTheme>("green");

  return (
    <NavbarContext.Provider value={{ theme, setTheme }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbarTheme() {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error("useNavbarTheme must be used inside NavbarProvider");
  }

  return context;
}
