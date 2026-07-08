"use client";

import { useEffect } from "react";
import { useNavbarTheme } from "@/app/context/navbar-context";

export default function NotFound() {
  const { setTheme } = useNavbarTheme();

  useEffect(() => {
    setTheme("red");

    return () => setTheme("green");
  }, [setTheme]);

  return <div>404 Page Not Found</div>;
}
