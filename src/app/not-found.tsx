"use client";

import { useEffect } from "react";
import { useTheme } from "@/app/context/theme-context";

export default function NotFound() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("red");

    return () => setTheme("green");
  }, [setTheme]);

  return <div>404 Page Not Found</div>;
}
